/**
 * @swagger
 * tags:
 *   name: Buses
 *   description: Bus management endpoints
 */

/**
 * @swagger
 * /buses:
 *   get:
 *     summary: Search buses or get all buses
 *     tags: [Buses]
 *     parameters:
 *       - in: query
 *         name: busNumber
 *         schema:
 *           type: string
 *         description: The bus number to filter by
 *       - in: query
 *         name: capacity
 *         schema:
 *           type: number
 *         description: The capacity of the bus to filter by
 *     responses:
 *       200:
 *         description: List of buses matching the search criteria
 *       500:
 *         description: Internal server error
 */
