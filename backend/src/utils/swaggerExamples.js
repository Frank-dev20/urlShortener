/**
 * Reusable Swagger examples and schemas
 * Use these to keep documentation consistent and DRY
 */

const swaggerExamples = {
  // Error response examples
  errorResponses: {
    badRequest: {
      status: 'error',
      message: 'Validation failed'
    },
    unauthorized: {
      status: 'error',
      message: 'Authentication required'
    },
    notFound: {
      status: 'error',
      message: 'Resource not found'
    },
    conflict: {
      status: 'error',
      message: 'Email already exists'
    },
    serverError: {
      status: 'error',
      message: 'Something went wrong. Please try again.'
    }
  },
  
  // Common schemas
  schemas: {
    // User object
    user: {
      _id: 'user_id_123',
      email: 'user@example.com',
      isEmailVerified: false,
      createdAt: '2025-10-14T10:30:00Z'
    },
    
    // Link object
    link: {
      _id: 'link_id_456',
      shortCode: 'abc123',
      shortUrl: 'http://localhost:5000/abc123',
      destinationUrl: 'https://example.com',
      userId: 'user_id_123',
      clickCount: 42,
      qrCodeUrl: 'https://azure-blob.../qr-abc123.png',
      safetyStatus: 'safe',
      createdAt: '2025-10-14T10:30:00Z'
    },
    
    // Click/Analytics object
    click: {
      _id: 'click_id_789',
      linkId: 'link_id_456',
      timestamp: '2025-10-14T10:30:00Z',
      device: 'mobile',
      browser: 'Chrome',
      os: 'iOS',
      country: 'US',
      city: 'New York',
      referrer: 'google.com'
    }
  }
};

module.exports = swaggerExamples;