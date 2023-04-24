import Image from "next/image";
import { useState } from "react";

export default function ReadyModal(props:{
  show : boolean
}) {
  return props.show ? (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="relative flex h-[59.8%] w-[80%] ">
        <Image
          className="absolute top-0.5 left-12"
          src={"/chef.png"}
          alt="Loading..."
          width={200}
          height={100}
        />
        <div className="h-full w-full flex items-end">
          <div className="bg-primary rounded-[40px] shadow-lg shadow-text h-1/2 w-full">
            <div className="h-1/2 w-full flex flex-col space-y-7 justify-end items-center">
              <p className="text-text font-extrabold text-2xl">
                آماده شدن سفارش
              </p>
              <p className="text-text/70 text-lg">
                آیا مطمئن هستید که سفارش آماده است؟
              </p>
            </div>
            <div className="h-1/2 w-full flex flex-row justify-center items-center space-x-10 space-x-reverse">
              <button className="bg-text shadow-md shadow-text text-primary w-fit h-fit text-xl p-3 rounded-2xl">
                خیر
              </button>
              <button className="bg-card shadow-md shadow-text text-text w-fit h-fit text-xl p-3 rounded-2xl">
                آماده است
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
