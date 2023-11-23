declare module "types" {
  interface CustomError extends Error {
    status?: number;
    code?: number;
  }
}
