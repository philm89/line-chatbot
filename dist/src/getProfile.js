"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const line = require("@line/bot-sdk");
class getProfile {
    constructor() {
        this.client = new line.Client({
            channelAccessToken: process.env.channelAccessTokenLoadFinder
        });
    }
    getProfileCall() {
        this.client.getProfile(process.env.lfUserID)
            .then((profile) => {
            console.log(profile);
            // console.log(profile.displayName);
            // console.log(profile.userId);
            // console.log(profile.pictureUrl);
            // console.log(profile.statusMessage);
        })
            .catch((err) => {
            console.error(err);
        });
    }
}
exports.default = new getProfile();
