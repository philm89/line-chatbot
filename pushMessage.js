import dotenv from 'dotenv'
import line from '@line/bot-sdk'
dotenv.config
// const line = require('@line/bot-sdk');

const client = new line.Client({
    channelAccessToken: process.env.channelAccessToken
});

const message = {
    type: 'text',
    text: 'Hello World!'
};

try {
    const results = await client.pushMessage(process.env.myUserID, message)
    console.log(process.env.myUserID + message)

} catch (error) {

}


