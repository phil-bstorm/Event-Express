import { Utilisateur } from '../../core/database/models/utilisateur.model';

export class UtilisateurDto {
    static toDTOUtilisateur(u: Utilisateur) {
        return {
            id: u.id,
            username: u.username,
            role: u.role,
        };
    }

    static toDTOUtilisateurDetailed(u: Utilisateur) {
        return {
            id: u.id,
            username: u.username,
            role: u.role,
            participates: u.participates,
            owns: u.owns,
        };
    }
}
