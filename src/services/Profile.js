import API, { execute } from './Api'

export default {
  deleteReq: (id) => execute(API().delete(`requests/${id}`))
}
