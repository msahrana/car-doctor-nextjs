"use client";
import {useSession} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";

const MyBooking = () => {
  const session = useSession();
  const [bookings, setBookings] = useState([]);

  const loadData = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/my-booking/api/${session?.data?.user?.email}`
      );

      const data = await res.json();
      setBookings(data.myBooking || []);
    } catch (error) {
      console.error("Error loading bookings:", error);
      setBookings([]);
    }
  };

  useEffect(() => {
    if (session?.data?.user?.email) {
      loadData();
    }
  }, [session]);

  return (
    <div className="container mx-auto">
      {/* image data below */}
      <div className="relative h-72">
        <Image
          className="absolute h-72 w-full left-0 top-0 object-cover"
          src={"/assets/images/about_us/parts.jpg"}
          alt="service"
          width={1920}
          height={1080}
          style={{width: "90vw"}}
        />
        <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
            Booking of {session?.data?.user?.name}
          </h1>
        </div>
      </div>

      {/* table data below */}
      <div className="overflow-x-auto mt-12">
        <table className="table">
          {/* head */}
          <thead className="bg-[#AFAFAF] font-bold text-white">
            <tr>
              <th>Index</th>
              <th>Name & Email</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Booking Date</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(({serviceTitle, _id, date, price, name,email}, index) => (
              <tr key={_id}>
                <th>{index + 1}</th>
                <th>{name}: <span className="text-sm font-normal text-green-200">{email}</span></th>
                <td>{serviceTitle}</td>
                <td>{price}</td>
                <td>{date}</td>
                <td>
                  <Link href={`/my-booking/update/${_id}`}>
                    <button class="btn btn-primary">Edit</button>
                  </Link>
                </td>
                <th>
                  <button
                    // onClick={() => handleDelete(_id)}
                    class="btn btn-error"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
