/**
 * Application-wide constants
 */

// Blacklisted slugs - Reserved words that users cannot use
const BLACKLISTED_SLUGS = [
  // Application routes
  'api',
  'admin',
  'dashboard',
  'analytics',
  'login',
  'signup',
  'logout',
  'settings',
  'profile',
  'health',
  'docs',
  'help',
  'support',
  'about',
  'contact',
  'terms',
  'privacy',
  'preview',
  
  // Common websites (prevent impersonation)
  'google',
  'facebook',
  'twitter',
  'instagram',
  'youtube',
  'linkedin',
  'github',
  'amazon',
  'netflix',
  'microsoft',
  
  // Potentially offensive/confusing
  'null',
  'undefined',
  'admin',
  'root',
  'test',
  'demo'
];

// HTTP status codes (for consistency)
const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  GONE: 410,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500
};

// Error messages (consistent across app)
const ERROR_MESSAGES = {
  // Auth errors
  INVALID_CREDENTIALS: 'Invalid email or password',
  EMAIL_ALREADY_EXISTS: 'Email already registered',
  UNAUTHORIZED: 'Authentication required',
  INVALID_TOKEN: 'Invalid or expired token',
  
  // Link errors
  LINK_NOT_FOUND: 'Link not found',
  SLUG_TAKEN: 'This custom slug is already taken',
  SLUG_BLACKLISTED: 'This slug is reserved and cannot be used',
  INVALID_URL: 'Please provide a valid URL',
  LINK_EXPIRED: 'This link has expired',
  PASSWORD_REQUIRED: 'This link requires a password',
  INCORRECT_PASSWORD: 'Incorrect password',
  
  // General errors
  SERVER_ERROR: 'Something went wrong. Please try again.',
  VALIDATION_ERROR: 'Validation failed'
};

// Success messages
const SUCCESS_MESSAGES = {
  SIGNUP_SUCCESS: 'Account created successfully',
  LOGIN_SUCCESS: 'Logged in successfully',
  LINK_CREATED: 'Short link created successfully',
  LINK_UPDATED: 'Link updated successfully',
  LINK_DELETED: 'Link deleted successfully'
};

// Regular expressions
const REGEX_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  SLUG: /^[a-zA-Z0-9-_]+$/,
  URL: /^https?:\/\/.+/
};

module.exports = {
  BLACKLISTED_SLUGS,
  HTTP_STATUS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  REGEX_PATTERNS
};