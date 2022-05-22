"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const line = require("@line/bot-sdk");
class pushMessage {
    constructor() {
        this.client = new line.Client({
            channelAccessToken: process.env.channelAccessToken
        });
    }
    async pushMessageAsync() {
        const message = {
            type: "text",
            text: 'I am sending a new message to Phins Martech Line account'
        };
        try {
            const results = await this.client.pushMessage(process.env.myUserID, message);
            console.log(`Message sent`);
        }
        catch (error) {
            console.error(error);
        }
        return undefined;
    }
}
exports.default = new pushMessage();
