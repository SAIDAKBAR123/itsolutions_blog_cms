import API, { execute } from './Api'

export default {
  createNewProject: data => execute(API().post('portfolio', data))
}
