import architecture from '../assets/images/pexels-camcasey-1722183.jpg';
import building from '../assets/images/pexels-hikaique-65438.jpg';
import projectmanagement from '../assets/images/pexels-cottonbro-7437488.jpg';
import construction from '../assets/images/pexels-marosmarkovic-1451416.jpg';
import { useScroll } from '../context/ScrollContext';

const services = [
    {
        name: 'Architectural Services',
        image: architecture,
        text: `At our architectural company, the Architectural Services
        Department serves as the creative heart, driving the
        realization of innovative designs and visionary solutions.
        With a passion for architectural excellence, creativity, and
        client-centric approach, our department leads the way in
        shaping environment that inspire, engage, and endure.`,
    },
    {
        name: 'Building Services',
        image: building,
        text: `At our architectural company, the Architectural Services
        Department serves as the creative heart, driving the
        realization of innovative designs and visionary solutions.
        With a passion for architectural excellence, creativity, and
        client-centric approach, our department leads the way in
        shaping environment that inspire, engage, and endure.`,
    },
    {
        name: 'Project Management Services',
        image: projectmanagement,
        text: `At our architectural company, the Architectural Services
        Department serves as the creative heart, driving the
        realization of innovative designs and visionary solutions.
        With a passion for architectural excellence, creativity, and
        client-centric approach, our department leads the way in
        shaping environment that inspire, engage, and endure.`,
    },
    {
        name: 'Building Construction',
        image: construction,
        text: `At our architectural company, the Architectural Services
        Department serves as the creative heart, driving the
        realization of innovative designs and visionary solutions.
        With a passion for architectural excellence, creativity, and
        client-centric approach, our department leads the way in
        shaping environment that inspire, engage, and endure.`,
    },
]

const Services = () => {
    return (
        <>
            <section className="mb-8">
                <h1 className="text-gray-700 font-extrabold text-3xl mb-3">Services</h1>
                <p className="text-gray-500 text-2xl font-medium leading-8">
                    Welcome to Our architectural services page, where creativity meets
                    functionality and dreams take shape. At our architectural company, we
                    offer a comprehensive range of services tailored to meet your unique
                    needs and aspirations. Whether you're embarking on a residentail,
                    commercial, or institutional projects, our team of skilled
                    architecturs is here to guide you every step of the way.
                </p>
            </section>

            <div className="">
                <div className="py-8 md:py-16 m-auto">
                    <div className="space-y-16">
                        {
                            services.map((service, index) => (
                                <div key={service.name} className={`flex justify-between items-center space-x-8 gap-16 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                                    <div className="w-1/2 space-y-6">
                                        <h3 className="font-semibold text-gray-800 text-3xl">{service.name}</h3>
                                        <p className='font-medium text-gray-500 text-2xl tracking-wide leading-9 pr-8'>
                                            {service.text}
                                        </p>
                                        <Button />
                                    </div>
                                    <div className="w-1/2">
                                        <img
                                            src={service.image}
                                            alt="Architecture"
                                            className="max-h-176 rounded-xl w-full"
                                        />
                                    </div>
                                </div>
                            ))
                        }
                        {/* <div className="flex justify-between items-center space-x-8 gap-10">
                            <div className="w-1/2 space-y-6">
                                <h3 className="font-semibold text-gray-800 text-3xl">Architectural Services</h3>
                                <p className='font-medium text-gray-500 text-2xl tracking-wide leading-9 pr-8'>
                                    At our architectural company, the Architectural Services
                                    Department serves as the creative heart, driving the
                                    realization of innovative designs and visionary solutions.
                                    With a passion for architectural excellence, creativity, and
                                    client-centric approach, our department leads the way in
                                    shaping environment that inspire, engage, and endure.
                                </p>
                                <button
                                    type="button"
                                    className="p-8 py-6 text-xl font-medium text-center tracking-wide text-white rounded-2xl bg-gray-900 w-fit
                                        hover:bg-gray-700 focus:outline-none focus:ring-primary-300"
                                >
                                    Contact Us
                                </button>
                            </div>
                            <div className="w-1/2">
                                <img
                                    src={architecture}
                                    alt="Architecture"
                                    className="max-h-176 rounded-xl w-full"
                                />
                            </div>
                        </div> */}
                    </div>
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
            className="p-8 py-6 text-xl font-medium text-center tracking-wide text-white rounded-2xl bg-gray-900 w-fit
        hover:bg-gray-700 focus:outline-none focus:ring-primary-300"
        >
            Contact Us
        </button>
    )
}

export default Services;
