import API, { execute } from './Api'

export default {
  postMainImage: data => execute(API().post('files', data)),
  updateMainImage: (id, data) => execute(API().post(`files/${id}`, data)),
  deleteMainImage: id => execute(API().delete(`files/${id}`)),
  postNewBlog: data => execute(API().post('posts', data)),
  getAllPosts: () => execute(API().get('posts')),
  getSinglePost: id => execute(API().get(`posts/${id}`)),
  updateSinglePost: (id, data) => execute(API().post(`posts/${id}`, data)),
  deleteSinglePost: id => execute(API().delete(`posts/${id}`))
}
