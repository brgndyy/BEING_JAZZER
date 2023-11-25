import { Sequelize } from 'sequelize';
import { Config } from 'types';
import configData from '../config/config';
import { initUser } from './users';
import { initAuthEmailRecord } from './authEmailRecords';
import { User } from './users';
import { AuthEmailRecord } from './authEmailRecords';

const configs: Config = configData;
const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const config = configs[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password === null ? undefined : config.password,
  {
    host: config.host,
    dialect: 'mysql',
    timezone: '+09:00',
  },
);

// 워크벤치에 테이블 생성
initAuthEmailRecord(sequelize);
initUser(sequelize);

// 관계 설정
function setupAssociations(): void {
  User.belongsTo(AuthEmailRecord, { foreignKey: 'emailId' });
}

setupAssociations();

export default sequelize;
