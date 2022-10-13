import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import {useParams} from 'react-router-dom'


const ItemDetailContainer = () =>{
const [product, setProduct] = useState ({})

const { productId } = useParams()

useEffect (()=>{
        getProductById(productId)
        .then(product => {
            setProduct (product)
        })
    },[])

    return(
        <div>
            <h1>detalle</h1>
            <ItemDetail {...product} />
        </div>
    )
}
export default ItemDetailContainer