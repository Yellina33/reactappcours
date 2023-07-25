const ProductCard = ({name, img, description, price, stock}) => {
    return (
        <div className="card text-dark w-25 shadow-lg">
            <img src={img}
                 alt={name} 
                 className="card-img-top object-fit-contain" 
            />
            
            <div className="card-body">
                <h3 className="card-title fw-bold text-start mb-1">{name}</h3>
                <p className="card-text pt-2">{description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="bg-warning px-1 rounded-3 fs-5">{price}€</span>
                    <span className="text-warning text-end fw-bold">{stock} in stock</span>
                </div>
            </div>

        </div>
        
    )
}

export default ProductCard