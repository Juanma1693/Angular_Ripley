import { TypeAccount } from './TypeAccount';

export interface Recipient {
    rut?: number;
    name?: string;
    email?: string;
    tel?: number;
    bank?: string;
    TypeAccountId?: number;
    number_account?: number;
    TypeAccount: TypeAccount;
}
