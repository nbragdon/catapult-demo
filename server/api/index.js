import convert from 'koa-convert'
import callApi from './calls'
import messageApi from './messages'

export default function () {
    return convert.compose([
        callApi,
        messageApi
    ])
}
