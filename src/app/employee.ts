export interface Employee {
    id: number;
    name: string;
    email?: string;
    phone?: string;
    address?: string;
    avatar: string | '/assets/images/default-avatar.webp';
    position: string;
    leader: boolean | false;
}
