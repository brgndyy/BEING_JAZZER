import {
  DataTypes,
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

export class UserSetting extends Model<
  InferAttributes<UserSetting>,
  InferCreationAttributes<UserSetting>
> {
  declare id: CreationOptional<number>;

  declare userId: number;

  declare keyId: number;

  declare chordId: number;

  declare chordVersionId: number;
}

export function initUserSetting(sequelize: Sequelize): void {
  UserSetting.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: { model: 'User', key: 'id' },
      },
      keyId: {
        type: DataTypes.INTEGER,
        references: { model: 'Key', key: 'id' },
      },
      chordId: {
        type: DataTypes.INTEGER,
        references: { model: 'Chord', key: 'id' },
      },
      chordVersionId: {
        type: DataTypes.INTEGER,
        references: { model: 'KeyChordDetail', key: 'id' },
      },
    },
    {
      modelName: 'UserSettings',
      tableName: 'userSetting',
      sequelize,
    },
  );
}
