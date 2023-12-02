declare module 'types' {
  interface CustomError extends Error {
    status?: number;
    code?: number;
  }

  interface EnvConfig {
    database: string;
    username: string;
    password: string | null | undefined;
    host: string;
  }

  interface Config {
    [env: string]: EnvConfig;
  }

  interface NewUserType {
    id: number;
    userName: string;
    userEmail: string;
    emailId: number;
    userProfileImageSrc: string;
    isAdmin: boolean;
    nowLoggedIn: boolean;
    updatedAt: Date;
    createdAt: Date;
  }
}
