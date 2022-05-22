import * as line from '@line/bot-sdk'

class getProfile {
    private client = new line.Client({
        channelAccessToken: process.env.channelAccessTokenMarTech
    });

    public getProfileCall() {
        this.client.getProfile(process.env.lfUserID)
            .then((profile) => {
                console.log(profile)
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

export default new getProfile()

