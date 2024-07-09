export class Message {
    title: string;
    message: string;
    private _isSent?: boolean;

    constructor(title: string, message: string) {
        this.title = title;
        this.message = message;
        this._isSent = false;
    }


    get isSent(): boolean {
        return this._isSent;
    }

    set isSent(value: boolean) {
        this._isSent = value;
    }

    get messageStatus(): string {
        const sentMessage = this._isSent ? 'Has been sent' : 'Not yet sent';

        return `${this.message} | ${sentMessage}`;
    }

    previewMessage(): string {
        return this.message.slice(0, 10).concat('...');
    }

}
