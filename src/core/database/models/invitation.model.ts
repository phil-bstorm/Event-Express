import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    Unique,
} from 'typeorm';
import { InvitationStatus } from '../../enums/invitation-status.enum';
import { Utilisateur } from './utilisateur.model';
import { Evenement } from './evenement.model';

@Entity()
export class Invitation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: InvitationStatus,
        default: InvitationStatus.PENDING,
        nullable: false,
    })
    status: InvitationStatus;

    @ManyToOne(() => Utilisateur, (u) => u.participates)
    user: Utilisateur;

    @ManyToOne(() => Evenement, (e) => e.invitations)
    event: Evenement;
}
