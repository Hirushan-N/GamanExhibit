/**
 * @swagger
 * tags:
 *   name: Routes
 *   description: Route management endpoints
 */

/**
 * @swagger
 * /routes:
 *   get:
 *     summary: Get all routes or search routes
 *     tags: [Routes]
 *     parameters:
 *       - in: query
 *         name: routeNumber
 *         schema:
 *           type: string
 *         description: The route number to filter by
 *     responses:
 *       200:
 *         description: List of routes matching the criteria
 *       500:
 *         description: Internal server error
 */
