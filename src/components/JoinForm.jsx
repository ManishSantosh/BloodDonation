import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .min(18, "Minimum age is 18")
    .required("Age is required"),
  weight: yup
    .number()
    .typeError("Weight must be a number")
    .min(45, "Minimum weight is 45kg")
    .required("Weight is required"),
  address: yup.string().required("Address is required"),
  phone: yup
    .string()
    .matches(/^[6-9]\d{9}$/, "Phone number is not valid")
    .required("Phone number is required"),
  bloodGroup: yup
    .string()
    .notOneOf(["Choose Blood Group"], "Please select a valid blood group")
    .required("Blood group is required"),
});

function JoinForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Form Submitted Successfully!");
  };

  return (
    <section id="join" className="bg-secondary text-white py-5">
      <div className="container-fluid">
        <div className="text-center">
          <h1 className="display-4 mt-4 py-3 fw-bold">JOIN US</h1>
          <p className="fw-bold py-3">FEEL THE REAL PEACE</p>
        </div>

        <div className="card card-body bg-dark text-white">
          <div className="card-title text-center">
            <h3>REGISTRATION FORM</h3>
            <p className="fw-light small">
              Please fill in your info to register as a blood donor.
              Update your date of donation to hide your profile for 4 months.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="form-group col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  {...register("name")}
                />
                <p className="text-danger">{errors.name?.message}</p>
              </div>
              <div className="form-group col-md-3 mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Age"
                  {...register("age")}
                />
                <p className="text-danger">{errors.age?.message}</p>
              </div>
              <div className="form-group col-md-3 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Weight"
                  {...register("weight")}
                />
                <p className="text-danger">{errors.weight?.message}</p>
              </div>
              <div className="form-group col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  {...register("address")}
                />
                <p className="text-danger">{errors.address?.message}</p>
              </div>
              <div className="form-group col-md-3 mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Phone Number"
                  {...register("phone")}
                />
                <p className="text-danger">{errors.phone?.message}</p>
              </div>
              <div className="form-group col-md-3 mb-3">
                <select className="form-control" {...register("bloodGroup")}>
                  <option>Choose Blood Group</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>O+</option>
                  <option>O-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </select>
                <p className="text-danger">{errors.bloodGroup?.message}</p>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-outline-success btn-lg btn-block"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default JoinForm;
