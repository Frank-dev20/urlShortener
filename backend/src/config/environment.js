const path = require('path');
require('dotenv').config({ 
  path: path.resolve(__dirname, '../../.env') 
});

const requiredEnvironmentVariables = [
    'PORT',
    'MONGODB_URI',
    'jWT_SECRET',
    'NODE_ENV'
];

requiredEnvironmentVariables.forEach((varName)=>{
    if(!process.env[varName]){
        console.error(`ERROR: Missing required environment variable: ${varName}`);
        process.exit(1);
    }
});

module.exports = {
    port: process.env.PORT || 5000,
    mongoUri: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
    nodeEnv: process.env.NODE_ENV || 'development',
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production'
};