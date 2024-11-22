import Image from "next/image";
import Link from "next/link";

import { Button } from "primereact/button";

import styles from "./page.module.css";

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
    title: "Family Brew: Crafting a Brand with Love",
    pic: "intakahve",
    year: "2023",
    country: "Indonesia",
    company: "Intakahve",
    wd: false,
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

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <div
        className="hero flex flex-column justify-content-center sm:col-12 sm:px-2 md:col-10 mx-auto mb-5 -mt-6 md:mt-0"
        style={{ height: "800px" }}
      >
        {/* row 1 */}
        <div className="col-12 flex flex-column md:flex-row justify-content-between align-items-center mb-0 -mt-8 md:mt-0">
          <h1 className="font text-6xl md:text-7xl my-2" style={{ color: "#47585C" }}>
            Hi,
          </h1>
          <Image
            src="/pictures/hero/Poster-1.png"
            alt="Hero Poster 1"
            width={502}
            height={84}
            priority
          />
        </div>
        {/* row 2 */}
        <div className="col-12 flex flex-column md:flex-row justify-content-between align-items-center my-0">
          <h1 className="font text-6xl md:text-8xl my-2">
            {`It's me `}
            <span style={{ color: "#cf8291" }}>Khairi</span>
          </h1>
          <Image
            src="/pictures/hero/Poster-2.png"
            alt="Hero Poster 2"
            width={502}
            height={84}
            priority
          />
        </div>
        {/* row 3 */}
        <div className="col-12 flex flex-column md:flex-row justify-content-between align-items-center my-0">
          <div className={styles.animated}>
            <h1 className="font text-6xl md:text-7xl mt-2 mb-4 block md:flex text-center md:text-left gap-3">
              <p className="m-0">{`I'm a`}</p>
              <span className="text-5xl md:text-7xl"></span>
            </h1>
          </div>
          <Image
            src="/pictures/hero/Poster-3.png"
            alt="Hero Poster 3"
            width={502}
            height={84}
            priority
          />
        </div>
      </div>
      {/* GREETINGS */}
      <div
        className="greetings flex bg-gray-700 py-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%23fff' /%3E%3Crect x='50%' width='1' height='100%' fill='rgb(203 213 225)' /%3E%3Crect y='50%' width='100%' height='1' fill='rgb(203 213 225)' /%3E%3C/svg%3E%0A"`,
        }}
      >
        <div className="flex flex-wrap col-11 md:col-10 mx-auto justify-content-center align-items-center py-5 px-0 m-0">
          {/* photo */}
          <div className="col-11 md:col-5 flex justify-content-center">
            <Image
              src="/pictures/greetings.png"
              alt="greetings"
              width={400}
              height={460}
              priority
              className="hidden md:inline"
            />
            <Image
              src="/pictures/greetings.png"
              alt="greetings"
              width={200}
              height={230}
              priority
              className="md:hidden inline"
            />
          </div>
          {/* text */}
          <div className={`${styles.greetings} col-12 md:col-5`}>
            <h1 className="my-3">Greetings!</h1>
            <p>{`Hi, Name's Khairi`}</p>
            <p>
              An Experienced{" "}
              <span style={{ color: "#4D80E6", fontWeight: "bold" }}>
                Web Developer
              </span>{" "}
              and{" "}
              <span style={{ color: "#cf8291", fontWeight: "bold" }}>
                Graphic Designer
              </span>{" "}
              with a Passion for Japanese Culture. With four years of combined
              experience in web development and graphic design, I specialize in
              frontend web development and UI/UX design for website interfaces.
            </p>
            <p>
              As a{" "}
              <span style={{ color: "#4D80E6", fontWeight: "bold" }}>
                Web Developer
              </span>
              ,{" "}
              {`I've spent two years freelancing and two years in a professional capacity, focusing on creating visually appealing and user-friendly websites.`}
            </p>
            <p>
              and as a{" "}
              <span style={{ color: "#cf8291", fontWeight: "bold" }}>
                Graphic Designer,
              </span>{" "}
              {`I've contributed to numerous projects from research to development process, in form of brand identity and user interface`}
            </p>
            <p>
              {`Beyond my professional endeavors, I'm passionate about Japanese culture, which serves as a constant source of inspiration in my work. This passion drives me to continually enhance my design skills, particularly in user experience design. I'm excited to bring my experience and enthusiasm to projects that resonate with global audiences.`}
            </p>
          </div>
        </div>
      </div>
      {/* FEATURED WORKS */}
      <div className="featuredWorks flex pt-5 pb-0">
        <div className="col-12 md:col-10 px-0 mx-auto flex flex-wrap justify-content-between">
          {/* ~ sub-title */}
          <div className="subtitle col-12 md:col-4 flex flex-column px-2">
            <h2 className="text-5xl">Featured Works</h2>
            <p
              className="my-0 line-height-3 md:line-height-4"
              style={{
                color: "#2B2B2B",
                letterSpacing: ".5px",
              }}
            >
              {`Embark on a visual journey through my portfolio, where you'll find a fusion of stunning design and seamless functionality.`}
            </p>
          </div>
          {/* ~ cards DESKTOP */}
          <div className="hidden md:flex flex-wrap col-7 p-0">
            {/* card 1 */}
            {works.map((work) => {
              return (
                <div
                  key={work.title}
                  className={`${styles.levitate} flex col-6 py-3 pr-0 pl-3`}
                  style={{ color: "#2b2b2b", textDecoration: "none" }}
                >
                  <div
                    className="card flex flex-1 flex-column"
                    style={{
                      boxShadow: "0px 24px 64px 0px rgba(0,0,0,0.15)",
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
                            style={{ fontSize: "1.5rem" }}
                          ></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* ~ cards MOBILE */}
          <div className={`flex md:hidden overflow-x-auto col-12 p-0 gap-3`}>
            <div className={`${styles.workScroll} flex md:hidden col-12 p-2 gap-3`}>
              {/* card 1 */}
              {works.map((work) => {
                return (
                  <div
                    key={work.title}
                    className={`${styles.levitate} flex col-12 p-0`}
                    style={{ color: "#2b2b2b", textDecoration: "none", backgroundColor:"white" }}
                  >
                    <div
                      className="card flex flex-1 flex-column"       
                      style={{
                        border: "1px solid #e8e8e8",
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
                              style={{ fontSize: "1.5rem",color: "#4D80E6" }}
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
        </div>
      </div>
      {/* CAREER JOURNEY */}
      <div
        className="careerJourney flex py-4 -mt-8"
        style={{ backgroundColor: "#dde8ff" }}
      >
        <div className="flex flex-column col-12 md:col-10 px-0 py-8 mx-auto">
          <div className="px-4 md:px-0">
            <h2 className="text-5xl my-2">Career Journey</h2>
            <p
              className="my-1 line-height-3"
              style={{
                color: "#2B2B2B",
                letterSpacing: ".8px",
              }}
            >
              {`My journey as a Web Developer and Graphic Designer has been fueled by a passion for innovation and creativity. With 4 years of experience, I've honed my skills in Web Development and Design and have successfully delivered a wide range of projects, from simple landing pages to complex web applications, from creating logo to creating a whole set of brand identity`}
            </p>
          </div>
          {/* ~ card DESKTOP */}
          <div className="hidden md:flex my-6 justify-content-around gap-3 p-5 border-1 border-gray-300">
            {/* Career card 1 */}
            <div
              className={`${styles.careerCard} flex flex-column p-5 gap-3 bg-white`}
              style={{ width: "100%" }}
            >
              <div
                className="header flex gap-3 pb-2 align-content-center w-full"
                style={{ borderBottom: "2px solid lightgray" }}
              >
                <Image
                  alt="career company logo"
                  src={`/pictures/career/jdt.svg`}
                  width={80}
                  height={80}
                />
                <div className="flex flex-column justify-content-center gap-1">
                  <strong>Web Developer & Web Designer</strong>
                  <span>{`Japan Dream Tour Co., Ltd (Japan)`}</span>
                  <small className="font-italic text-blue-500">
                    2021 ~ Present
                  </small>
                </div>
              </div>
              <div className="body flex">
                <small className="line-height-3">{`Having started my career as an intern, I was immersed in the intricacies of the Japanese travel industry. This experience provided me with a solid foundation in understanding the specific needs and preferences of travelers. From designing captivating landing pages to developing comprehensive client and admin portals, I've actively contributed to the creation of robust travel agency websites.`}</small>
              </div>
            </div>
            {/* Career card 2 */}
            <div
              className={`${styles.careerCard} flex flex-column p-5 gap-3 bg-white`}
              style={{ width: "100%" }}
            >
              <div
                className="header flex gap-3 pb-2 align-content-center w-full"
                style={{ borderBottom: "2px solid lightgray" }}
              >
                <Image
                  alt="career company logo"
                  src={`/pictures/career/trima.svg`}
                  width={80}
                  height={80}
                />
                <div className="flex flex-column justify-content-center gap-1">
                  <strong>Web Developer & Web Designer</strong>
                  <span>{`TRiMA Korea (South Korea)`}</span>
                  <small className="font-italic text-blue-500">
                    2022 ~ Present
                  </small>
                </div>
              </div>
              <div className="body flex">
                <small className="line-height-3">{`In 2022, I transitioned to a specialized role within the company, focusing on the South Korean travel market. In this role, I expanded my responsibilities to include a wider range of creative tasks, such as designing logos, business cards, and promotional materials. This experience allowed me to further develop my design skills and contribute to the overall branding and marketing efforts of the company.`}</small>
              </div>
            </div>
          </div>
          {/* ~ card MOBILE */}
          <div className="flex flex-column md:hidden my-6 justify-content-around gap-4 p-5 border-1 border-gray-300">
            {/* Career card 1 */}
            <div
              className={`${styles.careerCard} flex flex-column p-3 gap-3 bg-white`}
              style={{ width: "100%" }}
            >
              <div
                className="header flex gap-3 pb-2 align-content-center w-full"
                style={{ borderBottom: "2px solid lightgray" }}
              >
                <Image
                  alt="career company logo"
                  src={`/pictures/career/jdt.svg`}
                  width={80}
                  height={80}
                />
                <div className="flex flex-column justify-content-center gap-1">
                  <strong>Web Developer & Web Designer</strong>
                  <span>{`Japan Dream Tour Co., Ltd (Japan)`}</span>
                  <small className="font-italic text-blue-500">
                    2021 ~ Present
                  </small>
                </div>
              </div>
              <div className="body flex">
                <small className="line-height-3">{`Having started my career as an intern, I was immersed in the intricacies of the Japanese travel industry. This experience provided me with a solid foundation in understanding the specific needs and preferences of travelers. From designing captivating landing pages to developing comprehensive client and admin portals, I've actively contributed to the creation of robust travel agency websites.`}</small>
              </div>
            </div>
            {/* Career card 2 */}
            <div
              className={`${styles.careerCard} flex flex-column p-3 gap-3 bg-white`}
              style={{ width: "100%" }}
            >
              <div
                className="header flex gap-3 pb-2 align-content-center w-full"
                style={{ borderBottom: "2px solid lightgray" }}
              >
                <Image
                  alt="career company logo"
                  src={`/pictures/career/trima.svg`}
                  width={80}
                  height={80}
                />
                <div className="flex flex-column justify-content-center gap-1">
                  <strong>Web Developer & Web Designer</strong>
                  <span>{`TRiMA Korea (South Korea)`}</span>
                  <small className="font-italic text-blue-500">
                    2022 ~ Present
                  </small>
                </div>
              </div>
              <div className="body flex">
                <small className="line-height-3">{`In 2022, I transitioned to a specialized role within the company, focusing on the South Korean travel market. In this role, I expanded my responsibilities to include a wider range of creative tasks, such as designing logos, business cards, and promotional materials. This experience allowed me to further develop my design skills and contribute to the overall branding and marketing efforts of the company.`}</small>
              </div>
            </div>
          </div>
          <div className="flex flex-column md:flex-row align-items-center gap-4 md:gap-2 px-4 md:px-0">
            <span className="text-center md:text-left">{`Don't forget to take a peek at my Resume for more details here :`}</span>
            <Link
              href={
                "https://drive.google.com/file/d/1BBxH8D2g6VRhgxzqVuZI2ty6jmN77OmF/view?usp=sharing"
              }
              target="_blank"
            >
              <Button
                label="Khairi's CV & Resume"
                icon="pi pi-info-circle"
                raised
                className="border-none py-3 px-4 border-noround"
                style={{
                  backgroundColor: "#4D80E6",
                  boxShadow: "0px 24px 64px 0px rgba(0,0,0,0.15)",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
      {/* GET IN TOUCH! */}
      <div className="flex" id="contact">
        <div
          className="col-10 flex flex-column md:flex-row p-2 md:p-4 mx-auto my-8"
          style={{
            boxShadow: "0px 24px 64px 0px rgba(0,0,0,0.15)",
            backgroundColor: "#FCE6EA",
          }}
        >
          <div className="col-12 md:col-9 flex flex-column">
            <h2 className="text-3xl md:text-5xl my-2">{`Found something interesting? Let's Get in Touch!`}</h2>
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
            <Link href={"https://www.linkedin.com/in/khairi-u28/"} target="_blank">
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
            <Link href={"https://www.instagram.com/kare_to_katsu/"} target="_blank">
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
    </main>
  );
}
