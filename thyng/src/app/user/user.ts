import { Attribute } from '../shared/attribute';

export interface User {
    id?: string;
    name: string;
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;
    attributes: Attribute[];
}
