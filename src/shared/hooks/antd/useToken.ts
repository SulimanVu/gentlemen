import { theme } from 'antd';

/**
 * Возвращает токен из темы Ant Design.
 */
export const useToken = (): ReturnType<typeof theme.useToken> => {
  return theme.useToken();
};
