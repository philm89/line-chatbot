import * as line from '@line/bot-sdk'

class getAudience {
    private client = new line.Client({
        channelAccessToken: process.env.channelAccessTokenMarTech
    });

    public getAudienceData() {
        this.client.getBotFollowersIds()
            .then((audience) => {
                console.log(audience)
                // console.log(profile.displayName);
                // console.log(profile.userId);
                // console.log(profile.pictureUrl);
                // console.log(profile.statusMessage);
            })
            .catch((err) => {
                console.error(err)
            })

    }
}

export default new getAudience()