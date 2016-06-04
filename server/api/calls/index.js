import Router from 'koa-router'
import catapult from '../../services/catapult'

const callRouter = new Router();

callRouter.get('/calls/:callId', async (ctx, next) => {

})

/**
 * @api {post} /calls create a new call
 * @apiName CreateCall
 * @apiGroup calls
 *
 * @apiParam {String} to The phone number you want to call from your number
 * @apiParam {String} from Your phone number that you want to make the call from
 *
 * @apiSuccess {String} callId The id of the call you just created
*/
callRouter.post('/calls', async (ctx, next) => {
    console.log(ctx.request.body)
    try {
      const call = await catapult.Call.create(ctx.request.body)
      ctx.body = {
        callId: call.id
      }
      ctx.status = 201
    } catch (e) {
      console.log(e)
      ctx.status = 500
    }

})

export default callRouter.routes()
