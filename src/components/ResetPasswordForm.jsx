import React, { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { TextInput } from "flowbite-react";
import PasswordStrengthIndicator from "./UserRegistration/PasswordStrengthIndicator";
import { toast } from "react-toastify";

const ResetPasswordForm = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChangePassword = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };
    switch (name) {
      case "newPassword":
        if (value.length < 8) {
          newErrors.newPassword = "Password must be at least 8 characters long";
        } else if (
          !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/.test(value)
        ) {
          newErrors.newPassword =
            "Password must include lowercase, uppercase, number, and special character";
        } else {
          delete newErrors.newPassword;
        }
        if (formData.confirmPassword && value !== formData.confirmPassword) {
          newErrors.confirmPassword = "Passwords do not match";
        } else {
          delete newErrors.confirmPassword;
        }
        break;
      case "confirmPassword":
        if (value !== formData.newPassword) {
          newErrors.confirmPassword = "Passwords do not match";
        } else {
          delete newErrors.confirmPassword;
        }

      default:
        break;
    }
    setErrors(newErrors);
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>

      <Form className="space-y-4" method="post">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            Old password
          </label>
          <TextInput
            type="text"
            id="oldPassword"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChangePassword}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>

        <div>
          <label
            htmlFor="newPassword"
            className="block text-sm font-medium text-gray-700"
          >
            New Password
          </label>
          <div className="relative">
            <TextInput
              type={showPassword ? "text" : "password"}
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChangePassword}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              {showPassword ? (
                <FaRegEyeSlash className="h-5 w-5 text-gray-400" />
              ) : (
                <FaRegEye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          <PasswordStrengthIndicator password={formData.newPassword} />
          {errors.newPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.newPassword}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <TextInput
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChangePassword}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">
              {errors.confirmPassword}
            </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-main hover:bg-secondary hover:text-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main"
          >
            Reset pasword
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ResetPasswordForm;

export const action = async ({ request }) => {
  const data = await request.formData();
  const formData = {
    oldPassword: data.get("oldPassword"),
    newPassword: data.get("newPassword"),
    confirmPassword: data.get("confirmPassword"),
  };
  console.log("submitted", formData);
  toast.success("Password reset successfully ");
  //connect to api and send request
  return redirect("/app/Users");
};
