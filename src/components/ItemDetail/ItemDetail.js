const ItemDetail = ({id, title,image,price}) =>{
    return (
        <div>
           <div key={id}>
                <img src={image} alt={title} style= {{ width: 300}}/>
                <h2>{title}</h2>
                <p>price: ${price}</p>
                </div>
        </div>
    )
}

export default ItemDetail