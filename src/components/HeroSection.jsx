import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    
    <div className="flex flex-col items-center mt-6 lg:mt-3">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            React build tools 
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                {" "}
                for Developers.
                </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quod adipisci qui tempora veritatis nostrum incidunt eligendi accusantium quibusdam a voluptas laborum, asperiores veniam minima minus natus neque. Odit, nesciunt?</p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
                start for free
            </a>
            <a href="#" className="py-3 px-4 mx-3 rounded-md border">
                Documentation
            </a>
        </div>
        <div className="flex mt-10 justify-center">
            <video autoPlay loop muted className="rounded-lg w-1/3 border border-orange-700 shadow-orange-400 mx-2 my-4">
            <source src={video1} type="video/mp4"/>
            Your browser does not support the video.
            </video>
            <video autoPlay loop muted className="rounded-lg w-1/3 border border-orange-700 shadow-orange-400 mx-2 my-4">
            <source src={video2} type="video/mp4"/>
            Your browser does not support the video.
            </video>

        </div>
    </div>
  );
};

export default HeroSection