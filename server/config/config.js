module.exports = {
  port: 8000,
  db: {
    database: process.env.DB_NAME || 'browser',
    user: process.env.DB_USER || 'browser',
    password: process.env.DB_PASSWORD || 'browser',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './browswer.sqlite'
    }
  }
}
