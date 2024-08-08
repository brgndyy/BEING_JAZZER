"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv = __importStar(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
const HttpError_1 = __importDefault(require("./error/HttpError"));
const errorMessages_1 = __importDefault(require("./constants/errorMessages"));
const progressMessages_1 = __importDefault(require("./constants/progressMessages"));
const options_1 = require("./constants/options");
const models_1 = __importDefault(require("./models"));
const userRoutes_1 = require("./routes/userRoutes");
const chordImageRoutes_1 = require("./routes/chordImageRoutes");
dotenv.config();
const app = (0, express_1.default)();
app.set('port', process.env.PORT || 80);
app.use((0, cors_1.default)(options_1.CORS_OPTIONS));
app.use((0, helmet_1.default)({
    crossOriginResourcePolicy: false,
}));
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(process.env.BACK_END_NODE_ENV === 'production' ? (0, morgan_1.default)('combined') : (0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/images', express_1.default.static('src/assets/images'));
models_1.default
    .query('SET FOREIGN_KEY_CHECKS = 0')
    // .then(() => sequelize.query('TRUNCATE TABLE refreshTokens'))
    // .then(() => sequelize.query('TRUNCATE TABLE userSettings'))
    // .then(() => sequelize.query('TRUNCATE TABLE authEmailRecords'))
    // .then(() => sequelize.query('TRUNCATE TABLE users'))
    // .then(() => sequelize.query('SET FOREIGN_KEY_CHECKS = 1'))
    .then(() => models_1.default.sync({ force: false }))
    .then(() => {
    console.log(progressMessages_1.default.succeed_connect_database);
})
    .catch((err) => {
    console.error(err);
});
app.use('/api/users', userRoutes_1.userRoutes);
app.use('/api/chord-images', chordImageRoutes_1.chordImageRoutes);
app.use(() => {
    const error = new HttpError_1.default(errorMessages_1.default.ROUTE_ERROR, 404);
    throw error;
});
app.use((error, req, res) => {
    res.status(error.code || 500);
    res.json({ message: error.message || errorMessages_1.default.DEFAULT_ERROR });
});
app.listen(app.get('port'), () => {
    console.log(process.env.BACK_END_NODE_ENV === 'production'
        ? progressMessages_1.default.sever_start_from_production
        : progressMessages_1.default.sever_start_from_development);
    console.log(app.get('port'), progressMessages_1.default.port);
});
