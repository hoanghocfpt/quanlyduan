export interface Employee {
    id: number;
    name: string;
    email?: string;
    gender: Gender | null;
    genderText?: string;
    phone?: string;
    address?: string;
    avatar: string | '/assets/images/default-avatar.webp';
    position: string;
    leader: number;
}

export enum Gender {
    male = 'male',
    female = 'female'
}