import { useEffect } from "react";
import { useRouter } from "next/router";
import Countdown from "react-countdown";
const ErrorPage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center gap-8 p-8 text-center text-gray-400">
        <p className="absolute z-0 text-9xl text-[#ffffff07] sm:text-[20em]">
          404
        </p>
        <p className="flex items-center justify-center text-xl">
          You will be automatically redirected in{" "}
          <Countdown
            date={Date.now() + 3000}
            renderer={(props) => (
              <span className="px-2 text-3xl font-bold text-primary-dark">
                {props.seconds}
              </span>
            )}
          ></Countdown>
          seconds
        </p>
        <a
          className="z-10 cursor-pointer rounded bg-gray-300 px-6 py-2 text-lg text-black lg:transition-colors lg:hover:bg-black lg:hover:text-primary-dark"
          onClick={handleClick}
        >
          Return to home
        </a>
      </div>
    </>
  );
};

export default ErrorPage;
