import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import { BsCircleFill } from "react-icons/bs";

const Loader: React.FC<{ useLoader: (flag: boolean) => void }> = (props) => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "> npm build profile ^150\n `> fetching resources` ... ^25\n `> building portfolio` ... ^25\n `> optimizing final build` ... ^25\n `> build succesfull ✅` \n `> Routing to 🏠` ^1000",
      ],
      typeSpeed: 25,
      backSpeed: 50,
      cursorChar: "_",
      onComplete: () => {
        props.useLoader(false);
      },
    };

    if (!el.current) {
      return () => {
        console.log("No span located");
      };
    }
    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, [props]);

  return (
    <div className="absolute z-40 flex h-screen w-full items-center justify-center bg-[#0d1624]">
      <div className="m-4 h-52 w-full min-w-[220px] max-w-[600px] rounded bg-gray-800">
        <div className="flex w-full gap-2 border-b-2 border-gray-700 px-4 py-2 text-gray-700">
          <BsCircleFill size={10} />
          <BsCircleFill size={10} />
          <BsCircleFill size={10} />
        </div>
        <div className="w-full p-4 text-white">
          <span className="py-2" style={{ whiteSpace: "pre" }} ref={el} />
        </div>
      </div>
    </div>
  );
};

export default Loader;
