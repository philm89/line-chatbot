import * as dotenv from 'dotenv'
dotenv.config()

import getContent from './src/getContent'
import getProfile from './src/getProfile'
import pushMessage from './src/pushMessage'
import getAudience from './src/getAudienceData'

getProfile.getProfileCall()
// pushMessage.pushMessageAsync()
// getContent.getContentAsync()
// getAudience.getAudienceData()