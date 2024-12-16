/**
 * @swagger
 * tags:
 *   name: Trip Schedules
 *   description: Trip schedule management endpoints
 */

/**
 * @swagger
 * /trip-schedules:
 *   get:
 *     summary: Get all trip schedules or search schedules
 *     tags: [Trip Schedules]
 *     parameters:
 *       - in: query
 *         name: busId
 *         schema:
 *           type: string
 *         description: The ID of the bus to filter schedules
 *       - in: query
 *         name: routeId
 *         schema:
 *           type: string
 *         description: The ID of the route to filter schedules
 *     responses:
 *       200:
 *         description: List of trip schedules
 *       500:
 *         description: Internal server error
 */
