import { FunctionComponent } from "react";
import Ques from "./Ques";
import FAQ from "./FAQ";

const QuestionSection = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start pt-[119px] px-8 pb-[156px] box-border leading-[normal] tracking-[normal]">
      <main className="h-[609px] flex-1 rounded-[40px] bg-green-100 flex flex-col items-end justify-start  ">
        <Ques />
        <div className="self-stretch flex flex-row items-start justify-between max-w-full shrink-0 gap-[20px] lg:flex-wrap">
          <div className="h-[563.6px] w-[491px] flex flex-col items-start justify-start pt-[49px] px-0 pb-0 box-border min-w-[491px] max-w-full lg:flex-1 mq750:pt-8 mq750:box-border mq750:min-w-full"></div>
          <FAQ />
        </div>
        <div className="w-[582px] h-px relative box-border hidden max-w-full border-t-[1px] border-solid border-lightgray" />
      </main>
    </div>
  );
};

export default QuestionSection;
