/**
 * Collection of validation functions
 */

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid
 */

const isValidEmail = (email)=>{
    if(!email || typeof email !== 'string') return false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
};

/**
 * Validate URL format
 * @param {string} url - URL to validate
 * @returns {boolean} - True if valid
 */

const isValidUrl = (url)=>{
    if(!url || typeof url !== 'string') return false;
    
    try{
        const urlObject = new URL(url);
        return urlObject.protocol === 'http:' || urlObject.protocol === 'https:';

    }catch (error){
        return false;
    }

};

/**
 * Validate custom slug format
 * @param {string} slug - Slug to validate
 * @returns {object} - { isValid, error }
 */

const isValidSlug = ()=>{
    if(!slug || typeof slug !== 'string'){
        return{isValid: false, error: 'Slug is required'};
    } 
    const trimmedSlug = slug.trim();

    // Check length
    if (trimmedSlug.length < 3) {
        return { isValid: false, error: 'Slug must be at least 3 characters' };
    }
    
    if (trimmedSlug.length > 30) {
        return { isValid: false, error: 'Slug must be less than 30 characters' };
    }

     // Check format (alphanumeric, hyphens, underscores only)
    const slugRegex = /^[a-zA-Z0-9-_]+$/;
    if (!slugRegex.test(trimmedSlug)) {
        return { 
        isValid: false, 
        error: 'Slug can only contain letters, numbers, hyphens, and underscores' 
        };
    }
    
    return { isValid: true, error: null };
}

/**
 * Sanitize string input (remove dangerous characters)
 * @param {string} input - String to sanitize
 * @returns {string} - Sanitized string
 */

const sanitizeInput = (input) => {
  if (!input || typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/[<>]/g, ''); // Remove < and > to prevent XSS
};


/**
 * Validate date is in the future
 * @param {Date|string} date - Date to validate
 * @returns {boolean} - True if date is in future
 */
const isFutureDate = (date) => {
  const inputDate = new Date(date);
  const now = new Date();
  return inputDate > now;
};

module.exports = {
  isValidEmail,
  isValidUrl,
  isValidSlug,
  sanitizeInput,
  isFutureDate
};