import API, { execute } from './Api'

export default {
  getAll: (id) => execute(API().get('tags'))
}
