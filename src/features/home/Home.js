const Home = () => {
    return (
        <>
            <div className="h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
                <img
                    src="https://picsum.photos/seed/picsum/1900/850"
                    className="absolute top-0 left-0 min-h-full ob"
                    alt=""
                />
                <div className="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
                    <div className="col-span-6">
                        <h1 className="text-white font-extrabold text-5xl mb-8">
                            "Designing Dreams, Building Realities."
                        </h1>
                        <p className="text-stone-100 text-base">
                            where imagination meets precision in crafting spaces that
                            transcend expectations. With an unwavering commitment to
                            innovation and excellence, we transform visions into tangible
                            structures, shaping environments that inspire and endure.
                        </p>
                        <button className="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

            {/* company overview  */}
            <section className="flex flex-wrap mt-10 items-stretch">
                {/* Left side divs */}
                <div className="md:w-1/2 text-2xl text-gray-600 flex flex-col pr-14 tracking-wider font-medium">
                    <div className="">
                        <div className="p-4">
                            <h3 className="text-3xl font-semibold mb-3 text-gray-800 tracking-normal">
                                Company Overview
                            </h3>
                            <p className="">
                                "At BUILDX, we are the architects of possibility. With a passion
                                for precision and an eye for innovation, we transform spaces
                                into living works of art. From concept to completion, our
                                dedicated team combines."
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <div className="p-4">
                            <h3 className="text-3xl font-semibold mb-3 text-gray-800 tracking-normal">
                                Our Philosophy
                            </h3>
                            <p className="">
                                "At BUILDX, our philosophy is simple; we believe architecture is
                                more than just structures; it's about shaping experiences and
                                enriching lives. Guided by a commitment to creativity,
                                sustainability, and client collaboration, we strive to center
                                our mission."
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <div className="p-4">
                            <h3 className="text-3xl font-semibold mb-3 text-gray-800 tracking-normal">
                                Our Mission Statement
                            </h3>
                            <p className="">
                                "At BUILDX, we design inspiring, empowering spaces with
                                innovative, sustainable solutions that enhance lives and
                                communities. Our mission is to create a perfect balance of
                                functionality and aesthetics, fostering creativity,
                                collaboration, and well-being."
                            </p>
                        </div>
                    </div>
                </div>
                {/* Right side image */}
                <div className="w-1/2 flex">
                    <img
                        src={require(`../../assets/images/bigsmall_Mirvac_house2_twgogv.jpg`)}
                        className="object-fit  rounded-3xl"
                        alt="pexels-expect-best-79873-323780"
                    />
                </div>
            </section>

            {/* architectural design projects */}
            <section className="mt-10">
                <h2 className="font-semibold text-3xl text-gray-800 mb-8">
                    Architectural Design Projects
                </h2>
                <div className="flex flex-row gap-5">
                    <div
                        className={`h-screen border w-1/2 rounded-3xl relative bg-architecture-1 bg-no-repeat bg-cover bg-center`}
                    >
                        <div className="absolute bottom-10 left-10 mb-5 text-white">
                            <p className="text-3xl">The Dome Center</p>
                            <span className="text-2xl">Akure, Ondo State</span>
                        </div>
                    </div>
                    <div className="h-screen border w-1/2 rounded-3xl relative bg-architecture-2 bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-10 left-10 mb-5 text-white">
                            <p className="text-3xl">Theater Art Center</p>
                            <span className="text-2xl">Igamu, Lagos State</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Building projects */}
            <section className="mt-10">
                <h2 className="font-semibold text-3xl text-gray-800 mb-8">
                    Building Projects
                </h2>
                <div className="flex flex-row gap-5">
                    <div
                        className={`h-160 border w-1/3 rounded-3xl relative bg-building-1 bg-no-repeat bg-cover bg-center`}
                    >
                        <div className="absolute bottom-10 left-10 mb-5 text-white">
                            <p className="text-3xl">8 Bedroom Duplex</p>
                            <span className="text-2xl">Banana island, Nigeria</span>
                        </div>
                    </div>
                    <div className="h-160 border w-1/3 rounded-3xl relative bg-building-2 bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-10 left-10 mb-5 text-white">
                            <p className="text-3xl">Shopping Mall</p>
                            <span className="text-2xl">wuse Abuja, Nigeria</span>
                        </div>
                    </div>
                    <div className="h-160 border w-1/3 rounded-3xl relative bg-building-3 bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-10 left-10 mb-5 text-white">
                            <p className="text-3xl">Oil and Gas Company</p>
                            <span className="text-2xl">Leki phase 2, Lagos State</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* people */}
            <section className="mt-10 flex flex-wrap justify-center gap-10">
                <div className="max-w-md p-8 hover:bg-gray-100 bg-gray-100 h-auto flex flex-col justify-between">
                    <a href="#" className="block">
                        <div className="flex items-center gap-5 mb-5">
                            <img
                                className="w-20 h-20 rounded-full"
                                src={require("../../assets/images/pexels-andrewpersonaltraining-697509.jpg")}
                                alt="Rounded avatar"
                            />
                            <div className="flex flex-col">
                                <h5 className="mb-1 text-3xl font-bold text-gray-800">
                                    Tofunmi Kehinde
                                </h5>
                                <p className="text-xl font-medium text-gray-400">
                                    Skylight Homes
                                </p>
                            </div>
                        </div>
                        <p className="font-semibold text-gray-600 text-2xl tracking-wide">
                            Blending creativity with practicality to craft spaces that inspire
                            and endure. With meticulous attention to detail and a commitment
                            to excellence, we transform visions
                        </p>
                    </a>
                </div>
                <div className="max-w-md p-8 hover:bg-gray-100 bg-gray-100 h-auto flex flex-col justify-between">
                    <a href="#" className="block">
                        <div className="flex items-center gap-5 mb-5">
                            <img
                                className="w-20 h-20 rounded-full"
                                src={require("../../assets/images/pexels-pixabay-415829.jpg")}
                                alt="Rounded avatar"
                            />
                            <div className="flex flex-col">
                                <h5 className="mb-1 text-3xl font-bold text-gray-800">
                                    Shirley Bismarck
                                </h5>
                                <p className="text-xl font-medium text-gray-400">
                                    CEO Bismarck oil & gas
                                </p>
                            </div>
                        </div>
                        <p className="font-semibold text-gray-600 text-2xl tracking-wide">
                            They provide a pathway to realizing your vision. From concept to
                            construction, our team's expertise ensures seamless execution and
                            breathtaking results every time.
                        </p>
                    </a>
                </div>
                <div className="max-w-md p-8 hover:bg-gray-100 bg-gray-100 h-auto flex flex-col justify-between">
                    <a href="#" className="block">
                        <div className="flex items-center gap-5 mb-5">
                            <img
                                className="w-20 h-20 rounded-full"
                                src={require("../../assets/images/pexels-olly-3763188.jpg")}
                                alt="Rounded avatar"
                            />
                            <div className="flex flex-col">
                                <h5 className="mb-1 text-3xl font-bold text-gray-800">
                                    Merylin Monroe
                                </h5>
                                <p className="text-xl font-medium text-gray-400">
                                    CEO Love beauty spa
                                </p>
                            </div>
                        </div>
                        <p className="font-semibold text-gray-600 text-2xl tracking-wide">
                            Exceptional architectural services! From conceptualization to
                            completion, their attention to detail and design finesse exceeded
                            all expectations.
                        </p>
                    </a>
                </div>
            </section>

            {/* footer */}
            <footer className="mt-10 px-2">
                <h2 className="font-semibold text-3xl text-gray-800">
                    Contact Form
                </h2>
                {/* contact us */}
                <div className="flex justify-between">
                    <section className="bg-white w-1/2">
                        <div className="py-8">
                            <form action="#" className="space-y-8">
                                <div>
                                    <label
                                        htmlFor="fullname"
                                        className="block mb-2 text-xl font-medium text-gray-500"
                                    >
                                        Enter Your FullName
                                    </label>
                                    <input
                                        type="text"
                                        id="fullname"
                                        className="block p-8 w-full text-xl  rounded-2xl border-3 border-gray-300 shadow-sm bg-gray-100"
                                        placeholder="Enter Full Name"
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-xl font-medium text-gray-500"
                                    >
                                        Enter Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="block p-8 w-full text-xl rounded-2xl border-3 border-gray-300 shadow-sm bg-gray-100"
                                        required=""
                                        placeholder="Enter Email Address"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="message"
                                        className="block mb-2 text-xl font-medium text-gray-500"
                                    >
                                        Enter Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={6}
                                        className="block p-8 w-full text-xl rounded-2xl border-3 border-gray-300 shadow-sm bg-gray-100"
                                        placeholder="Enter Your Message"
                                        defaultValue={""}
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="p-8 text-xl font-medium text-center tracking-wide text-white rounded-2xl bg-gray-900 w-fit sm:w-full
                                    hover:bg-gray-700 focus:outline-none focus:ring-primary-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </section>

                    {/* footer navigation */}
                    <div className="text-gray-500 font-semibold text-2xl mt-14 max-w-md">
                        <div className="mb-16 flex flex-col gap-10 ">
                            <h3 className="leading-8">Email Address: hello@example.com</h3>
                            <h3 className="leading-8">Phone Number: +17 8658 389 92</h3>
                            <h3 className="leading-8">Phone Number: +17 8658 389 92</h3>
                            <h3 className="leading-8">Office Address: Plot 349 Kazado Close, Praire, Texas</h3>
                        </div>
                        <div className="flex flex-col gap-10">
                            <h3>About Us</h3>
                            <h3>Services</h3>
                            <h3>Our Projects</h3>
                            <h3>Contact Us</h3>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Home;
