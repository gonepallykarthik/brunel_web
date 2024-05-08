import "../globals.css";

const FrameComponent1 = () => {
  return (
    <div className="mt-10 w-[1207.5px] flex flex-col items-start justify-start gap-[9px] max-w-full shrink-0 text-left text-13xl text-darkgray font-covered-by-your-grace">
      <div className="relative tracking-[-0.02em] leading-[36px] mq450:text-lgi mq450:leading-[21px] mq1050:text-7xl mq1050:leading-[28px]">
        <h4 className="text-xl special-text">What’s on your mind </h4>
      </div>
      <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] text-41xl text-gray1 font-manrope lg:flex-wrap">
        <div className="relative tracking-[-0.01em] leading-[110%] font-semibold inline-block max-w-full mq450:text-17xl mq450:leading-[40px] mq1050:text-29xl mq1050:leading-[53px]">
          <h1 className="text-4xl font-bold">Ask Questions </h1>
        </div>
        <div className="w-[581px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border max-w-full text-xl">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="relative leading-[140%] font-semibold mq450:text-base mq450:leading-[22px]">
                Do you offer freelancers?
              </div>
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0"></div>
            </div>
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-lightgray" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
