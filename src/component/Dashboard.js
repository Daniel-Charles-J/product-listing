import { useState } from "react";
import DisplayProducts from "./DisplayProducts";
import { useSelector, useDispatch } from "react-redux";
import { pageRender } from "../Slices/dashboardSlice";

import "../component/Dashboard.css"
function Dashboard() {

    const dashboard = useSelector((state) => state.PageLoad.DashBoard);
    const open = useSelector((state) => state.PageLoad.ProductList);

    const dispatch = useDispatch();
    
    const [products, setProducts] = useState();

    const handleClick = async () =>{
    
        const URL = "https://dummyjson.com/products";
        let data = await fetch(URL).then((res) => res.json()).catch((error) => console.log(error));
        var products = data.products;
        setProducts(products);
        dispatch(pageRender());
    }

    return (
        <div> 
            {dashboard && 
              <div className="dashBoard">
                <h1 className="dashBoardHeader">Products Dashboard</h1>
                <button className="dashBoardBtn" onClick ={handleClick}>View Products</button>
              </div>
           }
    
            {open && products.map((data,index) => <DisplayProducts key={index} data={data} open ={open} dashboard ={dashboard}/>)}
        </div>
        
      )
}

export default Dashboard