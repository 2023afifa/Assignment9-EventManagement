const Footer = () => {
    return (
        <div className="py-10 text-base-content">
            <footer className="footer lg:max-w-6xl mx-auto">
                <aside className="my-auto">
                    <h1 className="text-3xl">Memorable<span className="text-[#99775C]">Moments</span></h1>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Weddings</a>
                    <a className="link link-hover">Birthday Parties</a>
                    <a className="link link-hover">Anniversaries</a>
                    <a className="link link-hover">Engagement Parties</a>
                    <a className="link link-hover">Retirement Parties</a>
                    <a className="link link-hover">Baby shower</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;