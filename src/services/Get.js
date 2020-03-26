import API, { execute } from './Api'

export default {
  getResponse: () => execute(API().get('responses')),
  getStaff: () => execute(API().get('staff')),
  getDepartments: () => execute(API().get('departments')),
  getRequests: () => execute(API().get('requests')),
  getExcel: (id) => execute(API().get(`requests/${id}/getExcel`))
}
