import { UserRole } from '../enums/user-role.enum';

export interface Token {
    id: number;
    username: string;
    role: UserRole;
}
