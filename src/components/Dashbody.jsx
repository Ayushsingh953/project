import React from "react";
import logo from "./assets/airy-colored-splashes-2.png";
import logo1 from "./assets/airy-multicolored-pastel-clouds-2.png";

const Dashbody = () => {
    return (
        <div className="flex justify-center mb-20 mt-[-10] py-2">
            <div className="max-w-4xl w-full flex items-center">
                <div className="mr-6">
                    <img src={logo} alt="Empowering Women" width={300} height={300}/>
                </div>
                <div>
                    {/* <h3 className="tagline text-lg text-red-700 font-serif font-bold text-center">
                        <br></br>
                        Empowering Women with Knowledge and Convenience
                    </h3> */}
                    <h1 className="hero-heading text-6xl font-bold text-gray-900 mt-2 text-center">
                        Your Ultimate Solution For Menstrual Health
                    </h1>
                    <p className="hero-content text-m text-gray-700 mt-2 text-center"><br></br>
                        Take charge of your menstrual cycle with our all-in-one
                        platform. Get period tracking, sustainable products, expert
                        consultations, and more to empower your reproductive health.
                    </p>
                    <div className="flex justify-center mt-4"><br></br>
                    <a href="/SignUp">
                        <button className="btn btn-primary w-full md:w-auto bg-rose-400 hover:bg-rose-500 hover:shadow-md px-10 py-2 rounded-xl">
                        <i>Try MenstruEase today</i>
                        </button>
                    </a>

                    </div>
                </div>
                <div className="mr-13"><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <img src={logo1} alt="Empowering Women" width={300} height={300}/>
                </div>
            </div>
        </div>
    )
}

export default Dashbody;
