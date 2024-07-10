export interface Emailable {
    _email: string;

    matchesEmail(value: string): boolean;

}
