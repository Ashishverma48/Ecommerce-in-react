import { useEffect, useState } from "react";
import Banner from "../../component/Banner/Banner";
import Category from "../../component/Category/Category";
import Header from "../../component/Header/Header";

import './style.scss'
import Card from "../../component/Card/card";
export default function Home(){
    const [dealsItem,setDealsItem] = useState([])
    const [brand,setBrand] = useState([])
    const [category,setCategory] = useState([])
    function getDeals(){
        fetch('https://dummyjson.com/products?skip=65&limit=5')
        .then(response=>response.json())
        .then(data=>setDealsItem(data.products))
    }
    function getBrand(){
        fetch('https://dummyjson.com/products?limit=100')
        .then(response=>response.json())
        .then(data=>setBrand(data?.products))
    }
    function getCategory(){
        fetch('https://dummyjson.com/products/categories')
        .then(response=>response.json())
        .then(data=>{
            data.unshift('All')
            setCategory(data)
        })
    }
    function handleCategoryChange(e){
        
    }

    useEffect(()=>{
        getDeals();
        getBrand();
        getCategory()
    },[])
    console.log(dealsItem);
    return(
        <>
            <Header/>
            <main>

            <Banner/>
        
           <div className="container">
           <div className="todayDeals">
            <h1 className="font-semibold text-3xl">Weekly Popular Product!</h1>
            <div className="dealsMain">
            <Card deals={dealsItem}/>
            </div>
           </div>
           <h1>Brands </h1>
           <div className="brand">
               {
                brand?.map(item=>(
                    <h3>{item.brand}</h3>
                ))
               }
           </div>
           <Category/>
           </div>
            
            </main>

           
        </>
    )
}