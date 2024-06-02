export interface Task {
    id: number;
    name: string;
    project_id: number;
    employee_id: number;
    description: string;
    status: Status;
    createdAt: string;
    statusText?: string;
    employee_name?: string;
    employee_avatar?: string;
    project_name?: string;
}

export enum Status {
    new = 'new',
    inprogress = 'inprogress',
    completed = 'completed',
    canceled = 'canceled'
}
