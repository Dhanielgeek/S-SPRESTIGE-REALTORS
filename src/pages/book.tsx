import React, { useState } from "react";
import Homelayouts from "./layouts/Homelayout";

const Book = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    property: "",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    // TODO: send form data to backend or email service
    alert("Your inspection request has been submitted!");
  };

  return (
    <Homelayouts>
      <section className="py-16 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Book an Inspection
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                className="mt-2 w-full border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-2 w-full border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="mt-2 w-full border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Property to View
              </label>
              <input
                type="text"
                name="property"
                value={form.property}
                onChange={handleChange}
                required
                className="mt-2 w-full border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full border border-gray-300 rounded-lg p-3"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full border border-gray-300 rounded-lg p-3"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold transition hover:bg-gray-900"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </Homelayouts>
  );
};

export default Book;
