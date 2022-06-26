import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Logo from "../components/icons/logo.svg";
import { ConfForm } from "../components/base/ConfForm";

const Home: NextPage = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Logo style={{ width: "20px" }} />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="#">
              <a className="mr-5 hover:text-gray-900">First Link</a>
            </Link>
            <Link href="#">
              <a className="mr-5 hover:text-gray-900">Second Link</a>
            </Link>
            <Link href="#">
              <a className="mr-5 hover:text-gray-900">Third Link</a>
            </Link>
            <Link href="#">
              <a className="mr-5 hover:text-gray-900">Fourth Link</a>
            </Link>
          </nav>
          <div className="w-16 md:w-12 h-16 md:h-12 bg-gray-100 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
            <img
              src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256"
              loading="lazy"
              alt="Photo by Radu Florin"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </header>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-md px-4 md:px-8 mx-auto">
          <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">
            Our competitive advantage
          </h1>

          <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated. It may be used to display
            a sample of fonts or generate text for testing. Filler text is dummy
            text which has no meaning however looks very similar to real text.
            The important factor when using filler text is that the text looks
            realistic otherwise it will not look very good.
            <br />
            <br />
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is{" "}
            <a
              href="#"
              className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 underline transition duration-100"
            >
              random
            </a>{" "}
            or otherwise generated. It may be used to display a sample of fonts
            or generate text for testing. Filler text is dummy text which has no
            meaning however looks very similar to real text.
          </p>

          <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">
            About us
          </h2>

          <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated. It may be used to display
            a sample of fonts or generate text for testing. Filler text is dummy
            text which has no meaning however looks very similar to real text.
          </p>

          <ul className="list-disc list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
            <li>This is a section of some simple filler text</li>
            <li>Also known as placeholder text</li>
            <li>It shares some characteristics of a real written text</li>
          </ul>

          <blockquote className="text-gray-500 sm:text-lg italic border-l-4 pl-4 md:pl-6 mb-6 md:mb-8">
            “This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.”
          </blockquote>

          <div className="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8">
            <img
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600&h=350"
              loading="lazy"
              alt="Photo by Minh Pham"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">
            Features
          </h2>

          <p className="text-gray-500 sm:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated. It may be used to display
            a sample of fonts or generate text for testing. Filler text is dummy
            text which has no meaning however looks very similar to real text.
          </p>
        </div>
      </div>

      <ConfForm
        inputs={[
          {
            type: "text",
          },
          {
            type: "email",
          },
          {
            type: "password",
          },
        ]}
      ></ConfForm>
    </div>
  );
};

export default Home;
