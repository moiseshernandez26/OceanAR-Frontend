import './styles.css'

function Loading () {
  return (
    <div className='spinner-view'>
      <div className='container-spinner'>
        <div className='spinner' />
        <span className='text-spinner'>Loading...</span>
      </div>
    </div>
  )
}

export default Loading
