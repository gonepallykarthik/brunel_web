import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-row justify-center items-center bg-gray-50 rounded-[33px] p-8 space-x-96">
      <div className=" text-2xl font-medium">
        &copy; Talup 2024. All rights reserved
      </div>
      <nav className="flex flex-row space-x-8 self-start">
        <Link href={"/"} className="underline">
          {" "}
          Terms & conditions
        </Link>
        <Link href={"/"} className="underline">
          Privacy Policy
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
