# Swagger Documentation Template

## Endpoint Template
```javascript
/**
 * @swagger
 * /api/endpoint-path:
 *   post:
 *     summary: What this endpoint does
 *     description: Detailed description of functionality
 *     tags:
 *       - TagName
 *     security:
 *       - bearerAuth: []  # Requires JWT token
 *     # OR for public endpoints:
 *     security: []  # No authentication required
 *     
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               field1:
 *                 type: string
 *                 example: "value1"
 *               field2:
 *                 type: string
 *                 example: "value2"
 *             required:
 *               - field1
 *               - field2
 *     
 *     responses:
 *       201:
 *         description: Success response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 message:
 *                   type: string
 *                   example: Validation failed
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */