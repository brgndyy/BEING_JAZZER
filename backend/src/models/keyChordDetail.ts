import {
  DataTypes,
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

export class KeyChordDetail extends Model<
  InferAttributes<KeyChordDetail>,
  InferCreationAttributes<KeyChordDetail>
> {
  declare id: CreationOptional<number>;

  declare keyId: number;

  declare chordId: number;

  declare version: number;

  declare theme: string;

  declare imageUrl: string;
}

export function initKeyChordDetail(sequelize: Sequelize): void {
  KeyChordDetail.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      keyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Key',
          key: 'id',
        },
      },
      chordId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Chord',
          key: 'id',
        },
      },
      version: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      theme: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      modelName: 'KeyChordDetails',
      tableName: 'keyChordDetail',
      timestamps: false,
      sequelize,
    },
  );
}
