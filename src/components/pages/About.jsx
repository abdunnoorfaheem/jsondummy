import React from 'react';
import {useState,useEffect} from "react";
import axios from "axios";
import Image from '../Image';

const About = () => {

  let [allData,setAllData]=useState([]);

  useEffect(() => {
     
    async function viewData(){
      let data =await axios.get("https://abdunnoorfaheem.github.io/apiProductData/data/index.json");  

      setAllData(data.data.data);
      
    }
    viewData();
  }, []);

  
  
  return (
    <>
      <h1>data</h1>
      {
        allData.map((item)=>(
          <div className="" key={item.id}>
            <img src={`https://abdunnoorfaheem.github.io/apiProductData/${item.product_image.url}`} alt="" />
            <h3>{item.title}</h3>
            <h4>{item.price}</h4>
            
          </div>
        ))
      }
    </>
  )
}

export default About
