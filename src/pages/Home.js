import showcase1 from '../assets/images/pexels-hikaique-65438.jpg';
import showcase2 from '../assets/images/pexels-scottwebb-532568.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Home = () => {
    return (
        <>
            <div className="relative min-h-screen overflow-hidden mb-10">
                <LazyLoadImage
                    src={showcase1}
                    className="absolute bottom-0 right-0 h-1/2 md:h-3/5 w-1/2 lg:h-3/4 md:w-1/2 z-0 rounded-3xl"
                    alt="Image Alt"
                />
                <LazyLoadImage
                    src={showcase2}
                    className="absolute bottom-0 left-0 h-1/3 w-3/5 md:h-45p lg:h-1/2 md:w-3/5 -ml-1/3 z-0 rounded-3xl"
                    alt="Image Alt"
                />

                <div className="relative z-20 max-w-screen-md md:max-w-screen-lg px-4 md:px-0 h-full flex items-center">
                    <div className="md:col-span-6">
                        <h1 className="font-extrabold text-4xl lg:text-5xl mb-4 text-gray-800 tracking-wide leading-tight">
                            "Designing Dreams, Building Realities."
                        </h1>
                        <p className="sm:text-lg max-w-md p-0 lg:text-lg font-medium mb-4 text-gray-600">
                            Where imagination meets precision in crafting spaces that
                            transcend expectations. With an unwavering commitment to
                            innovation and excellence, we transform visions into tangible
                            structures, shaping environments that inspire and endure.
                        </p>
                        <button
                            type="button"
                            className="p-4 text-base sm:text-lg font-medium text-center tracking-wide text-white rounded-2xl bg-gray-900 w-fit
                    hover:bg-gray-700 focus:outline-none focus:ring-primary-300"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

            {/* company overview  */}
            <section className="mt-10">
                <div className='flex flex-col md:flex-row '>
                    {/* Left side divs */}
                    <div className="md:w-1/2 sm:text-lg text-gray-600 flex flex-col pr-0 md:pr-12 font-medium">
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
                    {/* Right side image */}
                    <div className="md:w-1/2 w-full flex">
                        <LazyLoadImage
                            src={require(`../assets/images/bigsmall_Mirvac_house2_twgogv.jpg`)}
                            className="object-fit rounded-3xl max-w-full"
                            alt="pexels-expect-best-79873-323780"
                        />
                    </div>
                </div>
            </section>

            {/* architectural design projects */}
            <section className="mt-10">
                <h2 className="font-semibold text-2xl text-gray-800 mb-6">
                    Architectural Design Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Architecture bgImage={'bg-architecture-1'} name={'The Dome Center'} place={'Akure, Ondo Stat'} />
                    <Architecture bgImage={'bg-architecture-2'} name={'Theater Art Center'} place={'Igamu, Lagos State'} />
                </div>
            </section>

            {/* Building projects */}
            <section className="mt-10">
                <h2 className="font-semibold text-2xl text-gray-800 mb-6">
                    Building Projects
                </h2>
                <div className="flex flex-col md:flex-row md:gap-5">
                    <div className="md:w-1/3 h-80 md:h-128 border rounded-2xl relative bg-building-1 bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-5 md:bottom-10 left-5 md:left-10 text-white">
                            <p className="text-xl font-semibold">8 Bedroom Duplex</p>
                            <span className="text-base">Banana island, Nigeria</span>
                        </div>
                    </div>
                    <div className="md:w-1/3 h-80 md:h-128 border rounded-2xl relative bg-building-2 bg-no-repeat bg-cover bg-center mt-5 md:mt-0">
                        <div className="absolute bottom-5 md:bottom-10 left-5 md:left-10 text-white">
                            <p className="text-xl font-semibold">Shopping Mall</p>
                            <span className="text-base">Wuse Abuja, Nigeria</span>
                        </div>
                    </div>
                    <div className="md:w-1/3 h-80 md:h-128 border rounded-2xl relative bg-building-3 bg-no-repeat bg-cover bg-center mt-5 md:mt-0">
                        <div className="absolute bottom-5 md:bottom-10 left-5 md:left-10 text-white">
                            <p className="text-xl font-semibold">Oil and Gas Company</p>
                            <span className="text-base">Lekki phase 2, Lagos State</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* people */}
            <section className="mt-10">
                <div className=' flex flex-col md:flex-row justify-center md:gap-5'>
                    <div className="w-full md:max-w-xs p-5 bg-gray-50 mb-8 md:mb-0 md:mr-8 h-auto flex flex-col justify-between">
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
                            <p className="font-semibold text-gray-500 sm:text-lg">
                                Blending creativity with practicality to craft spaces that inspire
                                and endure. With meticulous attention to detail and a commitment
                                to excellence, we transform visions
                            </p>
                        </a>
                    </div>
                    <div className="w-full md:max-w-xs p-5 bg-gray-50 mb-8 md:mb-0 md:mr-8 h-auto flex flex-col justify-between">
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
                            <p className="font-semibold text-gray-500 sm:text-lg">
                                They provide a pathway to realizing your vision. From concept to
                                construction, our team's expertise ensures seamless execution and
                                breathtaking results every time.
                            </p>
                        </a>
                    </div>
                    <div className="w-full md:max-w-xs p-5 bg-gray-50 h-auto flex flex-col justify-between">
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
                            <p className="font-semibold text-gray-500 sm:text-lg">
                                Exceptional architectural services! From conceptualization to
                                completion, their attention to detail and design finesse exceeded
                                all expectations.
                            </p>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

const Architecture = ({ bgImage, name, place }) => {
    return (
        <div className="mb-5 md:mb-0">
            <div className={`h-64 md:h-80 lg:h-112 relative rounded-3xl ${bgImage} bg-no-repeat bg-cover bg-center`}>
                <div className="absolute bottom-5 left-5 text-white">
                    <p className="text-lg md:text-xl font-semibold">{name}</p>
                    <span className="text-sm md:text-base">{place}</span>
                </div>
            </div>
        </div>
    )
}


export default Home;
