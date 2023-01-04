
import './App.css';
import Logo from './Logo';
import {useState} from "react";
import {data} from "./data"


function App() {
   const [product,setProduct] = useState(0);
   const {photo,name,country,description,fabric,price} = data [product];

   const nextItem = () => {
     setProduct ((product =>{
      product ++ ;
      if (product > data.length-1){
        product =0
      }
      return product
    }))
   }

   const previousItem = () => {
     setProduct((product => {
       product -- ;
       if (product <0){
         product= data.length -1;
       }
       return product
     }))
   }

  return (
    <div className="main">
    <div className="logo" >
     <Logo _/>
    </div>
    <div className="logo">
      <h1>Holiday Collection</h1>
    </div>
    <div className="logo">
      <img src={photo} alt="gifts" width="200px" height="300px" />
    </div>
    <div className="logo">
      <h2>{name}</h2>
    </div>
    <div className="logo beauty">
      <p>{country}</p>
    </div>
    <div className=" logo description">
      <p>{description}</p>
    </div>
    <div className="logo beauty">
      <p>{fabric}</p>
    </div>
    <div className="logo price">
      <h3>{price}</h3>
    </div>
    <div className="logo btn">
    <button onClick={previousItem}>Previous</button>
      <button onClick={nextItem}>Next</button>
    </div>
    <div className="footer">
      <p>*All materials were taken from the offcial website Loro Piana for studing</p>
    </div>
    </div>
  );
}

export default App;

