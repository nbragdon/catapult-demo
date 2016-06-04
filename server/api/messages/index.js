import Router from 'koa-router'
import catapult from '../../services/catapult'

const messageRouter = new Router();

messageRouter.get('/messages/:messageId', async (ctx, next) => {

})

/**
 * @api {post} /messages create a new message
 * @apiName CreateMessage
 * @apiGroup messages
 *
 * @apiParam {String} to The phone number you want to send your message to
 * @apiParam {String} from Your phone number that you want to send the message from
 * @apiParam {String} text the message you wish to send
 *
 * @apiSuccess {String} messageId The id of the message you just created
*/
messageRouter.post('/messages', async (ctx, next) => {
    const message = await catapult.Message.create(ctx.request)
    ctx.body = {
      messageId: call.id
    }
    ctx.status = 201
})

export default messageRouter.routes()
