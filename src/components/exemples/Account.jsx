const Account = ({ infoAccount }) => {
    return (
        <div id="cardAccount" className="bg-gradient">
            <h3 className="fs-4">User: {infoAccount.name}</h3>
            <p>Pseudo: {infoAccount.username}</p>
            <p>Email: {infoAccount.email}</p>
            <p>{infoAccount.phone}</p>
        </div>
    );
};

export default Account;
