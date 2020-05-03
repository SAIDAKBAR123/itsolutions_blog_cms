import API, { execute } from './Api'

export default {
  postMainImage: (data) => execute(API().post('files', data)),
  postNewBlog: data => execute(API().post('posts', data)),
  getAllPosts: data => execute(API().get('posts'))
}
