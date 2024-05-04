import showcase1 from '../assets/images/pexels-hikaique-65438.jpg';
import showcase2 from '../assets/images/pexels-scottwebb-532568.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Home = () => {
    return (
        <>
            <div className="relative min-h-svh overflow-hidden mb-10">
                <LazyLoadImage src={showcase1}
                    className="absolute bottom-0 right-0 h-3/4 w-1/2 z-0 rounded-3xl"
                    alt="Image Alt"
                />
                <LazyLoadImage src={showcase2}
                    className="absolute bottom-0 left-0 h-2/5 w-3/5 -ml-1/3 z-0 rounded-3xl"
                    alt="Image Alt"
                />

                <div className="relative z-20 max-w-screen-sm h-full items-center">
                    <div className="col-span-6 ">
                        <h1 className="font-extrabold text-6xl mb-4 text-gray-800 tracking-wide leading-tight">
                            "Designing Dreams, Building Realities."
                        </h1>
                        <p className="text-lg tracking-wide font-medium mb-6 text-gray-600 pr-6">
                            Where imagination meets precision in crafting spaces that
                            transcend expectations. With an unwavering commitment to
                            innovation and excellence, we transform visions into tangible
                            structures, shaping environments that inspire and endure.
                        </p>
                        <button
                            type="button"
                            className="p-6 py-4 text-lg font-medium text-center tracking-wide text-white rounded-2xl bg-gray-900 w-fit
                                hover:bg-gray-700 focus:outline-none focus:ring-primary-300"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

            {/* company overview  */}
            <section className="flex flex-wrap mt-10">
                {/* Left side divs */}
                <div className="md:w-1/2 text-lg text-gray-600 flex flex-col pr-12 font-medium">
                    <div className="">
                        <div className="p-2">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
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
                        <div className="p-2">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
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
                        <div className="p-2">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
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
                    <LazyLoadImage
                        src={require(`../assets/images/bigsmall_Mirvac_house2_twgogv.jpg`)}
                        className="object-fit rounded-3xl"
                        alt="pexels-expect-best-79873-323780"
                    />
                </div>
            </section>

            {/* architectural design projects */}
            <section className="mt-10">
                <h2 className="font-semibold text-2xl text-gray-800 mb-6">
                    Architectural Design Projects
                </h2>
                <div className="flex flex-row gap-5">
                    <div
                        className={`h-screen w-1/2 rounded-3xl relative bg-architecture-1 bg-no-repeat bg-cover bg-center`}
                    >
                        <div className="absolute bottom-10 left-10 mb-3 text-white">
                            <p className="text-xl font-medium">The Dome Center</p>
                            <span className="text-lg">Akure, Ondo State</span>
                        </div>
                    </div>
                    <div className="w-1/2 rounded-3xl relative bg-architecture-2 bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-10 left-10 mb-3 text-white">
                            <p className="text-xl font-medium">Theater Art Center</p>
                            <span className="text-lg">Igamu, Lagos State</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Building projects */}
            <section className="mt-10">
                <h2 className="font-semibold text-2xl text-gray-800 mb-6">
                    Building Projects
                </h2>
                <div className="flex flex-row gap-5">
                    <div
                        className={`h-128 border w-1/3 rounded-2xl relative bg-building-1 bg-no-repeat bg-cover bg-center`}
                    >
                        <div className="absolute bottom-10 left-10 text-white">
                            <p className="text-xl font-semibold">8 Bedroom Duplex</p>
                            <span className="text-base">Banana island, Nigeria</span>
                        </div>
                    </div>
                    <div className="h-128 w-1/3 rounded-2xl relative bg-building-2 bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-10 left-10 text-white">
                            <p className="text-xl font-semibold">Shopping Mall</p>
                            <span className="text-base">wuse Abuja, Nigeria</span>
                        </div>
                    </div>
                    <div className="h-128 w-1/3 rounded-2xl relative bg-building-3 bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-10 left-10  text-white">
                            <p className="text-xl font-semibold">Oil and Gas Company</p>
                            <span className="text-base">Leki phase 2, Lagos State</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* people */}
            <section className="mt-10 flex justify-center gap-8">
                <div className="max-w-xs p-5 bg-gray-50 h-auto flex flex-col justify-between">
                    <a href="#" className="block">
                        <div className="flex items-center gap-3 mb-3">
                            <LazyLoadImage
                                className="w-14 h-14 rounded-full"
                                src={require("../assets/images/pexels-andrewpersonaltraining-697509.jpg")}
                                alt="Rounded avatar"
                                loading='lazy'
                            />
                            <div className="flex flex-col">
                                <h5 className="text-xl font-bold text-gray-800">
                                    Tofunmi Kehinde
                                </h5>
                                <p className="text-base font-medium text-gray-400">
                                    Skylight Homes
                                </p>
                            </div>
                        </div>
                        <p className="font-semibold text-gray-500 text-lg">
                            Blending creativity with practicality to craft spaces that inspire
                            and endure. With meticulous attention to detail and a commitment
                            to excellence, we transform visions
                        </p>
                    </a>
                </div>
                <div className="max-w-xs p-5 bg-gray-50 h-auto flex flex-col justify-between">
                    <a href="#" className="block">
                        <div className="flex items-center gap-3 mb-3">
                            <LazyLoadImage
                                className="w-14 h-14 rounded-full"
                                src={require("../assets/images/pexels-pixabay-415829.jpg")}
                                alt="Rounded avatar"
                                loading='lazy'
                            />
                            <div className="flex flex-col">
                                <h5 className="text-xl font-bold text-gray-800">
                                    Shirley Bismarck
                                </h5>
                                <p className="text-base font-medium text-gray-400">
                                    CEO Bismarck oil & gas
                                </p>
                            </div>
                        </div>
                        <p className="font-semibold text-gray-500 text-lg">
                            They provide a pathway to realizing your vision. From concept to
                            construction, our team's expertise ensures seamless execution and
                            breathtaking results every time.
                        </p>
                    </a>
                </div>
                <div className="max-w-xs p-5 bg-gray-50 h-auto flex flex-col justify-between">
                    <a href="#" className="block">
                        <div className="flex items-center gap-3 mb-3">
                            <LazyLoadImage
                                className="w-14 h-14 rounded-full"
                                src={require("../assets/images/pexels-olly-3763188.jpg")}
                                alt="Rounded avatar"
                                loading='lazy'
                            />
                            <div className="flex flex-col">
                                <h5 className="text-xl font-bold text-gray-800">
                                    Merylin Monroe
                                </h5>
                                <p className="text-base font-medium text-gray-400">
                                    CEO Love beauty spa
                                </p>
                            </div>
                        </div>
                        <p className="font-semibold text-gray-500 text-lg">
                            Exceptional architectural services! From conceptualization to
                            completion, their attention to detail and design finesse exceeded
                            all expectations.
                        </p>
                    </a>
                </div>
            </section>
        </>
    );
};

export default Home;
