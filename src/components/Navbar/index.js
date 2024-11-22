"use client";
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { Dropdown } from "primereact/dropdown";
import { Divider } from "primereact/divider";

import styles from "./Navbar.module.css";

export default function Header() {
  const { locale, locales, push } = useRouter();
  const router = useRouter();
  const activeRoute = router.pathname;
  const [visible, setVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "English",
    code: "en",
  });
  const countries = [
    { name: "Indonesia", code: "id" },
    { name: "日本語", code: "ja" },
    { name: "English", code: "en" },
  ];

  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <img
            alt={option.name}
            src={`/icons/icon_${option.code}.png`}
            className={`mr-2`}
            style={{ width: "18px" }}
          />
          <div className="uppercase">{option.code}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };
  const countryOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <img
          alt={option.name}
          src={`/icons/icon_${option.code}.png`}
          className={`mr-2`}
          style={{ width: "18px" }}
        />
        <div>{option.name}</div>
      </div>
    );
  };
  

  return (
    <nav
      className="navbar col-12 bg-white p-0"
      style={{ borderBottom: "1px solid #DCDDDD" }}
    >
      <div className="flex justify-content-between md:justify-content-between align-items-center py-3 px-2 col-12 md:col-10 mx-auto">        
        {/* LOGO */}
        <div>
          <Link href="/" className="hidden md:flex">
            <Image
              alt="logo black"
              src="/pictures/khairi-black.svg"
              height={44}
              width={44}
            />
          </Link>
          <Link href="/" className="flex md:hidden">
            <Image
              alt="logo black"
              src="/pictures/khairi-black.svg"
              height={36}
              width={36}
            />
          </Link>
        </div>
        {/* NAVLINK */}
        {/* <div
          className="hidden md:flex justify-content-between"
          style={{ width: "24em" }}
        >          
          <Link
            className={
              activeRoute === "/portfolio"
                ? styles.navlinkActive
                : styles.navlink
            }
            href="/portfolio"
          >
            portfolio
          </Link>
          <Link
            className={
              activeRoute === "/blog"
                ? styles.navlinkActive
                : styles.navlink
            }
            href="/blog"
          >blog</Link>
          <Link
            className={
              activeRoute === "/bookmarks" ? styles.navlinkActive : styles.navlink
            }
            href="/bookmarks"
          >
            bookmarks
          </Link>          
        </div> */}
        {/* CTA */}
        <div
          className="cta justify-content-end gap-3"
          style={{ color: "#cf8291" }}
        >
          {/* Language */}
          {/* <div className="flex gap-1 align-items-center">
            <Dropdown
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.value)}
              options={countries}
              optionLabel="languages"
              placeholder={selectedCountryTemplate}
              valueTemplate={selectedCountryTemplate}
              itemTemplate={countryOptionTemplate}
              className="w-6rem border-none"
            />
          </div> */}          
          <Link href="#contact" className="align-self-center">
            <Button
              icon="pi pi-envelope"              
              aria-label="contact"
              label="get in touch"
              className="px-4"
              style={{ backgroundColor: "#cf8291", border: "none" }}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
