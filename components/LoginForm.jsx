import { useState } from "react";
import { useForm } from "react-hook-form";
import {useRouter} from "next/router"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "./FormError";

const BASE_URL = "https://wp-tab.monster/wp-json/"; //WORDPRESS LINK
const TOKEN_PATH = "jwt-auth/v1/token";
const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      router.push("/admin")

    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <FormError>{loginError}</FormError>}

          <label>
          <p>Username</p>
          <input {...register("username")} />
          {errors.username && <span>{errors.username.message}</span>}
          </label>

          <label>
          <p>Password</p>
          <input type="password" {...register("password")} />
          {errors.password && <span>{errors.password.message}</span>}
          </label>

          <button>{submitting ? "Loggin in..." : "Login"}</button>

      </form>
    </>
  );
}
