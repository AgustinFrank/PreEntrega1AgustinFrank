import {useEffect, useState} from "react"
import { getProducts } from "../../asyncMock"
import { Link, Navigate, useNavigate } from "react-router-dom"
const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const Navigate = useNavigate()
    useEffect(() => {
        getProducts()
        .then (products=>{
            setProducts(products)
        })
    },[])

    return (
        <div>
            <h1> Productos </h1>
            {products.map(prod => {
                return (
                    <div key={prod.id}>
                        <img src={prod.image} alt={prod.title} style={{width:100}}/>
                        <h3>{prod.title}</h3>
                        <p>Price: ${prod.price}</p>
                        <button onClick={()=> Navigate(`/detail/${prod.id}`)}>ver detalle</button>
                    </div>
                );
            })}
        </div>
    );
}
export default ItemListContainer