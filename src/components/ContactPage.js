import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Navneet from "./images/nav.jpg";
import Ram from "./images/ram.jpg";

const teamMembers = [
  {
    name: "NAVNEET MALVIYA",
    position: "Group Lead",
    imageSrc: Navneet,
    socialMedia: [
      {
        icon: <FontAwesomeIcon icon={faTwitter} />,
        url: "https://twitter.com/johndoe",
      },
      {
        icon: <FontAwesomeIcon icon={faLinkedin} />,
        url: "https://linkedin.com/in/johndoe",
      },
      {
        icon: <FontAwesomeIcon icon={faInstagram} />,
        url: "https://instagram.com/johndoe",
      },
      {
        icon: <FontAwesomeIcon icon={faEnvelope} />,
        url: "mailto:johndoe@example.com",
      },
      {
        icon: <FontAwesomeIcon icon={faGithub} />,
        url: "https://github.com/johndoe",
      },
    ],
  },
  {
    name: "Ram K Patidar",
    position: "Developer",
    imageSrc: Ram,
    socialMedia: [
      {
        icon: <FontAwesomeIcon icon={faTwitter} />,
        url: "https://twitter.com/anothermember",
      },
      {
        icon: <FontAwesomeIcon icon={faLinkedin} />,
        url: "https://linkedin.com/in/anothermember",
      },
      {
        icon: <FontAwesomeIcon icon={faInstagram} />,
        url: "https://instagram.com/anothermember",
      },
      {
        icon: <FontAwesomeIcon icon={faEnvelope} />,
        url: "mailto:anothermember@example.com",
      },
      {
        icon: <FontAwesomeIcon icon={faGithub} />,
        url: "https://github.com/anothermember",
      },
    ],
  },
  // ... (other team members)
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container p-4 mx-auto mt-8 mb-8">
      <h1 className="mb-8 text-4xl font-bold text-center text-blue-800 transition duration-300 transform hover:text-purple-800 hover:scale-105">Feedback</h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Contact Form */}

        <form onSubmit={handleSubmit} className="p-6 bg-purple-500 rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="text-white">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-white">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-white">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              rows="4"
              style={{ resize: "none" }} // Add this line to prevent resizing
              required
            ></textarea>
          </div>
          <div className="text-center">
            {" "}
            {/* Center the button */}
            <button
              type="submit"
              className="px-4 py-2 text-white transition duration-300 bg-purple-500 rounded-md hover:bg-purple-700"
            >
              <b>SUBMIT</b>
            </button>
          </div>
        </form>

        {/* Team Members */}
        <div className="grid gap-4 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-6 bg-white rounded-lg">
              {member.imageSrc ? (
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  className="object-cover w-full h-full rounded-full"
                  style={{
                    maxWidth: "200px",
                    maxHeight: "200px",
                    ObjectFit: "cover",
                  }}
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded-full">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
              <p className="font-bold text-gray-800">{member.name}</p>
              <p className="text-gray-600">{member.position}</p>
              <div className="flex mt-2 space-x-2">
                {member.socialMedia.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:text-purple-700"
                  >
                    {platform.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
