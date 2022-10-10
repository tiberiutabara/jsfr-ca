import Nav from "../components/Nav";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please enter your first name")
    .min(3, "The message must be at least 3 characters"),
  lastName: yup
    .string()
    .required("Please enter your last name")
    .min(4, "The message must be at least 4 characters"),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  subject: yup.string().required(),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "The message must be at least 10 characters"),
});

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit() {
    alert("Success");
  }

  return (
    <div className="container">
      <Nav />

      <h2 className="title">Contact</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>First Name</p>
          <input {...register("firstName")} />
          {errors.firstName && <span>{errors.firstName.message}</span>}
        </label>

        <label>
          <p>Last Name</p>
          <input {...register("lastName")} />
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </label>

        <label>
          <p>Email</p>
          <input {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
        </label>

        <label>
          <p>Subject</p>
          <select {...register("subject")}>
            <option>Pets</option>
            <option>Other</option>
          </select>
          {errors.subject && <span>{errors.subject.message}</span>}
        </label>

        <label>
          <p>Message</p>
          <textarea {...register("message")} />
          {errors.message && <span>{errors.message.message}</span>}
        </label>

        <button>Send</button>
      </form>
    </div>
  );
}

export default Contact;
