import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Utilisateur } from './utilisateur.model';
import { Invitation } from './invitation.model';

@Entity()
export class Evenement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 100,
    })
    title: string;

    @Column({
        type: 'text',
    })
    description: string;

    @Column({
        type: 'timestamp',
    })
    date: Date;

    @Column({
        type: 'boolean',
        default: false,
    })
    isActive: boolean;

    // Many-to-one relationship with Utilisateur
    @ManyToOne(() => Utilisateur, (u) => u.owns)
    owner: Utilisateur;

    // Utilisateur participates in Evenement
    @OneToMany(() => Invitation, (i) => i.event)
    invitations: Invitation[];
}
