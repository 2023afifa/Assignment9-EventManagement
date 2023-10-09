import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = ({ eventCard }) => {
    const { id, name, image, price, description } = eventCard;

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <div className="card shadow-md rounded" data-aos="zoom-in">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-[#99775C]">{name}</h2>
                    <p>{description}</p>
                    <p>Price: <span className="font-semibold">${price}</span></p>
                    <div className="card-actions">
                        <Link to={`/event/${id}`}><button className="btn bg-[#DDD0C8] text-[#99775C]">Click here</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;