const swaggerJsdoc = require('swagger-jsdoc');

/**
 * Swagger/OpenAPI configuration
 * Defines the basic info about your API
 */

const swaggerOptions ={
    definition: {
        openapi: '3.0.0',  // OpenAPI version
        info: {
            title: 'URL Shortener API',
            version: '1.0.0',
            description: 'A Fullstack URL shortening service with analytics, QR codes, and more',
            contact: {
                name: 'Frank',
                email: 'frank.email@example.com'
            }
        },
        servers:[
            {
                url: 'http://localhost:5000',
                description: 'Development server'
            },
            {
                url: 'https://yourdomain.com',
                description: 'Production server (when deployed)'
            }
        ],

        components: {
            securitySchemes: {
                bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                description: 'JWT Authorization header using the Bearer scheme'
                }
            }
        },
        security: [
        {
            bearerAuth: []
        }
        ]
    },
    // Where to look for JSDoc comments
    apis: [
        'src/routes/*.js',      // All route files
        'src/controllers/*.js'  // All controller files
    ]
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
module.exports =swaggerSpec;
