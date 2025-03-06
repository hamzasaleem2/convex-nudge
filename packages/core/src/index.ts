export * from './types';
export * from './styles';
export * from './config';
export * from './svg';

export const getConvexUrl = (referralCode?: string): string => {
  const baseUrl = 'https://convex.dev';
  return referralCode ? `${baseUrl}?ref=${referralCode}` : baseUrl;
};