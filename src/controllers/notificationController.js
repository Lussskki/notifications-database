import User from '../database/models/userModel.js'

// Update email alerts preference
export const updateEmailAlerts = async (req, res) => {
    try {
        const { email, enable } = req.body

        // Find the user by email
        const user = await User.findOne({ email })
        if (!user) return res.status(404).json({ message: 'User not found' })

        // Update email alert settings
        user.notifications.emailAlerts = enable
        await user.save()

        res.json({ message: `Email alerts ${enable ? 'enabled' : 'disabled'}` })
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}
