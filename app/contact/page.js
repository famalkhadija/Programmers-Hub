"use client";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const Contact = () => {
  const [captcha, setCaptcha] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleCaptcha = (value) => {
    setCaptcha(value);
  };

  const handleContinue = async (e) => {
    e.preventDefault();
    if (!name || !email || !message || !phone) {
      alert("Please fill out all fields.");
      return;
    }
    if (!captcha) {
      alert("Please complete the CAPTCHA.");
      return;
    }
    const res = await fetch("/api/verify-captcha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: captcha }),
    });
    const data = await res.json();
    if (!data.success) {
      alert("CAPTCHA verification failed.");
      return;
    }
    const res2 = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    const data2 = await res2.json();
    if (res2.ok && data2.success) {
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setCaptcha(null);
    } else {
      alert(data2.error || "Failed to send message.");
    }
  };
  return (
    <>
    <head>
      <title>Contact | Programmers Discussion Hub</title>
      <meta name="description" content="Contact us for questions, feedback, or collaboration opportunities" />
    </head>
      <div className="dark:bg-[#2d2f3a] dark:text-white">
        <div className=" pt-6 flex flex-col mx-auto">
          <div className="w-80 flex flex-col gap-2 mx-auto text-center">
            <h1 className="text-xl md:text-4xl font-bold">Contact Us</h1>
            <p className="lg:text-md  text-slate-500 dark:text-white">
              We are available for questions, feedback, or collaboration
              opportunities. Let us know how we can help!
            </p>
          </div>
          <div>
            <div className=" mx-auto contact-card py-6 flex flex-col items-center ">
              <div className="sm:w-[480px] text-sm md:text-md pb-6 px-2 sm:px-6 md:px-14 border rounded-lg border-gray-300">
                <div className="px-8">
                  <div className="mt-8">Enter Your Name</div>
                  <input
                    className=" w-60 sm:w-80 border border-gray-300 px-2 py-1 rounded-md"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="px-8">
                  <div className="mt-8">Enter Your Email</div>
                  <input
                    className=" w-60 sm:w-80 border border-gray-300 px-2 py-1 rounded-md"
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="px-8">
                  <div className="mt-8">Enter Your Phone#</div>
                  <input
                    className=" w-60 sm:w-80 border border-gray-300 px-2 py-1 rounded-md"
                    type="number"
                    value={phone}
                    placeholder="Your 10-digit Pakistani Number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <div className="mt-8">Enter Message</div>
                  <textarea
                    className="mt-4 border border-slate-500 w-60 sm:w-80 h-20"
                    name="message"
                    value={message}
                    placeholder="Enter Your message"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <ReCAPTCHA
                  className="my-8 sm:mx-10"
                  sitekey="6LcAFFArAAAAANFnal7x_A_SCjKi6kZbkYDUY2WJ"
                  onChange={handleCaptcha}
                />
                <button
                  onClick={handleContinue}
                  disabled={!captcha}
                  className={` w-60 sm:w-80 mx-8 py-2 dark:bg-[#121c2c] dark:hover:bg-[#0d1523] rounded-lg text-white ${
                    captcha
                      ? "bg-slate-500 hover:bg-slate-400"
                      : "bg-slate-400 "
                  }`}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
