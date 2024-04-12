import { useNavigate } from "react-router-dom";
import ambassador from "../../../../assets/images/money-box.jpg";

const AmbassadorsSection = () => {
  const navigate = useNavigate();

  return (
    <div className="container max-w-screen-xl mx-auto px-4">
      <div className="flex justify-between">
        <div className="flex gap-16 justify-center items-center mr-8 mt-20 ml-8">
          <div className="w-1/3 mx-auto hidden md:block">
            <img
              className="w-full mix-blend-screen scale-150"
              src={ambassador}
              alt="BOX"
            />
          </div>
          <div className="grid w-full md:w-2/3 place-items-center">
            <h1 className="text-5xl text-center font-bold bg-gradient-to-r from-[#A3FF36] to-[#C2FF7B] text-transparent bg-clip-text mb-4 leading-relaxed">
              Register Your Team
            </h1>
            <p className="text-justify mt-4">
              Gear up for 'Battle-of-Bytes'24' at Bit Mesra, where coding 
              prowess meets adrenaline-fueled competition! Join us in the 
              electrifying arena where lines of code clash and algorithms duel 
              for supremacy. Whether you're a seasoned coder or a newcomer, all 
              brave souls are welcome to test their skills in this ultimate quest 
              for coding glory. Prepare to push the limits of problem-solving and 
              strategic thinking in a series of thrilling coding battles. Mark your 
              calendars, gather your comrades, and brace yourselves for an epic 
              showdown of wit and bytes!
            </p>
            <button
              onClick={() => navigate("/signup")}
              className="bg-[#8EFF09] hover:bg-[#09D3FF] text-black font-bold text-lg py-2 px-10 tracking-wide rounded-xl place-items-center mt-8 "
            >
              Registor as New Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbassadorsSection;
