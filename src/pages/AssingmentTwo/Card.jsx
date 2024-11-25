import Cicus from './assets/cicmic11.jpg'

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={Cicus} alt="profile picture" />
            <h2 className='card-title'>Cica</h2>
            <p className='card-text'>Meow meow meow</p>
        </div>
    )
}

export default Card