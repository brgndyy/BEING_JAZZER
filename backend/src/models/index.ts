import { Sequelize } from 'sequelize';
import { Config } from 'types';
import configData from '../config/config';
import { initUser } from './users';
import { initAuthEmailRecord } from './authEmailRecords';
import { User } from './users';
import { AuthEmailRecord } from './authEmailRecords';
import { initRefreshToken, RefreshToken } from './refreshTokens';
import { initKey, Key } from './keys';
import { initChord, Chord } from './chords';
import { initKeyChordDetail, KeyChordDetail } from './keyChordDetail';
import { UserSetting, initUserSetting } from './userSetting';

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
initRefreshToken(sequelize);
initKey(sequelize);
initChord(sequelize);
initKeyChordDetail(sequelize);
initUserSetting(sequelize);

// 관계 설정
function setupAssociations(): void {
  User.belongsTo(AuthEmailRecord, { foreignKey: 'emailId' });
  RefreshToken.belongsTo(User, { foreignKey: 'userId' });
  Chord.belongsTo(Key, { foreignKey: 'keyId' });
  KeyChordDetail.belongsTo(Chord, { foreignKey: 'chordId' });
  Key.hasMany(Chord, { foreignKey: 'keyId' });
  Chord.hasMany(KeyChordDetail, { foreignKey: 'chordId' });
  UserSetting.belongsTo(User, { foreignKey: 'userId' });
  UserSetting.belongsTo(Key, { foreignKey: 'keyId' });
  UserSetting.belongsTo(Chord, { foreignKey: 'chordId' });
  UserSetting.belongsTo(KeyChordDetail, { foreignKey: 'keyChordDetailId' });
}

setupAssociations();

export default sequelize;
