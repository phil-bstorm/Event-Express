import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from '../../enums/user-role.enum';
import { Evenement } from './evenement.model';
import { Invitation } from './invitation.model';

@Entity()
export class Utilisateur {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 100,
        unique: true,
        nullable: false,
    })
    username: string;

    @Column({
        type: 'varchar',
    })
    password: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER,
    })
    role: UserRole;

    // Utilisateur owns many Evenements
    @OneToMany(() => Evenement, (e) => e.owner)
    owns: Evenement[];

    // Utilisateur participates in many Evenements
    @OneToMany(() => Invitation, (i) => i.user)
    participates: Invitation[];
}
