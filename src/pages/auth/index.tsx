import { useEffect, useRef, useState } from "react";
import Login from "./login";
import Signup from "./signup";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router";

const Auth = () => {
  const path = useLocation();

  const [isLogin, setIsLogin] = useState(!!path.pathname?.match("login"));

  const linerRef = useRef<HTMLFormElement | null>(null);

  const linerHander = () => {
    if (!linerRef.current) return;

    if (isLogin) {
      linerRef.current.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)";
    } else {
      linerRef.current.style.clipPath =
        "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
    }
  };

  useEffect(() => {
    linerHander();
  }, [isLogin]);

  const switchLogin = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full h-max flex flex-col md:w-[300px] relative overflow-hidden bg-background">
        <div className={cn("text-left relative w-full h-full bg-background")}>
          <Signup ref={linerRef} />
          <Login />
        </div>
      </div>
      <p className="mt-5 text-sm text-gray-600">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span
          className="font-semibold text-blue-700 cursor-pointer"
          onClick={switchLogin}
        >
          {isLogin ? "Signup" : "Login"}
        </span>
      </p>
    </div>
  );
};

export default Auth;
