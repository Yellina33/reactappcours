import { useState } from "react"
import LogInBtn from "./LogInBtn"
import LogOutBtn from "./LogOutBtn"

const NavConnect = () => {
    const [isLogged, setIsLogged] = useState(false);
    const handleIsLogged = () => {
        // pour inverser le boolean
        setIsLogged (!isLogged);
    };

    return(
        <div>
            {isLogged ? 
                (<LogOutBtn onClick={handleIsLogged} /> 
                ) : (
                <LogInBtn onClick={handleIsLogged} />
                )}
        </div>
    );
};


export default NavConnect