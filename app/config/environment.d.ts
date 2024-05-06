/**
 * Type declarations for
 *    import config from 'front-vocab/config/environment'
 */
declare const config: {
  environment: string;
  modulePrefix: string;
  podModulePrefix: string;
  locationType: 'history' | 'hash' | 'none';
  rootURL: string;
  APP: Record<string, unknown>;
  API_URL: string;
};

export default config;
