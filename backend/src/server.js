const app = require('./app');
const connectDB = require('./config/database');
const config = require('./config/environment');

connectDB();

const PORT = config.port;
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Environment: ${config.nodeEnv}`);
    console.log(`Database: ${config.mongoUri}`);
});