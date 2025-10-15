const bcrypt = require('bcrypt');


class PasswordService {
    constructor(parameters) {
        this.saltRounds = 10
    }

    /**
     * Hash a plain text password
    * @param {string} password - Plain text password
    * @returns {Promise<string>} - Hashed password
    */

    async hash(password){
        try{
            const hashedPassword = await bcrypt.hash(password, this.saltRounds);
            return hashedPassword;

        }catch (error){
            throw new error('Password hashing Failed')
        }
    }


    /**
   * Validate password strength
   * @param {string} password - Password to validate
   * @returns {object} - { isValid, errors }
   */

    validatePasswordStrength(password){
        const errors = [];
        if(!password){
            errors.push('Password is required');
            return {isValid: false, errors};

        }

        if(password.length < 6){
            errors.push('Password must be at least 6 characters');
        }

        if(password.length > 128){
            errors.push('Password must be less than 128 characters')
        }

        const commonPasswords = ['password', '123456', 'qwerty', 'abc123']
        if(commonPasswords.includes(password.toLowerCase())){
            errors.push('Password is too common')
        }

        return{
            isValid: errors.length === 0,
            errors
        };
    }

} 

module.exports = new PasswordService();


