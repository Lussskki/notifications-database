import express from 'express'
import { updateEmailAlerts } from '../controllers/notificationController.js'

const router = express.Router()

// Route to enable/disable email alerts
router.post('/email-alerts', updateEmailAlerts)

export default router
