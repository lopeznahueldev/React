const descrCard = (props) => {
    return(
        <div className="DescrCard">
            <h2 className="nameProd">{props.name}</h2>
            <span className="quant">Quantity: {props.quant}</span>
            <span className="price">${props.price}</span>
        </div>
    )
}

export default descrCard