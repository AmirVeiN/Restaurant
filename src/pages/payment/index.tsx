import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
import { removeOrder } from "../../../store/order/slice";

function ReadyModal(props: { onClose: () => void; id: number }) {
  const dispatch = useAppDispatch();
  return props.id > -1 ? (
    <div className="w-screen h-screen flex justify-center items-center absolute top-0">
      <div className=" flex justify-center items-center flex-col -space-y-[28px] h-[500px] w-80 ">
        <div className="z-20 h-fit w-full flex justify-center">
          <img
            className=""
            src={"/trash2.png"}
            alt="Loading..."
            width={300}
            height={100}
          />
        </div>
        <div className="h-60 w-full z-10 flex items-end">
          <div className="bg-primary rounded-[40px] shadow-lg shadow-text h-full w-full">
            <div className="h-1/2 w-full flex flex-col space-y-5 justify-end items-center">
              <p className="text-text font-extrabold text-2xl">حذف شدن سفارش</p>
              <p className="text-text/70 text-lg">آیا مطمئن هستید ؟</p>
            </div>
            <div className="h-1/2 w-full flex flex-row justify-center items-center space-x-10 space-x-reverse">
              <button
                onClick={props.onClose}
                className="bg-text shadow-md shadow-text text-primary w-14 h-fit text-xl p-3 rounded-2xl"
              >
                خیر
              </button>
              <button
                onClick={() => {
                  props.onClose();
                  dispatch(removeOrder(props.id));
                }}
                className="bg-card shadow-md shadow-text text-text w-14 h-fit text-xl p-3 rounded-2xl"
              >
                بله
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

function FoodSelected(props: {
  summaryHandler: React.Dispatch<
    React.SetStateAction<{ [key: string]: number }>
  >;
  count: number;
  handler: () => void;
  price: number;
  img: string;
  title: string;
}) {
  const dispatch = useAppDispatch();
  const [count, countHandler] = useState(props.count);

  return (
    <div className="flex justify-around shadow-md rounded-xl h-24 w-full flex-row">
      <img src={props.img} alt="Loading..." width={80} height={10} />
      <div className="flex flex-col items-center justify-center space-y-3 w-full">
        <div>{props.title}</div>
        <div className="flex flex-row space-x-2 space-x-reverse">
          <div>{Intl.NumberFormat("fa").format(props.price * count)}</div>
          <div>
            <p className="">تومان</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-2 pl-2 space-x-reverse items-center justify-center w-full h-full">
        <div
          className="flex flex-row p-1 justify-center space-x-5 bg-text/10 rounded-lg
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
              if (count > 1) {
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
        <button onClick={props.handler} className="bg-text/10 p-1.5 rounded-md">
          <FaTrashAlt className="text-red" />
        </button>
      </div>
    </div>
  );
}

export default function payment() {
  const [show, showHandler] = useState(-1);

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
                handler={() => showHandler(item.number)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-2xl flex flex-col justify-around bg-text/5 shadow-inner h-36">
        <div className="flex flex-row font-bold justify-between px-5">
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
          <button className="bg-red text-primary font-bold text-lg flex rounded-xl items-center justify-center w-44 h-12">
            تایید سفارشات
          </button>
        </div>
      </div>
      <ReadyModal id={show} onClose={() => showHandler(-1)} />
    </div>
  );
}
