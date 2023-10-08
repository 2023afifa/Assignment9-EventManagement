const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/NCB9SGT/banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">It's Party Time!!!</h1>
                        <p className="mb-5">Welcome to MemorableMoments, your gateway to unforgettable social gatherings! Explore our wide range of services and let us take the reins while you enjoy every moment of your special occasion. Join us at MemorableMoments and let's create unforgettable memories together.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;