/**
 * Turn all object values into strings
 * @param params The object containing all key value pairs
 */
export const parseParams = (params: { [key: string]: any }, ...blackList: any[]): { [key: string]: string } => {
  const _params: { [key: string]: string } = {};
  Object.keys(params).forEach(key => {
    const elem = params[key];
    if (elem && !blackList.includes(elem)) {
      _params[key] = `${params[key]}`;
    }
  });
  return _params;
};
