import {
  DataTypes,
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

export class AuthEmailRecord extends Model<
  InferAttributes<AuthEmailRecord>,
  InferCreationAttributes<AuthEmailRecord>
> {
  declare id: CreationOptional<number>;

  declare userEmail: string;

  declare encryptedCode: string;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;
}

export function initAuthEmailRecord(sequelize: Sequelize): void {
  AuthEmailRecord.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      userEmail: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      encryptedCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      modelName: 'AuthEmailRecords',
      tableName: 'authEmailRecords',
      timestamps: true,
      sequelize,
    },
  );
}
