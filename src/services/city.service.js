import server from '../api/server'
export const getCities = async () => {
  try {
    const res = await server.get('/city', {
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
