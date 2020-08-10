import API, { execute } from './Api'

export default {
  doSeen: (id) => execute(API().post(`contacts/${id}/seen`)),
  getAll: () => execute(API().get('contacts')),
  getSingle: (id) => execute(API().get(`contacts/${id}`))
}
