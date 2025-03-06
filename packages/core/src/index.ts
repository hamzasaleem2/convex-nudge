export * from './types';
export * from './styles';
export * from './config';
export * from './svg';

import { LinkOptions } from './types';

export const getConvexUrl = (referralCodeOrOptions?: string | LinkOptions): string => {
  const baseUrl = 'https://convex.dev';
  
  if (typeof referralCodeOrOptions === 'string') {
    return `${baseUrl}?ref=${referralCodeOrOptions}`;
  }

  if (referralCodeOrOptions) {
    const { path, referralCode, utm } = referralCodeOrOptions;
    const url = new URL(path ? `${baseUrl}/${path.replace(/^\//, '')}` : baseUrl);

    if (referralCode) {
      url.searchParams.set('ref', referralCode);
    }

    if (utm) {
      if (utm.source) url.searchParams.set('utm_source', utm.source);
      if (utm.medium) url.searchParams.set('utm_medium', utm.medium);
      if (utm.campaign) url.searchParams.set('utm_campaign', utm.campaign);
      if (utm.term) url.searchParams.set('utm_term', utm.term);
      if (utm.content) url.searchParams.set('utm_content', utm.content);
    }

    return url.toString();
  }

  return baseUrl;
};