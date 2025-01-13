import React, { useState } from "react";
import supabase from "../supabase";
import toast from "react-hot-toast";

const FormModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    to: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add current time to the formData object
    const currentTime = new Date().toISOString(); // Current timestamp

    const dataToInsert = {
      ...formData,
      created_at: currentTime, // Add created_at field with the timestamp
    };

    // Insert data into the Supabase database
    const { data: insertedData, error } = await supabase
      .from("messages")
      .insert([dataToInsert]);

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully:", insertedData);
      setFormData({ name: "", to: "", message: "" }); // Reset form data
      onClose(); // Close the form

      toast.success(
        `Your message has been sent successfully
        We're glad to hear from you! ♥ `,
        {
          duration: 7000,
        }
      );
    }
  };

  return (
    <div className=" bg-gradient-to-b from-[#dbacac] to-[#c06e6e] p-6 rounded-md shadow-md w-80">
      <h2 className="text-l text-center font-semibold mb-4">
        kindly leave us a message ♥
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-black"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border text-sm border-gray-300 rounded-md"
            placeholder="your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="to" className="block text-sm font-medium text-black">
            To
          </label>
          <select
            id="to"
            name="to"
            value={formData.to}
            onChange={handleChange}
            className="mt-1 p-2 w-full border text-sm border-gray-300 rounded-md"
            required
          >
            <option value="" className="text-sm" disabled>
              Select a name
            </option>
            <option className="text-sm" value="Boyka">
              Ahmed
            </option>
            <option className="text-sm" value="Fulla">
              Sahar
            </option>
            <option className="text-sm" value="Ahmed & Sahar">
              Ahmed & Sahar
            </option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-black"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 text-sm p-2 w-full border border-gray-300 rounded-md"
            placeholder="write your message here"
            required
          />
        </div>
        <span className="text-[12px] text-gray-700 mb-4 block text-center">
          Messages Are Private and Secured ,<br /> Only
          <span> Ahmed</span> and
          <span> Sahar</span> can access the messages.
        </span>
        <div className="flex justify-between">
          <button
            type="submit"
            className="px-3 py-1 bg-[#b43f3f] text-[#ddd] text-sm rounded-md hover:bg-[#c06565] transition-all"
          >
            Send ♥
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 bg-gray-300 text-black text-sm rounded-md hover:bg-gray-400 transition-all"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormModal;
