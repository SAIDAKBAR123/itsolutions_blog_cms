import API, { execute } from './Api'

export default {
  sentRequest: (data) => execute(API().post('requests', data))
}
