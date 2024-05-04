import image1 from "../assets/images/pexels-olly-774909.jpg";
import image2 from "../assets/images/pexels-chloekalaartist-1043471.jpg";
import image3 from "../assets/images/pexels-vinicius-wiesehofer-289347-1130626.jpg";
import image4 from "../assets/images/pexels-cottonbro-4098157.jpg";
import image5 from "../assets/images/pexels-anna-nekrashevich-6801642.jpg";
import image6 from "../assets/images/pexels-danxavier-1239288.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const members = [
    {
        image: image1,
        name: "Shirley Bismarck",
        designation: "Director, Architecture",
    },
    { image: image2, name: "Megan Kunle", designation: "Engineer" },
    { image: image3, name: "Abimbola Michael", designation: "Architecture" },
    {
        image: image4,
        name: "Chinonso Blessing",
        designation: "Senior, Architecture",
    },
    { image: image5, name: "Tunde johnson", designation: "Architecture" },
    {
        image: image6,
        name: "Seun Olatunji",
        designation: "Construction project Manager",
    },
];

const AboutUs = () => {

    return (
        <>
            {/* About us */}
            <section className="mb-8">
                <h1 className="text-gray-700 font-extrabold text-2xl mb-2">About Us</h1>
                <p className="text-gray-500 text-lg font-semibold leading-snug">
                    Our story is one of passion, creativity, and relentless pursuite of
                    architectural excellence. Founded on the belief that every space has
                    the potential to inspire and elevate. We embarked on a journey to
                    redefine the skyline and shape the built environment. From humble
                    beginnings to becoming a trusted name in the industry, our commitment
                    to innovation and design integrity has remained unwavering. With each
                    project, we strive to create immersive experiences that leave a
                    lasting impact on communities and individuals alike. Our story is a
                    tes
                </p>
            </section>

            {/* Read Our Story */}
            <section className="mb-8">
                <h1 className="text-gray-700 font-extrabold text-2xl mb-2">
                    Read Our Story
                </h1>
                <p className="text-gray-500 text-lg font-semibold leading-snug">
                    Welcome to where innovation meets imagination. As a leading
                    architectural firm, we specialize in crafting spaces that inspire and
                    endure. Our team of passionate designers and engineers is dedicated to
                    creating innovatives solutions tailored to our clients;" unique needs.
                    From concept to construction, We strive for excellence in every
                    details, ensuring our projects not only stand the test of time but
                    also exceed expectations.
                </p>
            </section>

            {/* Management Team */}
            <div className="mt-20">
                <h1 className="text-gray-700 font-extrabold text-2xl mb-3">
                    Management Team
                </h1>
                <div className="p-5 bg-gray-50">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5 border-b-2 border-gray-400 pb-8">
                        {members.map((member, index) => (
                            // <Member key={member.name} image={member.image} name={member.name} designation={member.designation}/>
                            index < 3 && (<div
                                key={member.name}
                                className={`bg-gray-50 rounded-lg flex flex-col justify-between text-center`}
                            >
                                <LazyLoadImage
                                    className="w-full h-auto mb-2 max-h-96"
                                    src={member.image}
                                    alt="management team"
                                />
                                <div className="mt-2">
                                    <div className="text-xl text-gray-700">
                                        <p className="text-gray-800 font-semibold transition">
                                            {member.name}
                                        </p>
                                        <p className="text-gray-500 text-base">
                                            {member.designation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            )
                        ))}
                    </div>
                </div>
                <div className="p-5 bg-gray-50">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5 border-b-2 border-gray-400 pb-8">
                        {members.map((member, index) => (
                            // <Member key={member.name} image={member.image} name={member.name} designation={member.designation}/>
                            index > 2 && (<div
                                key={member.name}
                                className={`bg-gray-50 rounded-lg flex flex-col justify-between text-center`}
                            >
                                <LazyLoadImage
                                    className="w-full h-auto mb-2 max-h-96"
                                    src={member.image}
                                    alt="management team"
                                />
                                <div className="mt-2">
                                    <div className="text-xl text-gray-700">
                                        <p className="text-gray-800 font-semibold transition">
                                            {member.name}
                                        </p>
                                        <p className="text-gray-500 text-base">
                                            {member.designation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            )
                        ))}
                    </div>
                </div>
            </div>

            {/* Achievement & Awards */}
            <div className="mt-10">
                <h1 className="text-gray-700 font-bold text-2xl mb-3">
                    Achievement and Awards
                </h1>
                <section className="text-white flex gap-5">
                    <div className="h-36  w-1/2 relative bg-award1 bg-no-repeat bg-cover bg-center">
                        <div className="text-xl absolute left-5 mt-5">
                            <h2 className="font-medium">Builders Awards</h2>
                            <p className="text-lg">2023</p>
                        </div>
                    </div>
                    <div className=" w-1/2 bg-award2 bg-no-repeat bg-cover bg-center">
                        <div className="text-xl ml-5 mt-5">
                            <h2 className="font-medium">Builders Awards</h2>
                            <p className="text-lg">2024</p>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
};


export default AboutUs;
