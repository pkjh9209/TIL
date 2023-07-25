/**
 * @swagger
 * /boards:
 *   get:
 *     summary: read
 *     tags: [Board]
 *     parameters:
 *       - in: requied
 *         name: idx
 *         type: int
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   number:
 *                     type: int
 *                     example: 1
 *                   writer:
 *                     type: string
 *                     example: customer1
 *                   title:
 *                     type: string
 *                     example: title1
 *                   contents:
 *                     type: string
 *                     example: contents1
 */


/**
 * @swagger
 * /boards:
 *   post:
 *     summary: update
 *     tags: [Board]
 *     responses:
 *       200:
 *         description: 200 ok
 */