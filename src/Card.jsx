import picture from './assets/vite.svg'

function Card(){
  return(
      <div className="card">
        <img className="card-img" src={picture} alt="Profile Picture" />
        <h2 className='card-title'>Runner</h2>
        <p className='card-text'>Photoshop and 3D Artist and a UEFN Programer </p>
      </div>
  )
}

export default Card