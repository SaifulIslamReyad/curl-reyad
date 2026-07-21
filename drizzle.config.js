require('dotenv').config();
const { defineConfig } = require('drizzle-kit');

module.exports = defineConfig({
  dialect: 'postgresql',
  schema: './schema.js',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
