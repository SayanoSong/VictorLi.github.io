"use client";
import { Element } from "react-scroll";

interface AboutProps {
  id: string;
}

export default function About(props: AboutProps) {
  return (
    <Element className="flex flex-col my-10" id={props.id} name={props.id}>
      <p className="base font-serif mt-2">
        I am a new graduated software developer driven by the challenge of
        building intuitive, high-quality applications that seamlessly combine
        elegant design with solid engineering. I thrive at the intersection of
        creativity and logic, crafting solutions that are not only visually
        appealing but also optimized for performance, scalability, and user
        friendly.
      </p>
      <p className="base font-serif mt-2">
        As a graduated Honours Bachelor of Computer Science student at the
        University of Ottawa who was awarded to the dean&apos;s list, with a
        strong foundation in full-stack development and hands-on experience
        gained through the 2 years CO-OP program experience, I am passionate
        about exploring and experimenting with different cutting-edge
        development technologies and frameworks.
      </p>
      <p className="base font-serif mt-2">
        In addition to mastering various software development skills, I have a
        strong interest in other computer science-related fields, such as
        information retrieval and data mining. Through systematic learning, I
        have developed a deep understanding of areas like ETL, OLTP, OLAP, and
        data mining.
      </p>
      <p className="base font-serif mt-2">
        Outside of work and study, I dedicate time to learning other languages.
        In my leisure moments, I enjoy playing the bassoon, learning jazz dance,
        swimming, and engaging in other recreational or sports activities.
      </p>
    </Element>
  );
}