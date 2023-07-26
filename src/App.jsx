import { useState } from "react";
import Account from "./components/exemples/Account";
import Address from "./components/exemples/Address";
import NavBar from "./components/exemples/NavBar";
import ProductCard from "./components/exemples/ProductCard"



const App = () => {
  const [fullAddress] =  useState("59000 Lille, France")
  
  
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

  const [product] = useState({
    name: "Transformers",
    img: "/src/asses/transformer.jpg",
    description:"All the machines recorver streignt and power to take revenge of the humanity. More action and effects on this new launch of the Saga",
    price: 3.99,
    stock: 20,
  });
 

  return (
    <div className="bg-gradient">
      
      <NavBar/>
      
      <div className="container py-5">
        <h1 className="mainText">Stream with ease</h1>
        <Address address={fullAddress} />
      </div>

      <div className="container d-flex gap-2 py-4">
        <Account infoAccount={account} />
        <Account infoAccount={account2} />
      </div>

      <div className="container bg-gradient px-3 py-5 mt-4 rounded-3 d-flex flex-wrap justify-content-evenly">
        <ProductCard 
        name={product.name}
        img={product.img}
        description={product.description}
        price={product.price}
        stock={product.stock}
        />
        <ProductCard 
        name={product.name}
        img={product.img}
        description={product.description}
        price={product.price}
        stock={product.stock}
        />
        <ProductCard 
        name={product.name}
        img={product.img}
        description={product.description}
        price={product.price}
        stock={product.stock}
        />
        <ProductCard 
        name={product.name}
        img={product.img}
        description={product.description}
        price={product.price}
        stock={product.stock}
        />
        <ProductCard 
        name={product.name}
        img={product.img}
        description={product.description}
        price={product.price}
        stock={product.stock}
        />
        <ProductCard 
        name={product.name}
        img={product.img}
        description={product.description}
        price={product.price}
        stock={product.stock}
        />
        <ProductCard 
        name={product.name}
        img={product.img}
        description={product.description}
        price={product.price}
        stock={product.stock}
        />
            
      </div>

    
    </div>
  );
};

export default App;