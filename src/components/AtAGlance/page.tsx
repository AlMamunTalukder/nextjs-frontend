import Image from "next/image";
import shape from "../../../public/img/shape-04.svg";

const AtAGlance = () => {
    return (
        <div className=" bg-white py-12">
            <div className=" container mx-auto p-6 max-w-6xl bg-black">
                <div className="flex items-center gap-8">
                    {/* First Stat */}
                    <div className="text-center relative md:mb-0">
                        <div>
                            <h4 className="text-4xl font-bold text-[#FF6915]">
                                <span className="counter">10</span>k+
                            </h4>
                        </div>
                        <div>
                            <span className="font-medium text-xl uppercase">
                                Experienced designers
                            </span>
                        </div>
                        <div>
                            <span className="text-base opacity-60">
                                Our company has 100 expert
                            </span>
                        </div>
                    </div>
                    <Image src={shape} alt="img"/>

                    {/* Second Stat */}
                    <div className="text-center relative md:mb-0">
                        <div>
                            <h4 className="text-4xl font-bold text-[#FF6915]">
                                <span className="counter">10</span>k+
                            </h4>
                        </div>
                        <div>
                            <span className="font-medium text-xl uppercase">
                                SATISFIED CUSTOMERS
                            </span>
                        </div>
                        <div>
                            <span className="text-base opacity-60">
                                Our company satisfied customer
                            </span>
                        </div>
                    </div>
                    <Image src={shape} alt="img"/>

                    {/* Third Stat */}
                    <div className="text-center relative">
                        <div>
                            <h4 className="text-4xl font-bold text-[#FF6915]">
                                <span className="counter">120</span>k+
                            </h4>
                        </div>
                        <div>
                            <span className="font-medium text-xl uppercase">
                                COMPLETED CASSES
                            </span>
                        </div>
                        <div>
                            <span className="text-base opacity-60">
                                We have done 1200 Cassses
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AtAGlance;


