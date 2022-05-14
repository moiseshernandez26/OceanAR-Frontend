const Map = ({ urlMap }) => {
  return (
    <div className='map'>
      <iframe src={urlMap} width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade' />
    </div>
  )
}

export default Map
