const FAQ = () => {
    return (
        <div className="my-20">
            <h2 className="text-xl font-semibold text-center mb-5">Frequently Asked Questions</h2>
            <div className="collapse collapse-arrow bg-[#FDF8F0]">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    How do I get started with booking an event with your services?
                </div>
                <div className="collapse-content">
                    <p>To get started, simply reach out to us through our website's contact form, email, or phone. Our team will schedule a consultation to discuss your event ideas, preferences, and requirements. We will guide you through the entire planning process and provide a tailored quote based on your needs.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#FDF8F0]">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    What types of events do you specialize in planning?
                </div>
                <div className="collapse-content">
                    <p>We specialize in a wide range of events, including weddings, birthday parties, anniversaries, engagement parties, retirement parties, and baby showers. Our experienced team can adapt to various event styles and sizes, ensuring each occasion is unique and memorable.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#FDF8F0]">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Can I customize the event planning packages to fit my budget?
                </div>
                <div className="collapse-content">
                    <p>Absolutely! We understand that every event is unique, and budgets can vary. We offer customizable packages to suit your specific needs and financial considerations. During our consultation, we will work closely with you to create a plan that aligns with your budget while delivering a spectacular event.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#FDF8F0]">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    What sets your event planning services apart from others?
                </div>
                <div className="collapse-content">
                    <p>Our commitment to creativity, attention to detail, and personalized service sets us apart. We believe in crafting events that reflect your vision and personality. Our team of experienced planners, designers, and vendors work together seamlessly to ensure a stress-free and unforgettable experience.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#FDF8F0]">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Do you offer day-of coordination services?
                </div>
                <div className="collapse-content">
                    <p>Yes, we provide day-of coordination services to ensure that everything runs smoothly on the day of your event. Our team will handle the logistics, coordinate with vendors, and manage any unforeseen issues, allowing you to relax and enjoy the celebration with peace of mind.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;