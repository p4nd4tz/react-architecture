const Projects = () => {
    return (
        <>
            <div className="mb-10">
                <h1 className="text-gray-700 font-bold text-xl md:text-2xl mb-2">Project Page</h1>
                <p className="text-gray-500 sm:text-lg font-medium">
                    "Explore our latest projects: where creativity meets functionality in
                    every detail. Discover innovation and inspiration brought to life."
                </p>
            </div>

            <section className="mb-10">
                <h2 className="font-bold text-xl md:text-2xl text-gray-800 mb-6">
                    Completed Construction Project
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <Architecture bgImage={'bg-building-1'} name={'8 Bedroom Duplex'} place={'Banana island, Nigeria'} />
                    <Architecture bgImage={'bg-building-2'} name={'Shopping Mall'} place={'Wuse Abuja, Nigeria'} />
                    <Architecture bgImage={'bg-building-3'} name={'Oil and Gas Company'} place={'Lekki Phase 2, Lagos State'} />
                </div>
            </section>

            <section className="mb-10">
                <h2 className="font-bold text-xl md:text-2xl text-gray-800 mb-6">
                    Completed Construction Project
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <Architecture bgImage={'bg-building-4'} name={'8 Bedroom Duplex'} place={'Banana island, Nigeria'} />
                    <Architecture bgImage={'bg-mension'} name={'6 Bedroom Mension'} place={'wuse Abuja, Nigeria'} />
                    <Architecture bgImage={'bg-country-home'} name={'3 Bedroom country home'} place={'Leki phase 2, Lagos State'} />
                </div>
            </section>

            <section className="mb-10">
                <h2 className="font-bold text-xl md:text-2xl text-gray-800 mb-6">
                Ongoing Architectural Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <Architecture bgImage={'bg-ongoing-1'} name={'8 Bedroom Duplex'} place={'Banana island, Nigeria'} />
                    <Architecture bgImage={'bg-ongoing-2'} name={'6 Bedroom Mension'} place={'wuse Abuja, Nigeria'} />
                    <Architecture bgImage={'bg-ongoing-3'} name={'3 Bedroom country home'} place={'Leki phase 2, Lagos State'} />
                </div>
            </section>

            <section className="mb-10">
                <h2 className="font-bold text-xl md:text-2xl text-gray-800 mb-6">
                Ongoing Architectural Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <Architecture bgImage={'bg-ongoing-4'} name={'8 Bedroom Duplex'} place={'Banana island, Nigeria'} />
                    <Architecture bgImage={'bg-ongoing-5'} name={'6 Bedroom Mension'} place={'Warehouse'} />
                    <Architecture bgImage={'bg-ongoing-6'} name={'3 Bedroom country home'} place={'Leki phase 2, Lagos State'} />
                </div>
            </section>
        </>
    );
};


const Architecture = ({ bgImage, name, place }) => {
    return (
        <div className="mb-5 md:mb-0">
            <div className={`h-64 md:h-80 lg:h-96 relative rounded-3xl ${bgImage} bg-no-repeat bg-cover bg-center`}>
                <div className="absolute bottom-5 left-5 text-white">
                    <p className="text-lg md:text-xl font-semibold">{name}</p>
                    <span className="text-sm md:text-base">{place}</span>
                </div>
            </div>
        </div>
    )
}


export default Projects;
