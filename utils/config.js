require('dotenv').config();

const MONGODB_URI_Link = process.env.MONGODB_URI ;
const PORT = process.env.PORT || 3001

module.exports = {MONGODB_URI_Link , PORT};