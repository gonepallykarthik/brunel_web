import "./globals.css";

import QuestionSection from "./_components/Question";
import HeroSection from "./_components/herosection";

interface SuccessStoriesProps {
  title: string;
  description: string;
}

function SuccessStories({ title, description }: SuccessStoriesProps) {
  return (
    <section className=" mt-12  flex flex-col items-center justify-center px-5 text-center">
      <h2 className="text-2xl text-green-600 special-text">{title}</h2>
      <p className="mt-2 max-w-[800px] leading-tight text-6xl text-zinc-900 max-md:max-w-full max-md:text-4xl">
        {description}
      </p>
    </section>
  );
}

export default function App() {
  return (
    <section className=" w-full  flex flex-col justify-center items-center">
      <SuccessStories
        title="Success stories"
        description="Every Success journey we've Encountered."
      />
      <HeroSection />
      <QuestionSection />
    </section>
  );
}
