const Projects = () => {
    return (
        <>
            <div className="font-semibold text-2xl mb-20">
                <h1 className="text-3xl text-gray-700 mb-3">Project Page</h1>
                <p className="text-gray-500 tracking-wide text-2xl">
                    "Explore our latest projects: where creativity meets functionality in
                    every detail. Discover innovation and inspiration brought to life."
                </p>
            </div>
            <section className="mb-10">
                <h2 className="font-semibold text-3xl text-gray-800 mb-8">
                    Completed Construction Project
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
                    <div className="h-160 w-1/3 rounded-3xl relative bg-building-2 bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-10 left-10 mb-5 text-white">
                            <p className="text-3xl">Shopping Mall</p>
                            <span className="text-2xl">wuse Abuja, Nigeria</span>
                        </div>
                    </div>
                    <div className="h-160 w-1/3 rounded-3xl relative bg-building-3 bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-10 left-10 mb-5 text-white">
                            <p className="text-3xl">Oil and Gas Company</p>
                            <span className="text-2xl">Leki phase 2, Lagos State</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-32">
                <h2 className="font-semibold text-3xl text-gray-800 mb-8">
                    Completed Construction Project
                </h2>
                <div className="flex flex-row gap-5">
                    <div
                        className={`h-160 border w-1/3 rounded-3xl relative bg-building-4 bg-no-repeat bg-cover bg-center`}
                    >
                        <div className="absolute bottom-10 left-10 mb-5 text-white">
                            <p className="text-3xl">8 Bedroom Duplex</p>
                            <span className="text-2xl">Banana island, Nigeria</span>
                        </div>
                    </div>
                    <div className="h-160 w-1/3 rounded-3xl relative bg-mension bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-10 left-10 mb-5 text-white">
                            <p className="text-3xl">6 Bedroom Mension</p>
                            <span className="text-2xl">wuse Abuja, Nigeria</span>
                        </div>
                    </div>
                    <div className="h-160 w-1/3 rounded-3xl relative bg-country-home bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-10 left-10 mb-5 text-white">
                            <p className="text-3xl">3 Bedroom country home</p>
                            <span className="text-2xl">Leki phase 2, Lagos State</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ongoing projects1 */}
            <section className="my-32">
                <h2 className="font-semibold text-3xl text-gray-800 mb-8">
                    Ongoing Architectural Projects
                </h2>
                <div className="flex flex-row gap-5">
                    <div
                        className={`h-160 border w-1/3 rounded-3xl relative bg-ongoing-1 bg-no-repeat bg-cover bg-center`}
                    >
                        <div className="absolute bottom-10 left-10 mb-5 text-white">
                            <p className="text-3xl">8 Bedroom Duplex</p>
                            <span className="text-2xl">Banana island, Nigeria</span>
                        </div>
                    </div>
                    <div className="h-160 w-1/3 rounded-3xl relative bg-ongoing-2 bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-10 left-10 mb-5 text-white">
                            <p className="text-3xl">6 Bedroom Mension</p>
                            <span className="text-2xl">wuse Abuja, Nigeria</span>
                        </div>
                    </div>
                    <div className="h-160 w-1/3 rounded-3xl relative bg-ongoing-3 bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-10 left-10 mb-5 text-white">
                            <p className="text-3xl">3 Bedroom country home</p>
                            <span className="text-2xl">Leki phase 2, Lagos State</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ongoing projects */}
            <section className="mt-20">
                <h2 className="font-semibold text-3xl text-gray-800 mb-8">
                    Ongoing Architectural Projects
                </h2>
                <div className="flex flex-row gap-5">
                    <div
                        className={`h-160 border w-1/3 rounded-3xl relative bg-ongoing-4 bg-no-repeat bg-cover bg-center`}
                    >
                        <div className="absolute bottom-10 left-10 mb-5 text-white">
                            <p className="text-3xl">8 Bedroom Duplex</p>
                            <span className="text-2xl">Banana island, Nigeria</span>
                        </div>
                    </div>
                    <div className="h-160 w-1/3 rounded-3xl relative bg-ongoing-5 bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-10 left-10 mb-5 text-white">
                            <p className="text-3xl">Warehouse</p>
                            <span className="text-2xl">wuse Abuja, Nigeria</span>
                        </div>
                    </div>
                    <div className="h-160 w-1/3 rounded-3xl relative bg-ongoing-6 bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-10 left-10 mb-5 text-white">
                            <p className="text-3xl">3 Bedroom country home</p>
                            <span className="text-2xl">Leki phase 2, Lagos State</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
