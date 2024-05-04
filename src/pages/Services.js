import architecture from '../assets/images/pexels-camcasey-1722183.jpg';
import building from '../assets/images/pexels-hikaique-65438.jpg';
import projectmanagement from '../assets/images/pexels-cottonbro-7437488.jpg';
import construction from '../assets/images/pexels-marosmarkovic-1451416.jpg';
import { useScroll } from '../context/ScrollContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
            <section className="mb-4">
                <h1 className="text-gray-700 font-bold text-2xl mb-2">Services</h1>
                <p className="text-gray-500 text-lg font-semibold leading-snug">
                    Welcome to Our architectural services page, where creativity meets
                    functionality and dreams take shape. At our architectural company, we
                    offer a comprehensive range of services tailored to meet your unique
                    needs and aspirations. Whether you're embarking on a residentail,
                    commercial, or institutional projects, our team of skilled
                    architecturs is here to guide you every step of the way.
                </p>
            </section>

            <div className="">
                <div className="py-6 md:py-12 m-auto">
                    <div className="space-y-12">
                        {
                            services.map((service, index) => (
                                <div key={service.name} className={`flex justify-between items-center space-x-6 gap-12 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                                    <div className="w-1/2 space-y-3">
                                        <h3 className="font-semibold text-gray-800 text-2xl">{service.name}</h3>
                                        <p className='font-semibold text-gray-500 text-lg pr-6'>
                                            {service.text}
                                        </p>
                                        <Button />
                                    </div>
                                    <div className="w-1/2">
                                        <LazyLoadImage
                                            src={service.image}
                                            alt="Architecture"
                                            className="max-h-128 rounded-xl w-full"
                                        />
                                    </div>
                                </div>
                            ))
                        }
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
            className="p-6 py-4 text-base font-medium text-center tracking-wide text-white rounded-xl bg-gray-900 w-fit
        hover:bg-gray-700 focus:outline-none focus:ring-primary-300"
        >
            Contact Us
        </button>
    )
}

export default Services;
