import server from '../api/server'
export const getAnimalsByIdCityService = async (id) => {
  try {
    const res = await server.get(`/animal/city/${id}`, {
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

export const getAnimalByIdService = async (id) => {
  try {
    const res = await server.get(`/animal/${id}`, {
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
