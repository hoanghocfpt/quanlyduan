export interface Project {
    id: number;
    name: string;
    description: string;
    imageUrl?: string;
    cost: number;
    dayStart: string;
    leader: number;
    members?: number[];
}
