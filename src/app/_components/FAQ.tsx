const FrameComponent = () => {
  return (
    <div className="w-[581px] flex flex-col items-start justify-start gap-[35px] min-w-[581px] max-w-full text-left text-xl text-gray1 font-manrope lg:flex-1 mq750:gap-[17px] mq750:min-w-full">
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="relative leading-[140%] font-semibold mq450:text-base mq450:leading-[22px]">
            <p className="m-0">What’s the guarantee that I will be satisfied</p>
            <p className="m-0">with the hired talent?</p>
          </div>
          <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0"></div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-lightgray" />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="relative leading-[140%] font-semibold mq450:text-base mq450:leading-[22px]">
            Can I hire multiple talents at once?
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0"></div>
        </div>
        <div className="self-stretch h-[78px] relative text-mini leading-[160%] text-gray-600 inline-block shrink-0">
          If unhappy with a project, communicate with the freelancer, allow for
          revisions, and refer to the agreement. Escalate to platform support if
          needed, considering mediation. Review policies, seek collaborative
          solutions for resolution.
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-lightgray" />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="relative leading-[140%] font-semibold mq450:text-base mq450:leading-[22px]">
            Why should I not go to an agency directly?
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0"></div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-lightgray" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px]">
        <div className="w-[446px] relative leading-[140%] font-semibold flex items-center shrink-0 max-w-[calc(100%_-_44px)] mq450:text-base mq450:leading-[22px]">
          <span className="w-full">
            <p className="m-0">Who can help me pick a right skillset</p>
            <p className="m-0">and duration for me?</p>
          </span>
        </div>
        <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0"></div>
      </div>
    </div>
  );
};

export default FrameComponent;
