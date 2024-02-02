import './Info.css'

const Info = (props)=>{
    return(
        <div className="info-box">
            <div className="scheme-logo">
                <img src={props.img} alt="image" className="scheme-img" />
            </div>
            <div className="info">
                <div className="scheme-topic">
                    <b>{props.header}</b>
                </div>
                <div className="scheme-text">
                    <p className="font">
                        {props.text}
                    </p>
                    <a href={props.link} className="direct-link">Click here to learn more...</a>
                </div>
            </div>
        </div>
    )
}

export default Info