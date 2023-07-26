function Address(props) {
    return(
        <div>
            <h4 className="fs-5">Location: {props.address}</h4>
        <form action="" method="get" id="form">
            <label htmlFor="email" className="subtitle lh-lg">Subscribe to our news</label><br />
            <input type="email" 
                    id="email" 
                    name="email" 
                    size="60" 
                    placeholder="Email Address"
                    />
                    
            <input type="button" 
                    value="Connect" 
                    className="bg-warning border-0 ms-1 px-3 py-1" />
        </form>
        </div>

    )
}

export default Address;