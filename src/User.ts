import { Timestamps } from './Common';

declare namespace User {

    export type User = {
        id: number;
        avatar: boolean;
        avatar_url?: string;
        nickname: string;
        name: string;
        email: string;
        metadata?: UserMetadata | null;
        permissions?: string[];
    } & Timestamps;

    export type UserMetadata = {
        phonenumber: string;
        orcid: string;
        department: string;
        institution: string;
        field: string;
        role: string;
    }

}