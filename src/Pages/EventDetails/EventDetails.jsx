import { useLoaderData, useParams } from "react-router-dom";

const EventDetails = () => {
    const events = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const event = events.find(event => event.id === idInt);

    return (
        <div className="lg:max-w-6xl mx-auto my-10 text-[#99775C] text-center">
            <img className="w-2/3 mx-auto" src={event.image} alt="" />
            <h2 className="text-4xl font-bold mt-5 mb-2">{event.name}</h2>
            <p className="text-lg">{event.detail}</p>
            <div className="w-1/3 p-5 bg-[#DDD0C8] mx-auto mt-6">
                <p className="font-medium text-2xl">{event.description}</p>
                <p className="font-bold text-3xl mt-5">${event.price} Only</p>
            </div>
        </div>
    );
};

export default EventDetails;