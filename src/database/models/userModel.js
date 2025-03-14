import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    notifications: {
        emailAlerts: { type: Boolean, default: false },  // Email alerts ON/OFF
        pushNotifications: { type: Boolean, default: false },
        weeklySummary: { type: Boolean, default: false },
        securityAlerts: { type: Boolean, default: false }
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

export default User
