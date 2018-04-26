export class Game {
    key: string;
    title: string;
    owner: string;
    message: string;
    type: string;
    dateCreated: string;

    constructor(key: string, title: string, owner: string, message: string, type: string, dateCreated: string) {
        this.key = key;
        this.title = title || "New Game";
        this.owner = owner || "Anonymous";
        this.message = message || '';
        this.type = type || '7 up, 7 down';
        this.dateCreated = dateCreated;
    }
}
