/**
 * @swagger
 * /api/auth/health:
 *   get:
 *     summary: Health check for auth service
 *     description: Quick endpoint to verify auth service is working
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: Service is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Auth service is running
 */

const express = require('express');

const router = express.Router();

// TODO: Auth endpoints will be added here tomorrow
// For now, this file exists for Swagger documentation structure

/**
 * Health check route (temporary - for testing Swagger)
 */

router.get('/health', (req, res)=>{
    res.json({
        status: 'success',
        message: 'Auth service is runing'
    });
});

module.exports = router;