/**
 * @swagger
 * tags:
 *   name: Tickets
 *   description: Ticket management endpoints
 */

/**
 * @swagger
 * /tickets:
 *   post:
 *     summary: Create a new ticket
 *     tags: [Tickets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               commuterPhone:
 *                 type: string
 *                 description: Commuter's phone number
 *                 example: 1234567890
 *               tripId:
 *                 type: string
 *                 description: The ID of the trip
 *                 example: 1
 *               busId:
 *                 type: string
 *                 description: The ID of the bus
 *                 example: 12
 *     responses:
 *       201:
 *         description: Ticket created successfully
 *       400:
 *         description: Bad request
 */
