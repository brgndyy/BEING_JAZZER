import {
  DataTypes,
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

export class Key extends Model<InferAttributes<Key>, InferCreationAttributes<Key>> {
  declare id: CreationOptional<number>;

  declare key: string;
}

export function initKey(sequelize: Sequelize): void {
  Key.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      key: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      modelName: 'Keys',
      tableName: 'keys',
      timestamps: false,
      sequelize,
    },
  );
}
