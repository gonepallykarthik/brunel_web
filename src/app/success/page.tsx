"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "../globals.css";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

function SuccessPage() {
  const router = useRouter();
  const [time, setTime] = useState<number>(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 1) {
          clearInterval(timer);
          router.push("/");
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <section className="w-full min-h-[440px] ">
      <div className="flex w-[500px] mb-40 flex-col mt-20 justify-center items-center mx-auto">
        <CheckBadgeIcon className="size-36 text-green-400" />
        <h4 className="text-green-600 text-lg special-text">
          Success Submitted
        </h4>
        <h1 className="text-4xl font-bold"> Congratulations</h1>
        <p className="text-slate-600 text-center text-xl">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </p>
      </div>

      <p className="mb-10 text-center text-2xl text-slate-500">
        Redirecting you to home page in{" "}
        <span className="text-md text-black font-bold">{time}</span>{" "}
      </p>
    </section>
  );
}

export default SuccessPage;
