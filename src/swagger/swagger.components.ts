/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Utilisateur:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         username:
 *           type: string
 *           example: alice
 *         role:
 *           type: string
 *           example: USER
 *     InvitationSummary:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         status:
 *           type: string
 *           description: Statut de l'invitation (PENDING, ACCEPTED, etc.)
 *         event:
 *           type: object
 *           properties:
 *             id:
 *               type: number
 *             title:
 *               type: string
 *     EvenementSummary:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         date:
 *           type: string
 *           format: date-time
 *         isActive:
 *           type: boolean
 *     UtilisateurDetailed:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         username:
 *           type: string
 *         role:
 *           type: string
 *         participates:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/InvitationSummary'
 *         owns:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/EvenementSummary'
 *     TokenResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: "Connexion réussie"
 *         user:
 *           $ref: '#/components/schemas/UtilisateurDetailed'
 *         token:
 *           type: string
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           example: "Message d'erreur"
 */
