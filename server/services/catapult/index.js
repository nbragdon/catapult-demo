import CatapultClient from 'node-bandwidth'
import config from '../../../config'

console.log('config.catapult', config.catapult);

const client = new CatapultClient(config.catapult)

export default client
