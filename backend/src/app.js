const express = require('express');

const cors = require('cors');
const helmet = require('helmet');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger')


const app = express();

app.use(helmet());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api-docs/', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use('/api/auth', require('./routes/authRoutes'));

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Server is running!'
    });
});

//TODO: Add routes here later
//app.use('/api/auth', authRoutes);
//app.use('/api/links', linkRoutes);

//404 handler - if no route matches
app.use((req, res)=>{
    res.status(400).json({
        status: 'error',
        message: 'Route not found'
    });
});

//TODO: Add error handling middleware later

module.exports = app;
