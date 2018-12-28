module.exports = {
  port: process.env.PORT || 3000,
  GRAPHQL_ENDPOINT_URI: process.env.GRAPHQL_ENDPOINT_URI || '',
  FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || '',
  FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || '',
  FIREBASE_DB_URL: process.env.FIREBASE_DB_URL || '',
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || '',
};
