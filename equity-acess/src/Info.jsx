const Info = (props)=>{
    return(
        <div className="info">
            <div className="image">
                <img src={props.image} alt="image" className="img" />
            </div>
            <div className="info">
                <div className="header">
                    <h1>{props.header}</h1>
                </div>
                <div className="text">
                    <p className="font">
                        {props.text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Info