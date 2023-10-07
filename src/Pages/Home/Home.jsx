import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <div className="lg:w-[1350px] mx-auto">
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
            <div className="bg-[#FDF8F0]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;