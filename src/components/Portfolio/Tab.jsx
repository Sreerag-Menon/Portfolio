import Card from "./Card";
import img1 from "../../assets/Project1.png";
import img2 from "../../assets/project3.png";
import img3 from "../../assets/Project4.png";
import img4 from "../../assets/youtube.png";
import img5 from "../../assets/js1.png";
import img6 from "../../assets/project-5.png";
import img7 from "../../assets/yb.jpeg";

export const tabs = [
  {
    title: "React",
    value: "React",

    content: (
      <div className="flex md:mr-6 w-full md:justify-center custom-sm:flex-col md:flex-row sm:justify-start custom-sm:px-1 ">
        <Card
          img={img1}
          desc="Facebook clone application built using react,tailwind CSS and firebase"
          title="Facebook"
          gitlink={"https://github.com/Sreerag-Menon/Facebook"}
          varcelLink={"https://facebook-beta-livid.vercel.app/"}
        />
        <Card
          img={img2}
          desc="Completely responsive currency converter application built using React and Tailwind CSS"
          title="Currency Converter"
          gitlink={"https://github.com/Sreerag-Menon/CurrencyConverter"}
          varcelLink={"https://currency-converter-lime-six.vercel.app/"}
        />
        <Card
          img={img3}
          desc="A simple production grade react blogging website using appwrite and tailwind"
          title="React Blogger"
          gitlink={"https://github.com/Sreerag-Menon/Blog/tree/main"}
        />
        <Card
          img={img6}
          desc="Front-end for a AI text-to-Image generator using React and CSS"
          title="Project Crux"
        />
      </div>
    ),
  },
  {
    title: "NodeJs/Javascript",
    value: "Javascript",
    content: (
      <div className="flex md:mr-6 w-full md:justify-center custom-sm:flex-col md:flex-row sm:justify-start custom-sm:px-1 ">
        <Card
          img={img4}
          desc="Production grade backend built for a youtube clone using nodeJS and ExpressJS"
          title="Youtube"
        />
        <Card
          img={img5}
          desc="Completely responsive spotify clone built using Javascript and bootstrap"
          title="Spotify"
        />
      </div>
    ),
  },
  {
    title: "React Native",
    value: "React Native",
    content: (
      <div className="flex md:mr-6 w-full md:justify-center custom-sm:flex-col md:flex-row sm:justify-start custom-sm:px-1 ">
        <Card
          img={img7}
          desc="A location tracker android application built using react-native using firebase and typescript"
          title="Yellow Bus"
          gitlink={"https://github.com/Sreerag-Menon/Yellow-Bus"}
        />
      </div>
    ),
  },
];
