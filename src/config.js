function ensureVariable(v, name) {
  if (v == null || v.length === 0) {
    throw new Error(`Env variable ${name} not set!`);
  }

  return v;
}

module.exports = {
  port: process.env.PORT || 3000,
  GRAPHQL_ENDPOINT_URI: ensureVariable(process.env.GRAPHQL_ENDPOINT_URI),
  FIREBASE_API_KEY: ensureVariable(
    process.env.FIREBASE_API_KEY,
    'FIREBASE_API_KEY',
  ),
  FIREBASE_AUTH_DOMAIN: ensureVariable(
    process.env.FIREBASE_AUTH_DOMAIN,
    'FIREBASE_AUTH_DOMAIN',
  ),
  FIREBASE_DB_URL: ensureVariable(
    process.env.FIREBASE_DB_URL,
    'FIREBASE_DB_URL',
  ),
  FIREBASE_PROJECT_ID: ensureVariable(
    process.env.FIREBASE_PROJECT_ID,
    'FIREBASE_PROJECT_ID',
  ),
};
