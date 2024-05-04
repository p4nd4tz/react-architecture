import { useScroll } from "../context/ScrollContext";

const Footer = () => {
    const { contactFormRef } = useScroll();

    return (
        <footer className="mt-10" ref={contactFormRef} >
            <h2 className="font-semibold text-2xl text-gray-800 px-6">
                Contact Form
            </h2>
            {/* contact us */}
            <div className="flex justify-between">
                <section className="bg-white w-1/2">
                    <div className="p-6">
                        <form action="#" className="space-y-6">
                            <div>
                                <label
                                    htmlFor="fullname"
                                    className="block mb-1 text-base font-medium text-gray-500"
                                >
                                    Enter Your FullName
                                </label>
                                <input
                                    type="text"
                                    id="fullname"
                                    className="block p-4 pl-3 w-full text-sm rounded-xl border-2 border-gray-300 shadow-sm bg-gray-50"
                                    placeholder="Enter Full Name"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-1 text-base font-medium text-gray-500"
                                >
                                    Enter Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="block p-4 pl-3 w-full text-sm rounded-xl border-2 border-gray-300 shadow-sm bg-gray-50"
                                    required=""
                                    placeholder="Enter Email Address"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="message"
                                    className="block mb-1 text-base font-medium text-gray-500"
                                >
                                    Enter Your Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="block p-4 pl-3 w-full text-sm rounded-xl border-2 border-gray-300 shadow-sm bg-gray-50"
                                    placeholder="Enter Your Message"
                                    defaultValue={""}
                                />
                            </div>
                            <button
                                type="button"
                                className="p-6 text-xl font-medium text-center tracking-wide text-white rounded-2xl bg-gray-900 w-fit sm:w-full
                                        hover:bg-gray-700 focus:outline-none focus:ring-primary-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </section>

                {/* footer navigation */}
                <div className="text-gray-500 font-semibold text-lg max-w-md p-10">
                    <div className="mb-12 flex flex-col gap-5">
                        <h3 className="leading-8">Email Address: hello@example.com</h3>
                        <h3 className="leading-8">Phone Number: +17 8658 389 92</h3>
                        <h3 className="leading-8">Phone Number: +17 8658 389 92</h3>
                        <h3 className="leading-8">Office Address: Plot 349 Kazado Close, Praire, Texas</h3>
                    </div>
                    <div className="flex flex-col gap-8">
                        <h3>About Us</h3>
                        <h3>Services</h3>
                        <h3>Our Projects</h3>
                        <h3>Contact Us</h3>
                    </div>
                </div>

            </div>
        </footer >
    )
}

export default Footer;