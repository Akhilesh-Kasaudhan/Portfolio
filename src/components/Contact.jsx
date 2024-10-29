import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  const [ref, isInView] = useInView({
    threshold: 0.5,
  });
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const web3FormsURL = "https://api.web3forms.com/submit";
    const accessKey = "f39bc3eb-8fb4-4cb7-a95e-4029fe233ab6";
    const formPayLoad = {
      ...formData,
      access_key: accessKey,
    };
    try {
      const response = await fetch(web3FormsURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formPayLoad),
      });
      const data = await response.json();
      if (data.success) {
        setResult("Message Sent Successfully");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResult("Error Sending Message");
      }
    } catch (error) {
      console.log("Error:", error);
      setResult("An error occurred.Please try again.");
    }
  };

  return (
    <div className=" w-full h-auto  flex flex-col md:flex-row items-center justify-between p-8 border-t-2 border-gray-900 gap-8 ">
      <div className="md:w-[50%] w-full ">
        <motion.h1
          ref={ref}
          variants={fadeInVariants}
          initial={isInView ? "visible" : "hidden"}
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1, ease: "easeIn" }}
          className="text-stone-400 font-bold text-6xl lg:text-9xl"
        >
          CONNECT ME
          <FaArrowRight className="inline ml-8 h-12 md:h-28" />
        </motion.h1>
      </div>
      <div className="contact-form-container w-full  md:w-[50%]  p-6 bg-transparent shadow-sm shadow-gray-300 rounded-md">
        {result && (
          <p className="result-message text-green-600 mb-4">{result}</p>
        )}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-[80%]   mx-auto"
        >
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2 ">
              Name{" "}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-200 rounded-lg "
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2 ">
              Email{" "}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-200 rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full p-2 border border-gray-200 rounded-lg h-20"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
