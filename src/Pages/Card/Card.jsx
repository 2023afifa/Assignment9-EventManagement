const Card = ({ eventCard }) => {
    const { id, name, image, price, description } = eventCard;

    return (
        <div>
            <div className="card shadow-md rounded">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-[#99775C]">{name}</h2>
                    <p>{description}</p>
                    <p>Price: <span className="font-semibold">${price}</span></p>
                    <div className="card-actions">
                        <button className="btn bg-[#DDD0C8] text-[#99775C]">Click here</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;