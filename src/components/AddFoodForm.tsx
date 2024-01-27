import { AddFoodFormSchema } from "../util/schema";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { AxiosError } from "axios";

type AddFoodFormInputs = z.infer<typeof AddFoodFormSchema>;

export const AddFoodForm = () => {
  const [errMsg, setErrMsg] = useState("");
  const [sucessMsg, setSuccessMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddFoodFormInputs>({
    resolver: zodResolver(AddFoodFormSchema),
  });

  const processForm: SubmitHandler<AddFoodFormInputs> = async (data) => {
    try {
      const req = await axios.post("http://localhost:8080/addfood", data, {
        withCredentials: true,
      });
      if (req.status === 200) {
        reset();
        setSuccessMsg("Food added successfully")
        setTimeout(() => {
          setSuccessMsg("")
        }, 3000)
      }
    } catch (err:unknown) {
      if(err instanceof AxiosError) {
        console.log(err.response)
        setErrMsg(err.response!.data.message)
        setTimeout(() => {
          setErrMsg("")
        }, 3000)
      } else {
        console.log(err);
        setErrMsg("Something went wrong!")
      }
    }
  };

  return (
    <div className="border border-sky-300 px-3 py-8 rounded-md flex justify-center items-center w-full flex-col md:w-4/12">
      <h1 className="py-4 font-semibold text-sky-800 text-lg">
        Please enter the nutritional values based on 100g per serving.
      </h1>
      <form
        className="flex flex-col justify-center items-center gap-2 md:w-3/4"
        onSubmit={handleSubmit(processForm)}
      >
        <div className="w-full">
          <div className=" flex md:flex-row justify-between flex-col">
            <label className="font-semibold text-xl dark:text-white">
              Food Name:
            </label>
            <input
              className="border-2 md:w-1/2 rounded-md border-slate-300 py-1"
              type="text"
              {...register("name")}
            />
          </div>
          {errors.name?.message && (
            <p className="p-1 text-sm text-red-900 bg-red-300 rounded-md text-center w-fit m-auto my-1 px-6">
              {errors.name.message}
            </p>
          )}
        </div>{" "}
        <div className="w-full">
          <div className="flex md:flex-row justify-between flex-col">
            <label className="font-semibold text-xl dark:text-white">
              Calories:
            </label>
            <input
              className="border-2  md:w-1/2 rounded-md border-slate-300 py-1"
              type="number"
              {...register("calories")}
            />
          </div>

          {errors.calories?.message && (
            <p className="p-1 text-sm text-red-900 bg-red-300 rounded-md text-center w-fit m-auto my-1 px-6">
              {errors.calories.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <div className="flex md:flex-row justify-between flex-col">
            <label className="font-semibold text-xl dark:text-white">
              Carbohydrates:
            </label>
            <input
              className="border-2 md:w-1/2 rounded-md border-slate-300 py-1"
              type="number"
              {...register("carbohydrates")}
            />
          </div>

          {errors.carbohydrates?.message && (
            <p className="p-1 text-sm text-red-900 bg-red-300 rounded-md text-center w-fit m-auto my-1 px-6">
              {errors.carbohydrates.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <div className="flex md:flex-row justify-between flex-col">
            <label className="font-semibold text-xl dark:text-white">
              Fat:
            </label>
            <input
              className="border-2  md:w-1/2 rounded-md border-slate-300 py-1"
              type="number"
              {...register("fat")}
            />
          </div>

          {errors.fat?.message && (
            <p className="p-1 text-sm text-red-900 bg-red-300 rounded-md text-center w-fit m-auto my-1 px-6">
              {errors.fat.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <div className="flex md:flex-row justify-between flex-col">
            <label className="font-semibold text-xl dark:text-white">
              Protein:
            </label>
            <input
              className="border-2  md:w-1/2 rounded-md border-slate-300 py-1"
              type="number"
              {...register("protein")}
            />
          </div>

          {errors.protein?.message && (
            <p className="p-1 text-sm text-red-900 bg-red-300 rounded-md text-center w-fit m-auto my-1 px-6">
              {errors.protein.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <div className="w-full flex justify-between md:flex-row flex-col">
            <label className="font-semibold text-xl dark:text-white">
              Fiber:
            </label>
            <input
              className="border-2  md:w-1/2 rounded-md border-slate-300 py-1"
              type="number"
              {...register("fiber")}
            />
          </div>
          {errors.fiber?.message && (
            <p className="p-1 text-sm text-red-900 bg-red-300 rounded-md text-center w-fit m-auto my-1 px-6">
              {errors.fiber.message}
            </p>
          )}
        </div>
        {errMsg && (
          <p className="p-1 text-sm text-red-900 bg-red-300 rounded-md text-center w-fit m-auto my-1 px-6">
            {errMsg}
          </p>
        )}
        {sucessMsg && (
           <p className="p-1 text-sm text-green-900 bg-green-300 rounded-md text-center w-fit m-auto my-1 px-6">
           {sucessMsg}
         </p>
        )}
        <button className="bg-sky-600 hover:bg-sky-800 duration-300 text-white rounded px-3 py-1 my-2 font-semibold text-lg">
          Add Food
        </button>
      </form>
    </div>
  );
};
