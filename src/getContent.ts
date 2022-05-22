import * as dotenv from 'dotenv'
import * as line from '@line/bot-sdk'
dotenv.config()


class getContent {
    private client = new line.Client({
        channelAccessToken: process.env.channelAccessTokenMarTech
    });

    public getContentAsync() {
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

export default new getContent()

