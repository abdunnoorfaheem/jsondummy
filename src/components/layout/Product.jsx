import React from 'react';
import {useState,useEffect} from "react";
import axios from "axios"
import Container from '../Container';
import Flex from '../Flex';

const Product = () => {

    let [allData,setAllData]=useState([]);

    useEffect(() => {

        async function  apiData(){
            let data = await axios.get("https://dummyjson.com/products");
            setAllData(data.data.products);
            console.log(data.data.products);
            
        }
      apiData();
    },[]);

  return (
    <>
    <Container>

          <Flex className={"gap-y-4 gap-x-2 flex-wrap my-[20px]"}>
 {
        
            allData.map((item)=>(
                
               <>
                <div className="lg:w-[32%] py-2 px-8 shadow-2xl rounded-2xl h-[410px]">
                    <img className="h-[180px] m-auto" src={item.thumbnail} alt="" />
                    <h1 className="text-[24px] font-bold ">{item.title}</h1>
                    <p className="text-[#000000] opacity-[.70] py-3">{item.description}</p>
                    <div className="flex justify-between items-center">
                    <h3 className="text-[18px] font-semibold">Price:{item.price}$</h3>
                    <h3 className="text-[18px] font-semibold">Discount:{item.discountPercentage}%</h3>
                    </div>
                </div>
               </>
                
            ))
        
      }
      </Flex>

    </Container>
    
     
       
       
    </>
  )
}

export default Product
