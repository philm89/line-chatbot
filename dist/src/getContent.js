"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const line = require("@line/bot-sdk");
dotenv.config();
class getContent {
    constructor() {
        this.client = new line.Client({
            channelAccessToken: process.env.channelAccessToken
        });
    }
    getContentAsync() {
        this.client.getMessageContent('15317976588179')
            .then((stream) => {
            stream.on('data', (chunk) => {
            });
            stream.on('error', (err) => {
                // error handling
            });
        });
    }
}
exports.default = new getContent();
