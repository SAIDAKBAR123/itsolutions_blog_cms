import API, { execute } from './Api'

export default {
  createNewProject: data => execute(API().post('portfolio', data)),
  getAll: () => execute(API().get('portfolio')),
  getSingle: (id) => execute(API().get('portfolio/' + id)),
  updateProject: (id, data) => execute(API().post(`portfolio/${id}`, data)),
  deleteProject: (id, data) => execute(API().delete(`portfolio/${id}`))
}
