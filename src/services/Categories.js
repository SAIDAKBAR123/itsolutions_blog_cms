import API, { execute } from './Api'

export default {
  getCategories: () => execute(API().get('categories'))
}
