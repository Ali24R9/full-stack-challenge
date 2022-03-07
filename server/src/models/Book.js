module.exports = (sequelize, DataTypes) =>
sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    unique: true
  },
  subtitle: DataTypes.STRING,
  description: DataTypes.STRING(140),
  publisher: DataTypes.STRING,
  published_date: DataTypes.STRING,
  preview_link: DataTypes.STRING,
  cover_image: DataTypes.STRING,
  timestamp: DataTypes.STRING,
})

//Book has many authors and has many categories