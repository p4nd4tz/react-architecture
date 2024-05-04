const Projects = () => {
    return (
        <>
            <div className="mb-10">
                <h1 className="text-gray-700 font-bold text-2xl mb-2">Project Page</h1>
                <p className="text-gray-500 text-lg font-semibold leading-snug">
                    "Explore our latest projects: where creativity meets functionality in
                    every detail. Discover innovation and inspiration brought to life."
                </p>
            </div>

            <section className="mb-10">
                <h2 className="font-semibold text-2xl text-gray-800 mb-6">
                    Completed Construction Project
                </h2>
                <div className="flex flex-row gap-5">
                    <div
                        className={`h-128 w-1/3 rounded-3xl relative bg-building-1 bg-no-repeat bg-cover bg-center`}
                    >
                        <div className="absolute bottom-10 left-10 mb-3 text-white">
                            <p className="text-xl font-medium">8 Bedroom Duplex</p>
                            <span className="text-lg">Banana island, Nigeria</span>
                        </div>
                    </div>
                    <div className="h-128 w-1/3 rounded-3xl relative bg-building-2 bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-10 left-10 mb-3 text-white">
                            <p className="text-xl font-medium">Shopping Mall</p>
                            <span className="text-lg">wuse Abuja, Nigeria</span>
                        </div>
                    </div>
                    <div className="h-128 w-1/3 rounded-3xl relative bg-building-3 bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-10 left-10 mb-3 text-white">
                            <p className="text-xl font-medium">Oil and Gas Company</p>
                            <span className="text-lg">Leki phase 2, Lagos State</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="font-semibold text-2xl text-gray-800 mb-6">
                    Completed Construction Project
                </h2>
                <div className="flex flex-row gap-5">
                    <div
                        className={`h-128 border w-1/3 rounded-3xl relative bg-building-4 bg-no-repeat bg-cover bg-center`}
                    >
                        <div className="absolute bottom-10 left-10 mb-3 text-white">
                            <p className="text-xl font-medium">8 Bedroom Duplex</p>
                            <span className="text-lg">Banana island, Nigeria</span>
                        </div>
                    </div>
                    <div className="h-128 w-1/3 rounded-3xl relative bg-mension bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-10 left-10 mb-3 text-white">
                            <p className="text-xl font-medium">6 Bedroom Mension</p>
                            <span className="text-lg">wuse Abuja, Nigeria</span>
                        </div>
                    </div>
                    <div className="h-128 w-1/3 rounded-3xl relative bg-country-home bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-10 left-10 mb-3 text-white">
                            <p className="text-xl font-medium">3 Bedroom country home</p>
                            <span className="text-lg">Leki phase 2, Lagos State</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ongoing projects1 */}
            <section className="mb-10">
                <h2 className="font-128 text-2xl text-gray-800 mb-6">
                    Ongoing Architectural Projects
                </h2>
                <div className="flex flex-row gap-5">
                    <div
                        className={`h-128 w-1/3 rounded-3xl relative bg-ongoing-1 bg-no-repeat bg-cover bg-center`}
                    >
                        <div className="absolute bottom-10 left-10 mb-3 text-white">
                            <p className="text-xl font-medium">8 Bedroom Duplex</p>
                            <span className="text-lg">Banana island, Nigeria</span>
                        </div>
                    </div>
                    <div className="h-128 w-1/3 rounded-3xl relative bg-ongoing-2 bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-10 left-10 mb-3 text-white">
                            <p className="text-xl font-medium">6 Bedroom Mension</p>
                            <span className="text-lg">wuse Abuja, Nigeria</span>
                        </div>
                    </div>
                    <div className="h-128 w-1/3 rounded-3xl relative bg-ongoing-3 bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-10 left-10 mb-3 text-white">
                            <p className="text-xl font-medium">3 Bedroom country home</p>
                            <span className="text-lg">Leki phase 2, Lagos State</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ongoing projects */}
            <section className="mb-10">
                <h2 className="font-semibold text-2xl text-gray-800 mb-6">
                    Ongoing Architectural Projects
                </h2>
                <div className="flex flex-row gap-5">
                    <div
                        className={`h-128 w-1/3 rounded-3xl relative bg-ongoing-4 bg-no-repeat bg-cover bg-center`}
                    >
                        <div className="absolute bottom-10 left-10 mb-3 text-white">
                            <p className="text-xl font-medium">8 Bedroom Duplex</p>
                            <span className="text-lg">Banana island, Nigeria</span>
                        </div>
                    </div>
                    <div className="h-128 w-1/3 rounded-3xl relative bg-ongoing-5 bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-10 left-10 mb-3 text-white">
                            <p className="text-xl font-medium">Warehouse</p>
                            <span className="text-lg">wuse Abuja, Nigeria</span>
                        </div>
                    </div>
                    <div className="h-128 w-1/3 rounded-3xl relative bg-ongoing-6 bg-no-repeat bg-cover bg-center">
                        <div className="absolute bottom-10 left-10 mb-3 text-white">
                            <p className="text-xl font-medium">3 Bedroom country home</p>
                            <span className="text-lg">Leki phase 2, Lagos State</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
