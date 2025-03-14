import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    notifications: {
        emailAlerts: { type: Boolean, default: false },  
        pushNotifications: { type: Boolean, default: false },
        weeklySummary: { type: Boolean, default: false },
        securityAlerts: { type: Boolean, default: false },
        receivePromotionalEmails: { type: Boolean, default: false } 
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

export default User
