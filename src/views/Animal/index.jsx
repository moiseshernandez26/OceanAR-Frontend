import { useParams } from 'react-router-dom'
const Animal = () => {
  const params = useParams()
  return (
    <div>
      <h1>Animals</h1>
      {params.id}
    </div>
  )
}

export default Animal
