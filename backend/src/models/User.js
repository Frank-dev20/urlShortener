const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, 'email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [
            /^\S+@\S+\.\S+$/,
            'Please provide a valid email address'
        ]
    },
    
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [6, 'Password must be at least 6 characters']
    },

    isEmailVerified: {
        type: Boolean,
        default: false
    },

    emailVerificationToken: {
        type: String,
        default: null
    },

    emailVerificationExpires: {
        type: Date,
        default: null
    },
  
  // Password reset fields
    resetPasswordToken: {
        type: String,
        default: null
    },

    resetPasswordExpires: {
        type: Date,
        default: null
   },
  
  // Notification preferences
   emailNotifications: {
        linkMilestones: {
        type: Boolean,
        default: true
        },

        weeklyReport: {
        type: Boolean,
        default: false
        }
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
}, 
    {
    timestamps: true 
    } // Automatically add createdAt and updatedAt

);

// Create indexes for better query performance
UserSchema.index({ email: 1 });  // 1 = ascending order
UserSchema.index({ emailVerificationToken: 1 });
UserSchema.index({ resetPasswordToken: 1 });

// Export the model
module.exports = mongoose.model('User', UserSchema);

