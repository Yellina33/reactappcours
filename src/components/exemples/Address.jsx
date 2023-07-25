function Address(props) {
    return(
        <div>
            <h4 className="fs-5">{props.address}</h4>
        <form action="" method="get" id="form">
            <label htmlFor="email">Email address</label><br />
            <input type="email" id="email" name="email" size="60"/>
        </form>
        </div>

    )
}

export default Address