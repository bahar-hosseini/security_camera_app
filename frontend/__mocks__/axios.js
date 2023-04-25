
const users =
    {
      email: "yana@example.com",
password:'qazwsx'
    }


export default {
  post: jest.fn(url => {
    if (url === "/api/users/login") {
      return Promise.resolve({
        status: 200,
        data: users
      });
      }
  })
}