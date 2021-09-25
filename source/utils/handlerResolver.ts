export const handlerPath = (context: string, handler?: string) => {
  const path = context
    .split(process.cwd())[1]
    .substring(1)
    .replace(/\\/g, '/')
    .replace('.ts', '');
  return `${path}/${handler || 'handler.main'}`;
};
