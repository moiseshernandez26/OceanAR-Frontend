import server from '../api/server'
export const createNewAccount = async (data) => {
  try {
    const res = await server.post('/user', JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const logIn = async (data) => {
  try {
    const res = await server.post(
      '/user/login',
      JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    return res.data
  } catch (err) {
    console.log(err)
    throw err
  }
}
