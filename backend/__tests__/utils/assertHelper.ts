// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toRequestBody = (fromObj: any): any => {
  return JSON.parse(JSON.stringify(fromObj));
};
