declare namespace NodeJS {
  interface ProcessEnv {
    SANITY_PROJECT_ID: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    NODE_ENV: 'development' | 'production';
  }
}
