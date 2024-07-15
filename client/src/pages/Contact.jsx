import React, { useRef } from "react";
import { Accordion } from "../components";
import { call, write } from "../assets";
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uf62uuj', 'template_wa6el2n', form.current, {
        publicKey: 'O3OgpIeP3YtY5i4WO',
      })
      .then(
        () => {
          toast.success("Message sent successfully, wait for the reply!");
          console.log('SUCCESS!');
        },
        (error) => {
          toast.error("Message failed to send, try again later!");
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className=" p-[25px] lg:p-[50px]">
      <Toaster position="top-center" reverseOrder={false} />
      <p className="text-gray-90 mb-[20px]">
        Ahabanza / <span className="text-black">Tuvugishe</span>
      </p>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="shadow-md content-center p-[40px] w-full md:w-[385px]">
          <div className="flex items-center gap-5 my-[30px]">
            <img className="" src={call} alt="img" />
            <h1 className="font-medium font-poppins text-[16px]">Duhamagare</h1>
          </div>
          <p className="font-poppins text-[15px] my-5">Turahari ku murongo 24/7.</p>
          <p className="font-poppins text-[15px] my-5">Phone: +250792412177</p>
          <hr className="h-[2px] bg-gray-90" />
          <div className="flex items-center gap-5 my-[30px]">
            <img className="" src={write} alt="img" />
            <h1 className="font-medium font-poppins text-[16px]">Twandikire</h1>
          </div>
          <p className="font-poppins text-[15px] my-5">Uzuza form utwandikire, igitekerezo cyawe turahita tukibona.</p>
          <p className="font-poppins text-[15px] my-5">Email: customer@nihemart.com</p>
        </div>
        <div className="shadow-md md:w-[65%] py-[20px] px-[50px]">
          <form action="" ref={form} onSubmit={sendEmail} className="relative w-full h-full">
            <div className="w-full flex flex-col h-full gap-5">
              <div className="flex flex-col lg:flex-row gap-5">
              <input type="text" name="name" className="bg-gray-90 bg-opacity-[30%] rrounded-md py-[15px] px-[20px] w-full" placeholder="Amazina yawe" />
              <input type="email" name="email" className="bg-gray-90 bg-opacity-[30%] rrounded-md py-[15px] px-[20px] w-full" placeholder="Email yawe" />
              <input type="number" name="telephone" className="bg-gray-90 bg-opacity-[30%] rrounded-md py-[15px] px-[20px] w-full" placeholder="Telephone yawe" />
              </div>
              <div className="flex flex-1">
              <textarea type="textbox" name="message" className="bg-gray-90 bg-opacity-[30%] col-span-3 row-span-4 rounded-md py-[10px] px-[20px] w-full" placeholder="Ubutumwa bwawe"></textarea>
              </div>
              
            <button className="bg-blue3 hover:bg-opacity-[80%] py-[15px] px-[30px] rounded-lg text-white w-fit self-end">Ohereza ubutumwa</button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Accordion />
      </div>
    </div>
  );
};

export default Contact;
