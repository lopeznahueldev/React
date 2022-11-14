const Image = (props) => {
    return(
        <div className="cardImg">
            <img src="{props.image}" alt="" />
        </div>
    )
}

export default Image;