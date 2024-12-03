import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({service}) => {
  const {img, title, price, _id} = service || {};

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <Image src={img} width={400} height={200} alt="image" className="w-full h-56" />
      </figure>
      <div className="px-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex justify-between items-center mt-4 mb-2">
          <h6 className="text-primary font-semibold">Price : ${price}</h6>
          <Link href={`/services/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
