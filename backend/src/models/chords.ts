import {
  DataTypes,
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

export class Chord extends Model<InferAttributes<Chord>, InferCreationAttributes<Chord>> {
  declare id: CreationOptional<number>;

  declare keyId: number;

  declare root: string;

  declare quality: string;

  declare tension: string;
}

export function initChord(sequelize: Sequelize): void {
  Chord.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      keyId: {
        type: DataTypes.INTEGER,
        references: { model: 'keys', key: 'id' },
      },
      root: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      quality: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      tension: {
        type: DataTypes.STRING(10),
        allowNull: true, // 텐션은 선택적이므로 allowNull을 true로 설정
      },
    },
    {
      modelName: 'Chords',
      tableName: 'chords',
      timestamps: false,
      sequelize,
    },
  );
}
