export class Game {
	key: string;
	message: string;
	owner: string;

    constructor(key: string, owner: string, message: string) {
		this.key = key;
		this.message = message;
		this.owner = owner;
    }
}