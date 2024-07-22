import { mockAPI } from '~/shared/config'

export default class Article {
  async get() {
    return useFetch(`${mockAPI}/todos/1`)
  }
}
