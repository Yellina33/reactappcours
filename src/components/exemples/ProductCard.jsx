const ProductCard = ({ name, img, description, price, stock }) => {
    return (
        <div className="card text-dark shadow-lg mb-5" style={{ width: "18rem"}}>
            <img src={img}
                 alt={name} 
                 className="card-img-top object-fit-contain" 
            />
            
            <div className="card-body">
                <h3 className="card-title fw-bold text-start mb-1">{name}</h3>
                <p className="card-text">{description}</p>
                <hr/>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="bg-warning px-1 rounded-3 fs-6">{price}€</span>
                    <span className="text-secondary text-end fw-bold">{stock} in stock</span>
                </div>
            </div>

        </div>
        
    )
}

export default ProductCard;