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
        references: { model: 'users', key: 'id' },
      },
      keyId: {
        type: DataTypes.INTEGER,
        references: { model: 'keys', key: 'id' },
      },
      chordId: {
        type: DataTypes.INTEGER,
        references: { model: 'chords', key: 'id' },
      },
      chordVersionId: {
        type: DataTypes.INTEGER,
        references: { model: 'keyChordDetails', key: 'id' },
      },
    },
    {
      modelName: 'UserSettings',
      tableName: 'userSettings',
      sequelize,
    },
  );
}
