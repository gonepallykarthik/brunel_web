import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function NavBar() {
  return (
    <header className="flex gap-5 self-center py-4 pr-2.5 pl-6 w-full text-center bg-white drop-shadow-md rounded-2xl">
      <h1 className="shrink my-auto w-auto text-4xl font-black basis-auto grow-0 text-zinc-800">
        <Link href={"/"}>Brunel </Link>
      </h1>
      <nav className="flex gap-5 justify-between ml-auto max-md:flex-wrap">
        <Button className="text-black bg-white border-black  hover:bg-black hover:text-white">
          <Link href={"/projects"}>Get Projects</Link>
        </Button>
        <Button className="text-white bg-black border-black">
          <Link href={"/"}>onBoard Talent</Link>
        </Button>
      </nav>
    </header>
  );
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`justify-center px-6 py-4 text-xl border border-solid rounded-[52px] max-md:px-5 ${className}`}
    >
      {children}
    </button>
  );
};
