import Navbar from "../Navbar/Navbar";

const Review = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-[#99775C] text-3xl font-semibold text-center mb-10">Our Happy Clients</h2>
            <div className="lg:max-w-7xl mx-auto">
                <div className="card card-side bg-[#DDD0C8] shadow-xl w-2/3 mx-auto mb-10">
                    <figure><img className="h-72 w-96" src="https://i.ibb.co/cLrJfZQ/customer5.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Review by Jane D.</h2>
                        <p>"MemorableMoments exceeded my expectations! Emily and her team transformed my wedding into a fairytale. The attention to detail was incredible. From the beautiful decor to flawless coordination, everything was perfect. Thank you for making our special day truly magical."</p>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-[#DDD0C8] shadow-xl w-2/3 mx-auto mb-10">
                    <figure><img className="h-72 w-96" src="https://i.ibb.co/NyLYzGT/customer2.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Review by Michael S.</h2>
                        <p>"Sarah and her team did an outstanding job with our corporate event. The logistics were flawless, and they handled last-minute changes with ease. The professionalism and dedication of MemorableMoments made our event a huge success. Looking forward to working with them again."</p>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-[#DDD0C8] shadow-xl w-2/3 mx-auto mb-10">
                    <figure><img className="h-72 w-96" src="https://i.ibb.co/XVBy78P/customer3.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Review by Amanda G.</h2>
                        <p>"Olivia and the MemorableMoments team provided exceptional service for my sister's baby shower. They brought our vision to life and added personal touches that made the event truly special. Their communication and customer-centric approach were much appreciated. Highly recommended!"</p>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-[#DDD0C8] shadow-xl w-2/3 mx-auto mb-10">
                    <figure><img className="h-72 w-96" src="https://i.ibb.co/NFN32R4/customer4.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Review by David M.</h2>
                        <p>"We hired MemorableMoments for our anniversary celebration. Emily's creative ideas and design concepts were remarkable. The only reason I'm not giving five stars is due to a minor delay in setup. Overall, it was a fantastic event, and our guests loved it."</p>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-[#DDD0C8] shadow-xl w-2/3 mx-auto mb-10">
                    <figure><img className="h-72 w-96" src="https://i.ibb.co/DLPyy3g/customer1.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Review by Lisa W.</h2>
                        <p> "Sarah's attention to detail made our son's birthday party unforgettable. Everything ran like clockwork, and we could relax and enjoy the day. MemorableMoments's commitment to excellence shines through in every aspect of their service. We'll definitely be repeat customers!"</p>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;