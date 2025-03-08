import { useState } from "react";

function Card({id, info, image, name, price, removeHandler}) {
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}...`; 

    function readmoreHandler() {
        setReadmore(!readmore);
    }
    return (
        <div className="card">
            <img src={image} className="image" alt="tour_image"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">&#8377; {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="tour-description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `show less` : `read more`}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={() => removeHandler(id)}>Not Interested</button>
        </div>
    )
}

export default Card;