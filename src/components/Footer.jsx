
const Footer = () => {
    return (
        <footer>
            <section className="bg-white text-black p-20 space-y-16 md:text-center max-w-5xl mx-auto">

                {/* Footer heading */}
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold ">Gadget Heaven</h2>
                    <p className="opacity-60 font-medium w-1/2 md:mx-auto">Leading the way in cutting-edge technology and innovation.</p>
                </div>

                <div className="footer  justify-between">

                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    
                </div>
            </section>
        </footer>
    );
};

export default Footer;