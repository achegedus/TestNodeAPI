
import {AuthToken} from './authtoken.model';
import {Profile} from './profile.model';

export interface User {
    email?: string;
    username?: string;
    password?: string;

    role?: string;
    active?: boolean;

    passwordResetToken?: string;
    passwordResetExpires?: Date;

    tokens?: Array<AuthToken>;
    profile?: Profile;
}