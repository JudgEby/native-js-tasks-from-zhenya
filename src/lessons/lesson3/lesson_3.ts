import axios from 'axios'
console.log('lesson 3')

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU

// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

const configJSONPlaceholder = {
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}
const axiosInstance = axios.create(configJSONPlaceholder)

const get = axiosInstance
  .get('posts')
  .then((response) => console.log('Get', response))

const post = axiosInstance
  .post(
    'posts',
    JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    })
  )
  .then((response) => console.log('Post', response))

const put = axiosInstance
  .put(
    'posts/23',
    JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    })
  )
  .then((response) => console.log('Put', response))

const delete1 = axiosInstance
  .delete('posts/3')
  .then((response) => console.log('Delete', response))

// just a plug
export default () => {}
