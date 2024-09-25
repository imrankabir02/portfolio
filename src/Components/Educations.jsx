import { EDUCATIONS } from "../constants";

const Educations = () => {
    return (
        <div id="educations" className="pb-4 border-b border-neutral-900">
            <h1 className="my-20 text-4xl text-center">Educations</h1>

            {/* Tree Structure */}
            <div className="relative w-full">
                {EDUCATIONS.map((education, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center w-full mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            }`} // Flex direction changes based on index for larger screens
                    >
                        {/* Horizontal Connector for Left/Right alignment */}
                        <div className="hidden w-1/2 bg-slate-925 md:block"></div>

                        {/* Education Content */}
                        <div className="w-full p-4 rounded-lg shadow-lg bg-slate-950 md:w-1/3">
                            <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
                            <h6 className="mb-1 text-lg font-semibold text-white">
                                {education.title} -{" "}
                                <span className="text-indigo-400">{education.name}</span>
                            </h6>
                            <p className="text-neutral-400">{education.location}</p>
                        </div>

                        {/* Tree Trunk (Vertical Line) */}
                        {index < EDUCATIONS.length - 1 && (
                            <div
                                className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-slate-930"
                                style={{ height: "0%" }} // Adjusting the trunk line to fit the content
                            ></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Educations;
