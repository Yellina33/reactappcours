const Card = ({infoMovie}) => {
    return (
        <div className="card text-dark w-25 d-flex bg-light">
            <img src="/src/asses/transformer.jpg" alt="transformer" className="img-fluid w-75 m-auto pt-3" />
            <hr />
            <div className="card-body">
                <h3 className="card-title text-start mb-2">{infoMovie.name}</h3>
                <button type="button" className="btn btn-outline-primary mb-3">{infoMovie.price}</button>
                <p className="card-text">{infoMovie.description}</p>
                <p className="text-warning text-end fs-sm">{infoMovie.stock} in stock</p>
            </div>

        </div>
        
    )
}

export default Card