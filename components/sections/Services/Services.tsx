import Title from "@/components/common/Title";
import React from "react";

const servicesData = [
  {
    title: "Frontend Development",
    description: "I create responsive, clean, and modern front-end designs.",
  },
  {
    title: "Backend Development",
    description:
      "I build robust, scalable, and efficient server-side applications.",
  },
  {
    title: "Relational Databases",
    description: "Design and manage structured databases using SQL MySQL.",
  },
  {
    title: "Non-Relational Databases",
    description: "Work with flexible NoSQL databases like MongoDB.",
  },
  {
    title: "Web Testing",
    description:
      "I ensure functionality, usability, performance, security, and compatibility.",
  },
  {
    title: "SEO",
    description:
      "I optimize websites for better visibility, traffic, rankings, engagement, and conversion.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-10 w-full">
      <Title title="Services" />
      <ul className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {servicesData.map((service, index) => (
          <li
            key={index}
            className="p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-primary-foreground"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
