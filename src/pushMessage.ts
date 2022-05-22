import * as line from '@line/bot-sdk'
import { TextMessage } from '@line/bot-sdk'

class pushMessage {
    private client = new line.Client({
        channelAccessToken: process.env.channelAccessTokenMarTech
    });

    public async pushMessageAsync() {
        const message: TextMessage = {
            type: "text",
            text: 'I am sending a new message to Phins Martech Line account'
        };

        try {
            const results = await this.client.pushMessage(process.env.myUserID, message)
            console.log(`Message sent`)

        } catch (error) {
            console.error(error)
        } return undefined

    }
}

export default new pushMessage()
