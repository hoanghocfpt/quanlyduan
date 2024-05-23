export interface Employee {
    id: number;
    name: string;
    email?: string;
    gender: Gender | null;
    phone?: string;
    address?: string;
    avatar: string | '/assets/images/default-avatar.webp';
    position: string;
    leader: boolean | false;
}

enum Gender {
    Male = 'male',
    Female = 'female'
}