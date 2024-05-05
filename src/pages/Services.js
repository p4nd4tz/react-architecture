import architecture from "../assets/images/pexels-camcasey-1722183.jpg";
import building from "../assets/images/pexels-hikaique-65438.jpg";
import projectmanagement from "../assets/images/pexels-cottonbro-7437488.jpg";
import construction from "../assets/images/pexels-marosmarkovic-1451416.jpg";
import { useScroll } from "../context/ScrollContext";
import { LazyLoadImage } from "react-lazy-load-image-component";

const services = [
    {
        name: "Architectural Services",
        image: architecture,
        text: `At our architectural company, the Architectural Services
        Department serves as the creative heart, driving the
        realization of innovative designs and visionary solutions.
        With a passion for architectural excellence, creativity, and
        client-centric approach, our department leads the way in
        shaping environment that inspire, engage, and endure.`,
    },
    {
        name: "Building Services",
        image: building,
        text: `At our architectural company, the Architectural Services
        Department serves as the creative heart, driving the
        realization of innovative designs and visionary solutions.
        With a passion for architectural excellence, creativity, and
        client-centric approach, our department leads the way in
        shaping environment that inspire, engage, and endure.`,
    },
    {
        name: "Project Management Services",
        image: projectmanagement,
        text: `At our architectural company, the Architectural Services
        Department serves as the creative heart, driving the
        realization of innovative designs and visionary solutions.
        With a passion for architectural excellence, creativity, and
        client-centric approach, our department leads the way in
        shaping environment that inspire, engage, and endure.`,
    },
    {
        name: "Building Construction",
        image: construction,
        text: `At our architectural company, the Architectural Services
        Department serves as the creative heart, driving the
        realization of innovative designs and visionary solutions.
        With a passion for architectural excellence, creativity, and
        client-centric approach, our department leads the way in
        shaping environment that inspire, engage, and endure.`,
    },
];

const Services = () => {
    return (
        <>
            <section className="mb-10">
                <h1 className="text-gray-700 font-bold text-xl md:text-2xl mb-2">Services</h1>
                <p className="text-gray-500 sm:text-lg font-medium">
                    Welcome to Our architectural services page, where creativity meets
                    functionality and dreams take shape. At our architectural company, we
                    offer a comprehensive range of services tailored to meet your unique
                    needs and aspirations. Whether you're embarking on a residential,
                    commercial, or institutional project, our team of skilled architects
                    is here to guide you every step of the way.
                </p>
            </section>

            <div className="mx-auto py-6 md:py-12">
                <div className="space-y-12">
                    {services.map((service, index) => (
                        <div
                            key={service.name}
                            className={`flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6 gap-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            <div className="w-full md:w-1/2 space-y-3">
                                <h3 className="font-bold text-gray-800 text-xl md:text-2xl">
                                    {service.name}
                                </h3>
                                <p className="font-medium text-gray-500 sm:text-lg pr-6">
                                    {service.text}
                                </p>
                                <Button />
                            </div>
                            <div className="w-full md:w-1/2">
                                <LazyLoadImage
                                    src={service.image}
                                    alt="Architecture"
                                    class="max-h-128 rounded-xl w-full"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

const Button = () => {
    const { scrollToContactForm } = useScroll();

    return (
        <button
            type="button"
            onClick={() => scrollToContactForm()}
            className="p-4 md:p-6 py-3 md:py-4 text-base md:text-lg font-medium text-center tracking-wide text-white rounded-xl bg-gray-900 w-fit md:w-auto hover:bg-gray-700 focus:outline-none focus:ring-primary-300"
        >
            Contact Us
        </button>
    );
};

export default Services;
