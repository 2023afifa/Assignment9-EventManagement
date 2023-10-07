import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";

const Home = () => {
    const eventCards = useLoaderData();

    return (
        <div>
            <div className="lg:w-[1350px] mx-auto">
                <Navbar></Navbar>
                <Banner></Banner>
                <div className="my-20">
                    <h3 className="text-xl font-semibold text-center mb-10">Our Services</h3>
                    <div className="grid lg:grid-cols-3 gap-10">
                        {
                            eventCards.map(eventCard => <Card key={eventCard.id} eventCard={eventCard}></Card>)
                        }
                    </div>
                </div>
            </div>
            <div className="bg-[#DDD0C8]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;