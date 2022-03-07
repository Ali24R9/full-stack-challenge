import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  books (credentials) {
    return Api().post('books', credentials)
  }
}