import Image from "next/image";
import Link from "next/link";

import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

import styles from "../portfolio.module.css";

const works = [
  {
    title: "A Digital Feast for the Health-Conscious",
    pic: "musprep",
    year: "2021",
    country: "Indonesia",
    company: "MusclePrepper",
    wd: true,
    gd: false,
  },
  {
    title: "Dive into Japanese Travel Website Development",
    pic: "jdt",
    year: "2022-2024",
    country: "Japan",
    company: "Japan Dream Tour Co., Ltd.",
    wd: true,
    gd: false,
  },
  {
    title: "Fulfilling the Travel and Accomodation Needs in South Korea",
    pic: "trima",
    year: "2022-2023",
    country: "South Korea",
    company: "TRiMA Korea.",
    wd: true,
    gd: true,
  },
  {
    title: "Savor the Halal: A Brand Identity for Quality Meat",
    pic: "wow",
    year: "2024",
    country: "Indonesia",
    company: "WOW Toko Daging Halal",
    wd: false,
    gd: true,
  },
];

export default function PortfolioDetail() {
  return (
    <main className="overflow-hidden">
      {/* COVER */}
      <div>
        {/* Parallax Section */}
        <div className={`${styles.parallaxSection} ${styles.parallaxIntakahve}`}>
          {/* <h1 className={styles.parallaxText}>Welcome to Parallax</h1> */}
        </div>
      </div>
      {/* MAIN */}
      <div className="flex">
        {/* ~Article */}
        <div
          className="col-12 md:col-8 flex flex-column pt-4 md:pt-8 pb-0 px-0"
          style={{ boxShadow: "0px 24px 64px 0px rgba(0,0,0,0.15)" }}
        >
          <article className="px-4 md:px-8">
            {/* Client card */}
            <div
              className={`flex md:hidden flex-column p-5 gap-3 bg-white -mt-8 gap-4`}
              style={{
                width: "100%",
                boxShadow: "0px 24px 64px 0px rgba(0,0,0,0.25)",
              }}
            >
              {/* client name */}
              <div className="flex flex-column gap-3">
                <h4 className="my-0">Client/Company Info:</h4>
                <div className="header flex gap-3 pb-2 align-content-center w-full">
                  <Image
                    alt="career company logo"
                    src={`/pictures/career/intakahve.svg`}
                    width={80}
                    height={80}
                  />
                  <div className="flex flex-column justify-content-center gap-1">
                    <span>{`Intakahve (Indonesia)`}</span>
                    <small className="font-italic text-blue-500">2023</small>
                  </div>
                </div>
              </div>
              {/* project category */}
              <div className="flex flex-column gap-3">
                <h4 className="my-0">Project category:</h4>
                <div className="flex gap-3">
                  <h5
                    className="py-1 px-2 my-0"
                    style={{
                      backgroundColor: "#F7D7DD",
                      color: "#cf8291",
                    }}
                  >
                    Graphic Design
                  </h5>
                  {/* <h5
                  className="py-1 px-2 my-0"
                  style={{
                    backgroundColor: "#D0E0FF",
                    color: "#4D80E6",
                  }}
                >
                  Web Dev.
                </h5> */}
                </div>
              </div>
              {/* project output */}
              <div className="flex flex-column gap-3">
                <h4 className="my-0">Output:</h4>
                <p className="my-0">{`Logo, Brand Identity, Digital Assets (For Marketplace)`}</p>
              </div>
              <Divider className="border-1 my-1" />
              <Link
                href={"https://www.tokopedia.com/intakahve"}
                target="_blank"
              >
                <Button
                  style={{ backgroundColor: "#4D80E6" }}
                  label="Visit"
                  icon="pi pi-link"
                  className="w-full"
                />
              </Link>
            </div>
            <h2 className="text-5xl">{`Family Brew: Crafting a Brand with Love`}</h2>
            <p
              className="my-1 line-height-3"
              style={{
                color: "#2B2B2B",
                letterSpacing: ".8px",
              }}
            >
              {`As a freelance designer, I was tasked with creating a visual identity for a family-owned coffee shop. The challenge was to capture the essence of a family business while incorporating the owner's personal passion for Japanese culture.`}
            </p>
            <h5 className="text-xl">{`A Harmonious Blend of Family and Culture`}</h5>
            <div className="flex flex-wrap align-items-center justify-content-around my-8">
              <Image
                alt="article picture 1"
                src={`/pictures/portfolio/intakahve/reference1.png`}
                width={360}
                height={240}
              />
              <Image
                alt="article picture 1"
                src={`/pictures/career/intakahve.svg`}
                width={240}
                height={240}
              />
            </div>
            <p
              className="my-1 line-height-3"
              style={{
                color: "#2B2B2B",
                letterSpacing: ".8px",
              }}
            >
              {`The logo design was inspired by the intricate interplay of family dynamics and cultural influences. The owner, a parent of three, desired a symbol that reflected the unity and diversity of their family. Drawing inspiration from the elegant curves and flowing lines of Ukiyo-e, a traditional Japanese art form, I crafted a circular, wave-like logo. This design not only conveyed a sense of harmony and movement but also subtly alluded to the three children, represented by the three distinct colors within the logo. These colors were carefully chosen to symbolize the harmonious blend of water, coffee, and the unique essence of the family business.`}
            </p>
            <h5 className="text-xl">{`A Digital Identity, Rooted in Tradition`}</h5>
            <div className="flex flex-column align-items-center justify-content-around my-8">
              <Image
                alt="article picture 1"
                src={`/pictures/portfolio/intakahve/reference2.png`}
                width={880}
                height={420}
              />
              <Image
                alt="article picture 1"
                src={`/pictures/portfolio/intakahve/reference3.png`}
                width={720}
                height={720}
              />
            </div>
            <p
              className="my-1 line-height-3"
              style={{
                color: "#2B2B2B",
                letterSpacing: ".8px",
              }}
            >
              {`To extend the brand's visual identity beyond the logo, I developed a suite of digital assets that were consistent with the brand's aesthetic. This included social media graphics, website banners, and marketing materials. By maintaining a cohesive style guide, I ensured that the brand's message was clear and memorable across all platforms. The signature shapes, colors, and typography used in the logo were carried through to these digital assets, creating a unified and recognizable brand identity.

This project was a fulfilling endeavor that allowed me to combine creative design with strategic thinking. By understanding the client's vision and drawing inspiration from their family's story and cultural interests, I was able to create a brand identity that truly resonated with their target audience.`}
            </p>
          </article>
          <Divider className="border-1 my-8" />
          {/* more projects */}
          <section className="pt-4">
            <h3 className="my-0 px-4 md:px-8" style={{ color: "#4D80E6" }}>
              More projects:
            </h3>
            {/* card container */}
            <div className={`flex overflow-x-auto col-12 px-2 pb-5 md:pb-8 pt-4 gap-3`}>
              {/* cards */}
              <div
                className={`flex md:flex-wrap justify-content-around col-12 p-0 gap-3`}
              >
                {/* card 1 */}
                {works.map((work) => {
                  return (
                    <div
                      key={work.title}
                      className={`${styles.levitate} flex col-12 md:col-5 p-0`}
                      style={{
                        color: "#2b2b2b",
                        textDecoration: "none",
                        backgroundColor: "white",
                        boxShadow: "0px 24px 16px 0px rgba(0,0,0,0.15)",
                      }}
                    >
                      <div
                        className="card flex flex-1 flex-column"
                        style={{
                          border: "1px solid gray",
                        }}
                      >
                        {/* card / pic */}
                        <div
                          className="pic relative flex"
                          style={{ height: "240px", width: "100%" }}
                        >
                          <Image
                            alt="Hero Image"
                            src={`/pictures/works/${work.pic}.png`}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        {/* card / desc & CTA */}
                        <div
                          className="flex align-content-center p-2 bg-white"
                          style={{ borderTop: "1px solid lightgrey" }}
                        >
                          <div className="col-10 flex flex-column gap-1">
                            <p className="mx-0 mt-0 mb-2 capitalize font-bold text-md">
                              {work.title}
                            </p>
                            {/* company & year */}
                            <div className="flex text-blue-500 flex-row align-items-center my-1 gap-1">
                              <small>{work.company}</small>
                              <small>・</small>
                              <div className="rating flex gap-2">
                                <small className="font-bold gap-1 flex align-items-center">
                                  {work.country}
                                </small>
                                <small>{`(${work.year})`}</small>
                              </div>
                            </div>
                            {/* work tag */}
                            <div className="flex gap-2">
                              {work.gd && (
                                <small
                                  className="py-1 px-2"
                                  style={{
                                    backgroundColor: "#F7D7DD",
                                    color: "#cf8291",
                                  }}
                                >
                                  Graphic Design
                                </small>
                              )}
                              {work.wd && (
                                <small
                                  className="py-1 px-2"
                                  style={{
                                    backgroundColor: "#D0E0FF",
                                    color: "#4D80E6",
                                  }}
                                >
                                  Web Dev.
                                </small>
                              )}
                            </div>
                          </div>
                          <div className="col-2 flex align-items-center justify-content-end">
                            <Link href={`/portfolio/${work.pic}`}>
                              <i
                                className="pi pi-arrow-right"
                                style={{ fontSize: "1.5rem", color: "#4D80E6" }}
                              ></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          {/* GET IN TOUCH! */}
          <div className="flex" id="contact">
            <div
              className="col-10 flex flex-column md:flex-row p-2 md:p-4 mx-auto my-8"
              style={{
                boxShadow: "0px 24px 24px 0px rgba(0,0,0,0.15)",
                backgroundColor: "#FCE6EA",
              }}
            >
              <div className="col-12 md:col-9 flex flex-column">
                <h2 className="text-xl md:text-3xl my-2">{`Found something interesting? Let's Get in Touch!`}</h2>
                <p
                  className="my-1 line-height-3"
                  style={{
                    color: "#2B2B2B",
                    letterSpacing: ".5px",
                  }}
                >
                  {`Want to discuss a potential project or just chat about design and development? Feel free to reach out!`}
                </p>
              </div>
              <div className="col-12 md:col-3 flex justify-content-center align-items-center align-self-center gap-4">
                <Link
                  href={"https://www.linkedin.com/in/khairi-u28/"}
                  target="_blank"
                >
                  <Button
                    icon="pi pi-linkedin"
                    aria-label="Filter"
                    rounded
                    raised
                    size="large"
                    className="p-4"
                    style={{
                      backgroundColor: "#C099A0",
                      border: "none",
                      boxShadow: "0px 24px 64px 0px rgba(0,0,0,0.15)",
                    }}
                  />
                </Link>
                <Link
                  href={"https://www.instagram.com/kare_to_katsu/"}
                  target="_blank"
                >
                  <Button
                    icon="pi pi-instagram"
                    aria-label="Filter"
                    rounded
                    raised
                    size="large"
                    className="p-4"
                    style={{
                      backgroundColor: "#C099A0",
                      border: "none",
                      boxShadow: "0px 24px 64px 0px rgba(0,0,0,0.15)",
                    }}
                  />
                </Link>
                <Link href={"mailto:khairi.u28@gmail.com"} target="_blank">
                  <Button
                    icon="pi pi-envelope"
                    aria-label="Filter"
                    rounded
                    raised
                    size="large"
                    className="p-4"
                    style={{
                      backgroundColor: "#C099A0",
                      border: "none",
                      boxShadow: "0px 24px 64px 0px rgba(0,0,0,0.15)",
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* ~aside */}
        <aside
          className="col-4 relative px-8 pt-0 pb-4"
          style={{
            background:
              "url(/pictures/portfolio/intakahve/pattern.png) repeat, linear-gradient(180deg, rgba(52,106,132,1) 28%, rgba(193,160,109,1) 78%)",
          }}
        >
          {/* Client card */}
          <div
            className={`flex flex-column p-5 gap-3 bg-white sticky top-0 -mt-8 gap-4`}
            style={{
              width: "100%",
              boxShadow: "0px 24px 64px 0px rgba(0,0,0,0.45)",
            }}
          >
            {/* client name */}
            <div className="flex flex-column gap-3">
              <h4 className="my-0">Client/Company Info:</h4>
              <div className="header flex gap-3 pb-2 align-content-center w-full">
                <Image
                  alt="career company logo"
                  src={`/pictures/career/intakahve.svg`}
                  width={80}
                  height={80}
                />
                <div className="flex flex-column justify-content-center gap-1">
                  <span>{`Intakahve (Indonesia)`}</span>
                  <small className="font-italic text-blue-500">2023</small>
                </div>
              </div>
            </div>
            {/* project category */}
            <div className="flex flex-column gap-3">
              <h4 className="my-0">Project category:</h4>
              <div className="flex gap-3">
                <h5
                  className="py-1 px-2 my-0"
                  style={{
                    backgroundColor: "#F7D7DD",
                    color: "#cf8291",
                  }}
                >
                  Graphic Design
                </h5>
                {/* <h5
                  className="py-1 px-2 my-0"
                  style={{
                    backgroundColor: "#D0E0FF",
                    color: "#4D80E6",
                  }}
                >
                  Web Dev.
                </h5> */}
              </div>
            </div>
            {/* project output */}
            <div className="flex flex-column gap-3">
              <h4 className="my-0">Output:</h4>
              <p className="my-0">{`Logo, Brand Identity, Digital Assets (For Marketplace)`}</p>
            </div>
            <Divider className="border-1 my-1" />
            <Link href={"https://www.tokopedia.com/intakahve"} target="_blank">
              <Button
                style={{ backgroundColor: "#4D80E6" }}
                label="Visit"
                icon="pi pi-link"
                className="w-full"
              />
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
