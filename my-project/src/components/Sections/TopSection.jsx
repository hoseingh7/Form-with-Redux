import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { object, string, number, date, InferType } from "yup";

let userSchema = object({
  name: string("Name must be string").required("name required").min(3),
  phone: number("phone must be Number")
    .positive("phone must be Positive Number")

    .integer()
    .required(),
  email: string("wrong format")
    .email("wrong format")
    .required("Email is required❌"),
});

function TopSection() {
  const [data, setData] = useState();
  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  function formValidation(event) {
    event.preventDefault();
    console.log(data);
    // store.subscribe(() => console.log(store.getState()));
    // store.dispatch({ type: "add", payload: data });
    // console.log("store", store.getState());

    userSchema.validate(data).catch(function (err) {
      if (err.path === "name") {
        console.log(err.errors[0]);
      } else if (err.path === "email") {
        console.log(err.errors[0]);
      } else if (err.path === "phone") {
        console.log(err.errors[0]);
      }
    });
  }

  return (
    <div className="w-1/3 h-fit  flex flex-col items-center justify-center gap-4  p-4">
      <h1 className="text-2xl font-bold">Phone Book App</h1>

      <form
        action=""
        onSubmit={formValidation}
        className=" w-11/12 h-full bg-[#F9F9F9] shadow-lg px-6 py-4 rounded-xl text-black flex flex-col justify-center items-center gap-3  ">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={updateData}
          className="w-full border-[1px] border-gray-500 rounded-lg p-2"
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          onChange={updateData}
          className="w-full border-[1px] border-gray-500 rounded-lg p-2"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          onChange={updateData}
          className="w-full  border-[1px] border-gray-500 rounded-lg p-2"
        />
        <button
          type="submit"
          className="bg-green-500 w-fit p-3 rounded-lg text-white">
          Add Contact
        </button>
      </form>
    </div>
  );
}

export default TopSection;
