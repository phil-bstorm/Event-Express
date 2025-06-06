import type { Request, Response } from 'express';
import { utilisateurRepo } from '../core/database';
import { UtilisateurDto } from '../dtos/output/utilisateur.dto';
import * as bcrypt from 'bcrypt';
import { Utilisateur } from '../core/database/models/utilisateur.model';
import jwt from 'jsonwebtoken';

const authController = {
    register: async (req: Request, res: Response) => {
        try {
            const user = req.body;

            // Vérification si l'utilisateur existe déjà
            const existingUser = await utilisateurRepo.findOne({
                where: { username: user.username },
            });
            if (existingUser) {
                res.status(400).json({
                    error: "Nom d'utilisateur déjà utilisé",
                });
                return;
            }

            // Vérification de la présence du mot de passe
            const salt = await bcrypt.genSalt();
            user.password = await bcrypt.hash(user.password, salt); // Hashage du mot de passe

            // Création du nouvel utilisateur
            const newUser = utilisateurRepo.create(user as Utilisateur);
            const savedUser = await utilisateurRepo.save(newUser);

            // Création du token JWT
            const token = jwt.sign(
                {
                    id: savedUser.id,
                    username: savedUser.username,
                    role: savedUser.role,
                },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }, // Durée de validité du token
            );

            // Réponse avec les détails de l'utilisateur et le token
            res.status(200).json({
                message: 'Connexion réussie',
                user: UtilisateurDto.toDTOUtilisateurDetailed(savedUser),
                token,
            });
        } catch (error) {
            console.log("Erreur lors de l'enregistrement:", error);

            res.status(500).json({ error: 'Erreur serveur' });
        }
    },

    login: async (req: Request, res: Response) => {
        try {
            const { username, password } = req.body;

            // Vérification de l'existence de l'utilisateur
            const user = await utilisateurRepo.findOne({
                where: { username },
            });
            if (!user) {
                res.status(401).json({ error: 'Identifiants invalides' });
                return;
            }

            // Vérification du mot de passe
            const isPasswordValid = await bcrypt.compare(
                password,
                user.password,
            );
            if (!isPasswordValid) {
                res.status(401).json({ error: 'Identifiants invalides' });
                return;
            }

            // Création du token JWT
            const token = jwt.sign(
                { id: user.id, username: user.username, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }, // Durée de validité du token
            );

            // Réponse avec les détails de l'utilisateur et le token
            res.status(200).json({
                message: 'Connexion réussie',
                user: UtilisateurDto.toDTOUtilisateurDetailed(user),
                token,
            });
        } catch (error) {
            console.log('Erreur lors de la connexion:', error);

            res.status(500).json({ error: 'Erreur serveur' });
        }
    },
};

export default authController;
