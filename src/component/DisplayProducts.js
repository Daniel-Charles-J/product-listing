import "./DisplayProduct.css";
import { useDispatch } from "react-redux";
import { pageRender } from "../Slices/dashboardSlice";

const DisplayProducts =  ({data}) =>{
    const dispatch = useDispatch();
    const handleBack = () =>{
        dispatch(pageRender())
    }
    const makeIconURL = data.thumbnail;
    const image1 = data.images[0];
    
  return (
    <div className="container">
        <div style={{marginTop: "20px"}}><h2 style={{display: "inline-block"}}>ID :</h2><h2 style={{display: "inline-block"}}> {data.id}</h2></div>
        <div><p className="heading">Title :</p><p className="content"> {data.title}</p></div>
        <div className="descriptionHeader"><p className="heading">Description :</p><p className="content"> {data.description}</p></div>
        <div><p className="heading">Price :</p><p className="content"> {data.price}</p></div>
        <div><p className="heading">Discount Percentage :</p><p className="content"> {data.discountPercentage}</p></div>
        <div><p className="heading">Rating :</p><p className="content"> {data.rating}</p></div>
        <div><p className="heading">Stock :</p><p className="content"> {data.stock}</p></div>
        <div><p className="heading">Brand :</p><p className="content"> {data.brand}</p></div>
        <div><p className="heading">Category :</p><p className="content"> {data.category}</p></div>
        <div className="header">
          <p className="heading">Thumbnail :</p>
          <div className="thumbnail content">{<img src = {makeIconURL} alt = "products"></img>}</div>
        </div>
        <div className="header">
          <p className="heading">Images :</p>
          <div className="content">{<img src = {image1} alt = "products" style={{width: "250px", height: "200px", borderRadius: "5px"}}></img>}</div>
        </div>
        <div><div className="back-btn" onClick={handleBack}>back</div></div>
        <br/>
    </div>
    )
}

export default DisplayProducts