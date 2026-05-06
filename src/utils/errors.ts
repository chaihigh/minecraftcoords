export const em = (error: unknown): string => {
  // @ts-ignore
  return error ? error.message : error;
}