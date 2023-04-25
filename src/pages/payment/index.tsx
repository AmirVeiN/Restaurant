import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/router";
import { useAppSelector } from "../../../store/hooks";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import React, { useEffect, useState } from "react";

function FoodSelected(props: {
  summaryHandler: React.Dispatch<
    React.SetStateAction<{ [key: string]: number }>
  >;
  count: number;
  price: number;
  img: string;
  title: string;
}) {
  const [count, countHandler] = useState(props.count);

  return (
    <div className="flex justify-around shadow-md rounded-xl h-24 w-full flex-row">
      <img
        src={props.img}
        alt="Loading..."
        width={80}
        height={10}
      />
      <div className="flex flex-col items-center justify-center space-y-3 w-full">
        <div>{props.title}</div>
        <div className="flex flex-row space-x-2 space-x-reverse">
          <div>{Intl.NumberFormat("fa").format(props.price * count)}</div>
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
            onClick={() => {
              countHandler((c) => c + 1);
              props.summaryHandler((s) => ({
                ...s,
                [props.title]: props.price * (count + 1),
              }));
            }}
            className="text-text bg-card justify-center 
      flex items-center h-6 w-6 rounded-lg"
          >
            <AiOutlinePlus />
          </button>
          <div>{Intl.NumberFormat("fa").format(count)}</div>
          <button
            onClick={() => {
              if (count > 0) {
                countHandler((c) => c - 1);
                props.summaryHandler((s) => ({
                  ...s,
                  [props.title]: props.price * (count - 1),
                }));
              }
            }}
            className="text-text bg-primary justify-center flex items-center h-6 w-6 rounded-lg "
          >
            <AiOutlineMinus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function payment() {
  const orderItems = useAppSelector((item) => item.order);
  const [summary, summaryHandler] = useState<{ [key: string]: number }>(
    orderItems.reduce((obj, value) => {
      return { ...obj, [value.title]: value.count * value.price };
    }, {})
  );

  const router = useRouter();

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
              <FoodSelected
                summaryHandler={summaryHandler}
                img={item.img}
                title={item.title}
                count={item.count}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-2xl flex flex-col justify-center bg-text/5 shadow-inner h-1/5">
        <div className="flex flex-row font-bold justify-between p-5">
          <div>قیمت کل :</div>
          <div className="flex flex-row space-x-2 space-x-reverse">
            <div>
              {Intl.NumberFormat("fa").format(
                Object.values(summary).reduce(
                  (total, number) => total + number,
                  0
                )
              )}
            </div>
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
