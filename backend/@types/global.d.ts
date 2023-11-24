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
}
