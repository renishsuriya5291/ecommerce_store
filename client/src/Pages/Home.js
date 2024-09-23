import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Button from "../Components/Button";
import { ClipboardCheck, PiggyBank, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import CategorySlider from "../Components/CategorySlider";

export default function Home() {
  const videoRef = useRef(null);
  const controls = useAnimation();
  const contentControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const videoTop = videoRef.current.offsetTop;
      const windowScroll = window.scrollY - 600;

      if (windowScroll < videoTop) {
        controls.start({
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        });
        contentControls.start({
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        });
      } else {
        controls.start({
          y: 100,
          opacity: 0,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        });
        contentControls.start({
          x: 100,
          opacity: 0,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-white">
        {/* first section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="max-w-xl text-center sm:text-left">
                <h2 className="text-3xl   sm:text-6xl font-semibold mb-6 flex flex-col">
                  <span>How work</span> <span>should work</span>
                </h2>
                <p className="text-xl sm:text-2xl md:text-3xl mb-8">
                  Forget the old rules. You can have the best people. Right now.
                  Right here.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                  <Button
                    size="lg"
                    variant="black"
                    className="w-full sm:w-auto flex justify-center"
                  >
                    Find Talent
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="w-full sm:w-auto flex justify-center"
                  >
                    Find Work
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex flex-shrink-0">
                <img
                  src="/img-f.jpg"
                  alt="photo"
                  className="w-full h-auto object-cover max-w-sm  lg:max-w-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* second section */}
        <section className="pb-16 max-sm:px-2 bg-white overflow-hidden">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Video Section */}
              <motion.div
                ref={videoRef}
                variants={controls}
                initial={{ y: 100, opacity: 0 }}
                animate={controls}
                className="w-full md:w-1/2  flex justify-center items-center"
              >
                <div className="rounded-lg overflow-hidden shadow-xl w-full">
                  <video
                    className="w-full h-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/placeholder.svg?height=400&width=600"
                  >
                    <source src="/video-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>

              {/* Right side content */}
              <motion.div
                variants={contentControls}
                initial={{ x: 100, opacity: 0 }}
                animate={contentControls}
                className="w-full md:w-1/2 flex flex-col justify-center"
              >
                <h2 className="text-4xl mb-6">Up your work game, it's easy</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ClipboardCheck className="w-6 h-6 text-black mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">No cost to join</h3>
                      <p className="text-gray-600 ">
                        Register and browse talent profiles, explore projects,
                        or even book a consultation.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Briefcase className="w-6 h-6 text-black mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Post a job and hire top talent
                      </h3>
                      <p className="text-gray-600 ">
                        Finding talent doesn't have to be a chore. Post a job or
                        we can search for you!
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <PiggyBank className="w-6 h-6 text-black mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Work with the best—without breaking the bank
                      </h3>
                      <p className="text-gray-600">
                        Upwork makes it affordable to up your work and take
                        advantage of low transaction rates.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                  <Link to="/signup" className="w-full md:w-auto">
                    <Button
                      variant="ghost"
                      className="w-full md:w-auto flex justify-center"
                    >
                      Sign up for free
                    </Button>
                  </Link>
                  <Link to="/learn-how-to-hire" className="w-full md:w-auto">
                    <Button
                      variant="black"
                      className="w-full md:w-auto flex justify-center"
                    >
                      Learn how to hire
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* third section */}
        <CategorySlider />
        {/* fourth section */}
        <section className="overflow-hidden">
          <div className="container mx-auto px-4 flex flex-col md:flex-row py-16">
            <div className="flex flex-col justify-center bg-black  sm:rounded-l-md p-10 md:w-1/2">
              <h1 className="text-2xl sm:text-5xl font-semibold text-white mb-4 flex flex-col gap-2">
                <span>This is how</span>
                <span className="text-gray-400">good companies</span>
                <span className="text-gray-400">find good company.</span>
              </h1>
              <p className="text-sm sm:text-md text-white mb-6">
                Access the top 1% of talent on Workmate, and a full suite of
                hybrid workforce management tools. This is how innovation works
                now.
              </p>
              <ul className="text-md text-white">
                <li className="flex items-center mb-2 text-sm sm:text-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 4.875a.625.625 0 01.625.625v11.25c0 .344.275.625.625.625H18.375a.625.625 0 01.625-.625V5.5a.625.625 0 01.625-.625H21a2.25 2.25 0 012.25 2.25v11.25a2.25 2.25 0 01-2.25 2.25H5.5a2.25 2.25 0 01-2.25-2.25V7.5a.625.625 0 01.625-.625h5.625z"
                    />
                  </svg>
                  Access expert talent to fill your skill gaps
                </li>
                <li className="flex items-center mb-2 text-sm sm:text-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Control your workflow: hire, classify and pay your talent
                </li>
                <li className="flex items-center text-sm sm:text-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zM11 12.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zM11 19.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0z"
                    />
                  </svg>
                  Partner with Workmate for end-to-end support
                </li>
              </ul>
              <button className="bg-white text-black py-2 px-4 rounded mt-6">
                Learn more
              </button>
            </div>
            <div className="w-full md:w-1/2  sm:rounded-r-md overflow-hidden">
              <img
                src="/img-3.webp"
                alt="Man in wheelchair working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* fifth section */}

        <section className="bg-white pb-16">
          <div className="container mx-auto px-4">
            <div className=" mx-auto text-center">
              <h3 className="text-3xl sm:text-5xl  mb-6">For Clients</h3>
              <p className="text-xl mb-8 text-gray-600">Find talent your way</p>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                {[
                  {
                    title: "Post a job and hire a pro",
                    description:
                      "Easily post your job and connect with top talent.",
                  },
                  {
                    title: "Browse and buy projects",
                    description:
                      "Explore a variety of projects and purchase as needed.",
                  },
                  {
                    title: "Let us find you the right talent",
                    description:
                      "Tell us what you need, and we'll find the best match.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-lg cursor-pointer p-6 bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out"
                  >
                    <h4 className="font-medium text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
