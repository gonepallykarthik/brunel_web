import {
  ArrowRightIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row flex-wrap items-start justify-between pt-[285px] pb-[214px] pr-[104px] pl-[103px] box-border leading-[normal] tracking-[normal] gap-[20px] text-left text-[64px] text-gray-200 font-switzer mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[51px] mq750:pr-[52px] mq750:box-border">
      <div className="w-[331.2px] flex flex-col items-start justify-start pt-[43px] px-0 pb-0 box-border max-w-full mq450:pt-7 mq450:box-border">
        <div className="self-stretch flex flex-col items-end justify-start gap-[59.7px] mq450:gap-[30px]">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="w-[267.8px] shadow-[0px_22.6px_36.14px_rgba(30,_30,_30,_0.09)] rounded-[27.11px] bg-white flex flex-col items-start justify-start py-[30px] pr-5 pl-[30px] box-border gap-[10px] z-[1]">
              <div className="flex flex-row items-start justify-start relative">
                <div className="relative tracking-[-0.03em] leading-[77px] font-medium inline-block min-w-[121px] text-black ">
                  40%
                </div>
                <SparklesIcon className="size-10 text-black" />
              </div>
              <div className="w-[207.8px] relative text-lg leading-[130%] font-medium font-manrope text-slate-500 flex items-center">
                Achieved reduction in project execution time by optimising team
                availability
              </div>
            </div>
          </div>
          <div className="w-[245px] shadow-[0px_15.2px_35.49px_rgba(0,_0,_0,_0.09)] rounded-[111.54px] bg-white flex flex-row items-start justify-start p-4 box-border gap-[14px] z-[1] text-5xl font-manrope">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <RocketLaunchIcon className="size-10 text-green-500" />
            </div>
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <b className="text-black relative uppercase inline-block min-w-[92px] mq450:text-[19px]">
                10 days
              </b>
              <div className="relative text-base leading-[21px] font-medium text-black">
                Staff Deployment
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[290.5px] flex flex-col items-start justify-start pt-[286px] px-0 pb-0 box-border text-[63.4px] text-white mq675:pt-[186px] mq675:box-border">
        <div className="self-stretch flex flex-row items-start justify-start relative">
          <Image
            className="h-[546.3px] w-[507px] absolute !m-[0] top-[-357px] left-[-292.3px] object-cover"
            alt=""
            width={507}
            height={546}
            src="/person.jpg"
          />
          <div className="flex-1 shadow-[0px_23.6px_37.81px_rgba(30,_30,_30,_0.09)] rounded-[28.36px]  bg-green-950 flex flex-col items-start justify-start pt-8 pb-[38px] pr-[29px] pl-[35px] gap-[20px] z-[1] border-[1.2px] border-solid border-darkslategray-100">
            <div className="w-[221px] flex flex-row items-start justify-start gap-[11px]">
              <div className="flex-1 relative tracking-[-0.03em] leading-[120%] font-medium whitespace-nowrap mq450:text-19xl mq450:leading-[46px] mq750:text-32xl mq750:leading-[61px]">
                $0.5
              </div>
              <div className="flex flex-col items-start justify-start pt-[37px] px-0 pb-0 text-[22.8px] text-darkgray">
                <div className="relative tracking-[0.01em] leading-[32px] uppercase font-medium inline-block min-w-[91px] mq450:text-lg mq450:leading-[26px]">
                  million
                </div>
              </div>
            </div>
            <div className="self-stretch relative text-lg leading-[130%] font-medium font-manrope text-lightgray">
              <h1 className="text-2xl text-white">
                Reduced client expenses by saving on hiring and employee costs.{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[398px] flex flex-col items-start justify-start gap-[130.2px] max-w-full text-[40px] font-manrope mq450:gap-[65px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[55px] mq450:gap-[27px]">
          <div className="self-stretch relative tracking-[-0.02em] leading-[120%] font-semibold mq450:text-5xl mq450:leading-[29px] mq750:text-[32px] mq750:leading-[38px]">
            <h1 className="text-4xl text-black font-bold">
              Enhance fortune 50 company’s insights teams research capabilities{" "}
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start gap-[12px]">
            <div className="h-[10.8px] w-[10.8px] relative rounded-[50%] bg-mediumseagreen" />
            <div className="h-[10.8px] w-[10.8px] relative rounded-[50%] bg-gainsboro" />
            <div className="h-[10.8px] w-[10.8px] relative rounded-[50%] bg-gainsboro" />
          </div>
        </div>
        <div className="rounded-[100px] [background:linear-gradient(#1c1c1c,_#1c1c1c),_linear-gradient(97.55deg,_#1c1c1c,_#454444)] flex flex-row items-start justify-start py-[30.5px] px-10 gap-[16px] text-center text-[20px] text-white">
          <div className="relative capitalize font-semibold inline-block min-w-[125px] mq450:text-base">
            Explore more
          </div>
          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
            <ArrowRightIcon className="size-8 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
