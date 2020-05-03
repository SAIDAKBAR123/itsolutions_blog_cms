import API, { execute } from './Api'

export default {
  getProfile: (id) => execute(API().get('profile'))
}
