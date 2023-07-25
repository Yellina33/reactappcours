import { useState } from "react";
import Account from "./components/exemples/Account";
import Address from "./components/exemples/Address";
import NavBar from "./components/exemples/NavBar";
import Card from "./components/exemples/Card";


const App = () => {
  const [fullAddress] =  useState("33 rue Anatole France 59000 Lille")
  
  
  const [account] = useState({
    name: "John Doe",
    username: "jdoe",
    email: "jdoe@gmail.com",
    phone: "06.19.26.15.17"
  })

  const [account2] = useState({
    name: "Jack Smith",
    username: "jsmith",
    email: "jsmith@gmail.com",
    phone: "06.20.7.96.57"
  })

  const [movie1] = useState({
    name:"Transfomrers",
    price:"3.99€",
    description:"All the machines recorver streignt and power to take revenge of the humanity. More action and effects on this new launch of the Saga",
    stock:"20"
  })

  return (
    <div>
      
      <NavBar/>
      
      <div className="container py-5">
        <h1 className="display-6">Mon application</h1>
        <Address address={fullAddress} />
      </div>

      <div className="container d-flex gap-2 py-4">
        <Account infoAccount={account} />
        <Account infoAccount={account2} />
      </div>

      <div className="container bg-gradient px-4 py-5 mt-2 rounded-3 h-auto">
        <Card infoMovie={movie1}/>
     
      </div>
      
    </div>
  );
};

export default App