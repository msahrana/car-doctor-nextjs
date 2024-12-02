import React from "react";

const Banner = () => {
  const bannars = [
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide2",
      prev: "#slide6",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide3",
      prev: "#slide1",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide4",
      prev: "#slide2",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide5",
      prev: "#slide3",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide6",
      prev: "#slide4",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide1",
      prev: "#slide5",
    },
  ];

  return (
    <div className="carousel w-full my-5 text-white">
      {bannars.map((bannar, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${
              index + 1
            }.jpg)`,
          }}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full bg-top bg-no-repeat h-[70vh] rounded-xl"
        >
          <div className="w-full h-full flex items-center pl-36">
            <div className="space-y-5">
              <h1 className="text-6xl font-bold w-1/2">{bannar.title}</h1>
              <p className="w-1/2">{bannar.description}</p>
              <button className="btn btn-primary mr-4">Discover More</button>
              <button className="btn btn-outline text-white">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform bottom-12 right-12">
            <a
              href={bannar.prev}
              className="btn btn-circle mr-6 hover:bg-primary border-none"
            >
              ❮
            </a>
            <a
              href={bannar.next}
              className="btn btn-circle hover:bg-primary border-none"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
