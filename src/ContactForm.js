import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [popupVisible, setPopupVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const subject = form.current.subject.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !subject || !message) {
      alert("⚠ Please fill out all fields before submitting.");
      return;
    }

    emailjs
      .send(
        "service_ghaqtpm",       // Your Service ID
        "template_h9epxdv",      // Your Template ID
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
        },
        "aHGu1qqkgvsNS5j76"      // Your Public Key
      )
      .then(() => {
        setPopupVisible(true);
        form.current.reset();
      })
      .catch((err) => {
        alert("❌ Failed to send message.\n" + JSON.stringify(err));
        console.error("EmailJS Error:", err);
      });
  };

  const closePopup = () => setPopupVisible(false);

  return (
    <div className="w-full md:w-1/3 bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/10">
      <h3 className="text-xl font-bold mb-3 text-white">Say Hi 👋</h3>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-3">
        <input type="text" name="user_name" placeholder="Your Name" className="w-full p-3 rounded-lg bg-gray-100 text-gray-900" required />
        <input type="email" name="user_email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-gray-100 text-gray-900" required />
        <input type="text" name="subject" placeholder="Subject" className="w-full p-3 rounded-lg bg-gray-100 text-gray-900" required />
        <textarea name="message" rows={4} placeholder="Message" className="w-full p-3 rounded-lg bg-gray-100 text-gray-900" required></textarea>
        <button type="submit" className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:scale-105 transition duration-300">
          Send Message
        </button>
      </form>

      {/* Popup */}
      {popupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg text-center">
            <p className="text-green-600 font-semibold mb-4">✅ Message sent successfully!</p>
            <button onClick={closePopup} className="bg-gray-200 px-6 py-2 rounded-lg hover:bg-gray-300 transition duration-300">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
