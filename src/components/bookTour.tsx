"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import emailjs from "emailjs-com";

export default function BookTour() {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    company: string;
    date: string;
    time: string;
    tourType: string;
    interests: string[];
    teamSize: string;
    message: string;
  }>({
    name: "",
    email: "",
    phone: "",
    company: "",
    date: "",
    time: "",
    tourType: "In-Person Tour",
    interests: [],
    teamSize: "Just me",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        interests: checked ? [...prev.interests, value] : prev.interests.filter((i) => i !== value)
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      // Send email using EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        date: formData.date,
        time: formData.time,
        tourType: formData.tourType,
        interests: formData.interests.join(", "),
        teamSize: formData.teamSize,
        message: formData.message
      };

      await emailjs.send(
        "your_service_id", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        templateParams,
        "your_public_key" // Replace with your EmailJS Public Key
      );

      console.log("Email sent successfully!");
      setSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleBookAgain = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      date: "",
      time: "",
      tourType: "In-Person Tour",
      interests: [],
      teamSize: "Just me",
      message: ""
    });
    setSubmitted(false);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Book a Tour
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Experience Cowork Assam firsthand! Schedule a visit to explore our space, meet our community, and find the perfect spot for your work.
        </motion.p>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input className="w-full p-2 border rounded" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
            <input className="w-full p-2 border rounded" type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
            <input className="w-full p-2 border rounded" type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
            <input className="w-full p-2 border rounded" name="company" placeholder="Company (Optional)" value={formData.company} onChange={handleChange} />
            <input className="w-full p-2 border rounded" type="date" name="date" value={formData.date} onChange={handleChange} required />
            <input className="w-full p-2 border rounded" type="time" name="time" value={formData.time} onChange={handleChange} required />
            <div>
              <label>Tour Type:</label>
              <div>
                <input type="radio" name="tourType" value="In-Person Tour" checked={formData.tourType === "In-Person Tour"} onChange={handleChange} /> In-Person Tour
                <input type="radio" name="tourType" value="Virtual Tour" checked={formData.tourType === "Virtual Tour"} onChange={handleChange} className="ml-4" /> Virtual Tour
              </div>
            </div>
            <div>
              <label>What are you interested in? (Select all that apply)</label>
              <div>
                <input type="checkbox" name="interests" value="Hot Desk" checked={formData.interests.includes("Hot Desk")} onChange={handleChange} /> Hot Desk
                <input type="checkbox" name="interests" value="Dedicated Desk" checked={formData.interests.includes("Dedicated Desk")} onChange={handleChange} className="ml-4" /> Dedicated Desk
                <input type="checkbox" name="interests" value="Private Office" checked={formData.interests.includes("Private Office")} onChange={handleChange} className="ml-4" /> Private Office
                <input type="checkbox" name="interests" value="Meeting Rooms" checked={formData.interests.includes("Meeting Rooms")} onChange={handleChange} className="ml-4" /> Meeting Rooms
                <input type="checkbox" name="interests" value="Event Space" checked={formData.interests.includes("Event Space")} onChange={handleChange} className="ml-4" /> Event Space
              </div>
            </div>
            <div>
              <label>Team Size:</label>
              <select
                className="w-full p-2 border rounded"
                name="teamSize"
                value={formData.teamSize}
                onChange={(e) => setFormData((prev) => ({ ...prev, teamSize: e.target.value }))}
              >
                <option value="Just me">Just me</option>
                <option value="2-5">2-5 members</option>
                <option value="6-10">6-10 members</option>
                <option value="11-20">11-20 members</option>
                <option value="21-50">21-50 members</option>
                <option value="50+">50+ members</option>
              </select>
            </div>
            <textarea
              className="w-full p-2 border rounded"
              name="message"
              placeholder="Additional Information (Optional)"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded cursor-pointer">Book a Tour</button>
          </form>
        ) : (
          <div className="text-center">
            <Check className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Tour Booked Successfully!</h3>
            <p className="text-gray-600 mt-2">We'll get in touch with you soon.</p>
            <button onClick={handleBookAgain} className="mt-4 p-2 bg-blue-500 text-white rounded">Book Again</button>
          </div>
        )}
      </div>
    </section>
  );
}