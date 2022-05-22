"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const line = require("@line/bot-sdk");
class getAudience {
    constructor() {
        this.client = new line.Client({
            channelAccessToken: process.env.channelAccessTokenLoadFinder
        });
    }
    getAudienceData() {
        this.client.getBotFollowersIds()
            .then((audience) => {
            console.log(audience);
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
exports.default = new getAudience();
