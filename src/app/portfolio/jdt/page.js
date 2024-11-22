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
    title: "Family Brew: Crafting a Brand with Love",
    pic: "intakahve",
    year: "2023",
    country: "Indonesia",
    company: "Intakahve",
    wd: false,
    gd: true,
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
        <div className={`${styles.parallaxSection} ${styles.parallaxJDT}`}>
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
                    <span>{`Japan Dream Tour Co., Ltd. (Japan)`}</span>
                    <small className="font-italic text-blue-500">2021 ~ Present</small>
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
                  <h5
                  className="py-1 px-2 my-0"
                  style={{
                    backgroundColor: "#D0E0FF",
                    color: "#4D80E6",
                  }}
                >
                  Web Dev.
                </h5>
                </div>
              </div>
              {/* project output */}
              <div className="flex flex-column gap-3">
                <h4 className="my-0">Output:</h4>
                <p className="my-0">{`Website UI Design, Landing page, Ecommerce platform, Digital graphic assets`}</p>
              </div>
              {/* <Divider className="border-1 my-1" />
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
              </Link> */}
            </div>
            <h2 className="text-5xl">{`Dive into Japanese Travel Website Development`}</h2>
            <p
              className="my-1 line-height-3"
              style={{
                color: "#2B2B2B",
                letterSpacing: ".8px",
              }}
            >
              {`My journey into the realm of web development began as an intern during my fourth year of college. For three months, I immersed myself in the intricacies of web design and development, gaining hands-on experience and valuable insights. It was during this internship that I was fortunate enough to be offered a full-time position in August 2021.`}
            </p>
            <h5 className="text-xl">{`A Digital Odyssey: From Intern to Web Developer`}</h5>
            <div className="flex flex-wrap align-items-center justify-content-around my-8">
              <Image
                alt="article picture 1"
                src={`/pictures/portfolio/jdt/reference4.png`}
                width={480}
                height={400}
              />
            </div>
            <p
              className="my-1 line-height-3"
              style={{
                color: "#2B2B2B",
                letterSpacing: ".8px",
              }}
            >
              {`As a newly hired web developer, I embarked on a deep dive into the world of Japanese tourism. I dedicated myself to learning about the diverse destinations offered by the company, from bustling cityscapes to serene countryside retreats. This knowledge was crucial in understanding the specific needs and preferences of both the company and its customers.`}
            </p>
            <h5 className="text-xl">{`Understanding the Client's Needs`}</h5>
            <div className="flex flex-column md:flex-row align-items-center justify-content-around my-8">
              <div className="flex flex-column gap-0">
                <Image
                  alt="article picture 1"
                  src={`/pictures/portfolio/jdt/reference1.png`}
                  width={360}
                  height={480}
                />
                <small className="font-italic">Initial wireframe</small>
              </div>
              <div className="flex flex-column gap-2">
                <Image
                  alt="article picture 1"
                  src={`/pictures/portfolio/jdt/reference2.png`}
                  width={240}
                  height={600}
                  style={{ boxShadow: "0px 24px 64px 0px rgba(0,0,0,0.15)" }}
                />
                <small className="font-italic">
                  First Landing page UI design
                </small>
              </div>
            </div>
            <p
              className="my-1 line-height-3"
              style={{
                color: "#2B2B2B",
                letterSpacing: ".8px",
              }}
            >
              {`As a newly hired web developer, I dedicated myself to understanding the diverse destinations offered by the company and the specific needs of both the company and its customers. By gaining a deep understanding of the target audience and the company's goals, I was able to tailor the website to their specific requirements.`}
            </p>
            <p
              className="my-1 line-height-3"
              style={{
                color: "#2B2B2B",
                letterSpacing: ".8px",
              }}
            >
              {`With a solid understanding of the client's needs, I embarked on the design and development of the company's website. I began by crafting a visually appealing and user-friendly landing page, ensuring that it effectively communicated the company's brand identity. Using Vue.js, I meticulously transformed the design into a functional and interactive website.`}
            </p>
            <h5 className="text-xl">{`Evolving the Digital Presence`}</h5>
            <iframe
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                boxShadow: "0px 24px 64px 0px rgba(0,0,0,0.15)",
              }}
              className="mb-3"
              width="100%"
              height="550"
              src="https://embed.figma.com/proto/ElYnSZPcpd7Mb55biRUL6j/Japan-Dream-Tour?content-scaling=fixed&kind=proto&node-id=2226-2087&page-id=2226%3A2086&scaling=scale-down-width&embed-host=share"
              allowfullscreen
            ></iframe>
            <p
              className="my-1 line-height-3"
              style={{
                color: "#2B2B2B",
                letterSpacing: ".8px",
              }}
            >
              {`Over the next year and a half, I was actively involved in several website revamps, continuously refining the design and functionality to meet evolving trends and user expectations. I also expanded my role to include the development of the company's client-facing and administrative websites, gaining a comprehensive understanding of full-stack development.`}
            </p>
            <h5 className="text-xl">{`Beyond the Web: A Multifaceted Role`}</h5>
            <div className="flex flex-column md:flex-row align-items-center justify-content-around my-8">
              <div className="flex flex-column gap-0">
                <Image
                  alt="article picture 1"
                  src={`/pictures/portfolio/jdt/reference3.png`}
                  width={360}
                  height={480}
                />
                <small className="font-italic">Promotional Posters</small>
              </div>
            </div>
            <iframe
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                boxShadow: "0px 24px 64px 0px rgba(0,0,0,0.15)",
              }}
              className="mb-3"
              src="https://drive.google.com/file/d/1K8xr7rjiswlMKnUuTMjk8dCaEcv9Kzlz/preview"
              width="100%"
              height="520"
              allowFullScreen
            ></iframe>
            <p
              className="my-1 line-height-3"
              style={{
                color: "#2B2B2B",
                letterSpacing: ".8px",
              }}
            >
              {`In addition to my core web development responsibilities, I had the opportunity to contribute to the creation of the company's digital assets. I collaborated with the marketing team to design promotional videos and graphic posters, demonstrating my versatility as a digital creator.`}
            </p>
            <p
              className="my-1 line-height-3"
              style={{
                color: "#2B2B2B",
                letterSpacing: ".8px",
              }}
            >
              {`This multifaceted experience has equipped me with a strong foundation in web development and design. I am excited to continue learning and growing as a web developer, applying my skills to create innovative and impactful digital solutions.`}
            </p>
          </article>
          <Divider className="border-1 my-8" />
          {/* more projects */}
          <section className="pt-4">
            <h3 className="my-0 px-4 md:px-8" style={{ color: "#4D80E6" }}>
              More projects:
            </h3>
            {/* card container */}
            <div
              className={`flex overflow-x-auto col-12 px-2 pb-5 md:pb-8 pt-4 gap-3`}
            >
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
              "url(/pictures/portfolio/jdt/pattern.png) repeat, linear-gradient(180deg, rgba(242,135,183,1) 28%, rgba(114,71,90,1) 78%)",
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
                  src={`/pictures/career/jdt.svg`}
                  width={80}
                  height={80}
                />
                <div className="flex flex-column justify-content-center gap-1">
                  <span>{`Japan Dream Tour Co., Ltd. (Japan)`}</span>
                  <small className="font-italic text-blue-500">
                    2021 ~ Present
                  </small>
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
                <h5
                  className="py-1 px-2 my-0"
                  style={{
                    backgroundColor: "#D0E0FF",
                    color: "#4D80E6",
                  }}
                >
                  Web Dev.
                </h5>
              </div>
            </div>
            {/* project output */}
            <div className="flex flex-column gap-3">
              <h4 className="my-0">Output:</h4>
              <p className="my-0">{`Website UI Design, Landing page, Ecommerce platform, Digital graphic assets`}</p>
            </div>
            {/* <Divider className="border-1 my-1" />
            <Link href={"https://www.tokopedia.com/intakahve"} target="_blank">
              <Button
                style={{ backgroundColor: "#4D80E6" }}
                label="Visit"
                icon="pi pi-link"
                className="w-full"
              />
            </Link> */}
          </div>
        </aside>
      </div>
    </main>
  );
}
