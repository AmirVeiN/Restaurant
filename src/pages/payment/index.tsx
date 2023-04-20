import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { changeCount } from "../../../store/order/slice";
import { useState } from "react";

export default function payment() {
  const orderItems = useAppSelector((item) => item.order);
  const count = [1, 2, 3];
  console.log(count[0]);
  const router = useRouter();
  const { more } = router.query;
  const dispatch = useAppDispatch();

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex flex-row justify-between items-center p-5">
        <p className="font-semibold text-2xl">لیست سفارشات</p>
        <button
          onClick={() => router.push("/")}
          className="text-xl shadow-md rounded-xl p-3 text-text/80 bg-primary"
        >
          <MdKeyboardArrowLeft />
        </button>
      </div>
      <div className="h-5/6 flex flex-col overflow-auto scrollbar-hide p-2">
        <div className="h-full w-full ">
          <div className="flex flex-col h-full space-y-8">
            {orderItems.map((item) => (
              <div className="flex justify-around shadow-md rounded-xl h-24 w-full flex-row">
                <Image src={item.img} alt="Loading..." width={80} height={10} />
                <div className="flex flex-col items-center justify-center space-y-3 w-full">
                  <div>{item.title}</div>
                  <div className="flex flex-row space-x-2 space-x-reverse">
                    <div>
                      {Intl.NumberFormat("fa").format(item.price * item.count)}
                    </div>
                    <div>
                      <p className="">تومان</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full h-full">
                  <div
                    className="flex  flex-row p-1 justify-center space-x-5 bg-gray  rounded-lg
                rtl:space-x-reverse items-center"
                  >
                    <button
                      className="text-text bg-card justify-center 
                  flex items-center h-6 w-6 rounded-lg"
                    >
                      <AiOutlinePlus />
                    </button>
                    <div>{Intl.NumberFormat("fa").format(item.count)}</div>
                    <button
                      className="text-text bg-primary justify-center
                   flex items-center h-6 w-6 rounded-lg "
                    >
                      <AiOutlineMinus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-2xl flex flex-col justify-center bg-text/5 shadow-inner h-1/5">
        <div className="flex flex-row font-bold justify-between p-5">
          <div>قیمت کل :</div>
          <div className="flex flex-row space-x-2 space-x-reverse">
            <div>{Intl.NumberFormat("fa").format(599000)}</div>
            <div>تومان </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-card/80 font-extrabold flex rounded-3xl items-center justify-center w-44 h-12">
            تایید سفارشات
          </div>
        </div>
      </div>
    </div>
  );
}
