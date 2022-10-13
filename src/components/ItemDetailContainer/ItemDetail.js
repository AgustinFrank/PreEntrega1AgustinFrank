const ItemDetail = ({id, title,image,price}) =>{
    return (
        <div>
                <img src={image} alt={title} style= {{ width: 300}}/>
                <h2>{title}</h2>
                <p>price: ${price}</p>
        </div>
    )
}

export default ItemDetail