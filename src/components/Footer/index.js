import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer
      className="flex col-12 py-3 justify-content-between align-self-end align-items-center px-2 md:px-0"
      style={{ color: "#E5E4E6", backgroundColor: "#2B2B2B" }}
    >
      <div className="flex col-12 md:col-10 px-0 mx-auto justify-content-between align-items-center">
        <Link href="/">
          <Image
            alt="logo black"
            src="/pictures/khairi-white.svg"
            height={28}
            width={28}
          />
        </Link>
        <p className="my-1">&#169; 2023 Khairi U, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
