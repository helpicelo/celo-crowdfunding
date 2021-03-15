const dotenv = require('dotenv').config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PRIVATE_KEY: process.env.PRIVATE_KEY || 'acaa295b538fd0f1d7d5f2be510a5bc5d24ba35fc826774bfcc4fc9b448588e6',
  HOST: process.env.HOST || 'http://localhost:7545',
}