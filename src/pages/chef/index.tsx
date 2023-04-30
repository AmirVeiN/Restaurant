import { FaRegListAlt } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useReducer, useState } from "react";
import { AiFillCheckSquare } from "react-icons/ai";
import { FinishChanger } from "../../../store/chef/slice";
import React from "react";

function ReadyModal(props: { onClose: () => void; id: number }) {
  const dispatch = useAppDispatch();
  return props.id > -1 ? (
    <div className="w-screen h-screen flex justify-center items-center absolute top-0">
      <div className=" flex justify-center items-center flex-col -space-y-[30px] h-[500px] w-80 ">
        <div className="z-20 h-fit w-full flex justify-center">
          <img
            className=""
            src={"/chef3.png"}
            alt="Loading..."
            width={200}
            height={100}
          />
        </div>
        <div className="h-60 w-full z-10 flex items-end">
          <div className="bg-primary rounded-[40px] shadow-lg shadow-text h-full w-full">
            <div className="h-1/2 w-full flex flex-col space-y-5 justify-end items-center">
              <p className="text-text font-extrabold text-2xl">
                آماده شدن سفارش
              </p>
              <p className="text-text/70 text-lg">
                آیا مطمئن هستید ؟{props.id}
              </p>
            </div>
            <div className="h-1/2 w-full flex flex-row justify-center items-center space-x-10 space-x-reverse">
              <button
                onClick={props.onClose}
                className="bg-text shadow-md shadow-text text-primary w-fit h-fit text-xl p-3 rounded-2xl"
              >
                خیر
              </button>
              <button
                onClick={() => {
                  props.onClose();
                  dispatch(FinishChanger({ id: props.id }));
                }}
                className="bg-card shadow-md shadow-text text-text w-fit h-fit text-xl p-3 rounded-2xl"
              >
                آماده است
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

function ChefSelected(props: {
  count: number[];
  title: string[];
  finish: boolean;
  table: number;
  handler: () => void;
}) {
  return (
    <div className="w-96 h-fit p-3 ">
      <div className="bg-primary rounded-t-xl">
        <div className="h-10 bg-red flex rounded-t-md justify-center items-center mb-3 text-primary">
          میز {Intl.NumberFormat("fa").format(props.table)}
        </div>
        <div className="h-fit flex flex-col space-y-3 ">
          <div className="w-full flex flex-row h-fit justify-between px-2">
            <div>
              {props.title.map((i) => (
                <div
                  className={`w-full flex flex-row space-x-reverse space-x-4 justify-between`}
                >
                  <div className="">{i}</div>
                  <p>
                    {i.length >= 25
                      ? ".".repeat(45 - i.length)
                      : ".".repeat(50 - i.length)}
                  </p>
                </div>
              ))}
            </div>
            <div>
              {props.count.map((e) => (
                <div className="flex flex-row justify-around space-x-1 space-x-reverse">
                  <div>{Intl.NumberFormat("fa").format(e)}</div>
                  <div>عدد</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <button
              onClick={props.handler}
              className={`border p-2 ${
                props.finish ? "border-softGreen" : "border-text/30"
              } rounded-md space-x-2 space-x-reverse flex flex-row justify-center items-center`}
            >
              <div>
                {props.finish ? (
                  <AiFillCheckSquare className="text-softGreen text-xl" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-xl" />
                )}
              </div>
              <p
                className={` ${
                  props.finish ? "text-softGreen" : "text-text"
                } font-bold`}
              >
                آماده شد
              </p>
            </button>
          </div>
          <div className="bg-mask h-5 w-full"></div>
        </div>
      </div>
    </div>
  );
}
export default function ChefPage() {
  const [show, showHandler] = useState(-1);

  const chefItems = useAppSelector((item) => item.chef).filter(
    (d) => !d.finish
  );
  const router = useRouter();

  return (
    <>
      <div className="h-screen w-screen relative bg-lightGray ">
        <div className="backdrop-blur-sm absolute"></div>
        <div className="h-full w-full flex flex-col">
          <div className="w-full h-16 items-center shadow-lg rounded-b-md bg-primary justify-between px-3 flex flex-row">
            <button
              onClick={() => router.push("/")}
              className="text-xl shadow-md shadow-text/50 p-2 rounded-md bg-primary text-black"
            >
              <MdKeyboardArrowRight />
            </button>
            <div className="flex flex-row  right-28 justify-around shadow-md space-x-3 space-x-reverse">
              <FaRegListAlt className="text-xl text-red/70" />
              <p className="font-extrabold">لیست سفارشات غذا</p>
            </div>
            <button className=" left-3 bg-primary p-2 rounded-md shadow-md shadow-text/50  text-xl">
              <BsFilter />
            </button>
          </div>
          <div className="h-full w-full flex justify-start items-center flex-col overflow-y-auto md:grid grid-cols-2 lg:grid-cols-3 lg:gap-x-[6.75rem] xl:grid-cols-4 xl:gap-x-[20.75rem] ">
            {chefItems.map((items) => (
              <ChefSelected
                title={items.title}
                count={items.count}
                finish={items.finish}
                table={items.table}
                handler={() => showHandler(items.table)}
              />
            ))}
          </div>
        </div>
      </div>
      <ReadyModal id={show} onClose={() => showHandler(-1)} />
    </>
  );
}
