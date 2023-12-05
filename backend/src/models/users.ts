import {
  DataTypes,
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;

  declare userEmail: string;

  declare userName: string;

  declare userProfileImageSrc: string;

  declare emailId: number;

  declare nowLoggedIn: boolean;

  declare isAdmin: boolean;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;
}

export function initUser(sequelize: Sequelize): void {
  User.init(
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
      userName: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      userProfileImageSrc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      emailId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'authEmailRecords', // 테이블 이름으로 설정해주어야한다.
          key: 'id',
        },
      },
      nowLoggedIn: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      modelName: 'Users',
      tableName: 'users',
      timestamps: true,
      sequelize,
    },
  );
}
