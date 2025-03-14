import express from 'express'
import { updateEmailAlerts, 
    updatePromotionalEmails, 
    updatePushNotifications, 
    updateWeeklySummary, 
    updateSecurityAlerts } from '../controllers/notificationController.js'

const router = express.Router()

// Route to enable/disable email alerts
router.post('/email-alerts', updateEmailAlerts)

// Route for updating promotional email setting
router.post('/promotional-emails', updatePromotionalEmails)

//  Route for updating Push Notifications
router.post('/push-notifications', updatePushNotifications)

//  Route for updating Weekly Summary
router.post('/weekly-summary', updateWeeklySummary)

//  Route for updating Security Alerts
router.post('/security-alerts', updateSecurityAlerts)

export default router
