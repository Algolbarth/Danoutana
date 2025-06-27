import { Extension } from "./Extension";

export class Game {
    extensions:Extension[] = [];

    constructor() {
        this.extensions.push(new Extension());
    };
};