import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Team = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <h2 className="text-xl font-semibold text-center mb-5">Our Team</h2>
            <div className="grid lg:grid-cols-3 gap-10" data-aos="zoom-in-down">
                <div>
                    <img className="h-[500px] mx-auto" src="https://i.ibb.co/23bcM6T/woman1.jpg" alt="" />
                    <p className="mt-3 text-justify text-neutral-400">"Welcome to our world of creativity and celebration! I'm Emily, and I'm passionate about turning dreams into reality. With a background in design and a love for all things artistic, I ensure that every event we curate is a work of art. Our team's attention to detail, combined with a dash of whimsy, guarantees unforgettable moments."</p>
                    <p className="text-end text-lg text-[#99775C] font-semibold mt-2">Emily Turner</p>
                    <p className="text-end text-lg text-[#99775C] font-semibold">Co-Founder & Creative Director</p>
                </div>
                <div>
                    <img className="h-[500px] w-[350px] mx-auto" src="https://i.ibb.co/pPsmxPf/woman2.jpg" alt="" />
                    <p className="mt-3 text-justify text-neutral-400">"Hi there, I'm Sarah, and I thrive on precision and organization. Behind every magical event is a well-executed plan. From venue logistics to vendor coordination, my team and I handle the nitty-gritty details, so you don't have to worry. Let's create seamless, stress-free events together."</p>
                    <p className="text-end text-lg text-[#99775C] font-semibold mt-2">Sarah Mitchell</p>
                    <p className="text-end text-lg text-[#99775C] font-semibold">Co-Founder</p>
                </div>
                <div>
                    <img className="h-[500px] w-[350px] mx-auto" src="https://i.ibb.co/r5ttQMW/woman3.jpg" alt="" />
                    <p className="mt-3 text-justify text-neutral-400">"Greetings! I'm Olivia, and I believe in the power of exceptional customer service. Your satisfaction is our top priority. We're here to listen to your ideas, understand your vision, and make sure your event is a reflection of you. Let's make your event planning journey enjoyable and memorable."</p>
                    <p className="text-end text-lg text-[#99775C] font-semibold mt-2">Olivia Collins</p>
                    <p className="text-end text-lg text-[#99775C] font-semibold">Co-Founder & Customer Experience Expert</p>
                </div>
            </div>
        </div>
    );
};

export default Team;