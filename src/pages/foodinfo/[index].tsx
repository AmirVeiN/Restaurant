import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { TiStar } from "react-icons/ti";
import { AiFillFire } from "react-icons/ai";
import { BsFillClockFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addorder } from "../../../store/order/slice";

export default function FoodSlice() {
  const [count, setCount] = useState(1);
  const router = useRouter();
  const foods = useAppSelector((store) => store.foods);
  const { index } = router.query;
  const dispatch = useAppDispatch();

  if (typeof index === "string") {
    const food = foods.find((food) => food.id === parseInt(index));

    if (food !== undefined)
      return (
        <div className="flex bg-back flex-col items-center h-screen  w-screen justify-between">
          <div className="flex w-full p-6 flex-row justify-between items-center">
            <button
              onClick={() => router.push("/")}
              className="text-xl shadow-md p-3 rounded-xl bg-primary text-black/80"
            >
              <MdKeyboardArrowRight />
            </button>
            <button
              onClick={() => router.push("/payment")}
              className="text-xl shadow-md p-3 rounded-xl bg-primary text-black/80"
            >
              <TiShoppingCart />
            </button>
          </div>
          <div className=" bg-primary w-full h-[46rem] rounded-t-[60px] flex flex-col p-5 justify-between ">
            <div className="flex  items-center justify-center rounded-lg ">
              <Image
                className="h-fit w-fit"
                src={food.img}
                alt="Loading..."
                width={200}
                height={100}
              />
            </div>
            <div className="flex w-full h-fit justify-center items-center">
              <div className="w-fit flex flex-row-reverse space-x-reverse space-x-5 justify-center items-center">
                <div className="w-24 h-12  flex flex-row justify-center space-x-3 items-center rtl:space-x-reverse ">
                  <button
                    className="text-3xl text-tomato"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    <AiFillPlusCircle />
                  </button>
                  <div className="text-tomato text-2xl">
                    {Intl.NumberFormat("fa").format(count)}
                  </div>
                  <button
                    onClick={() => {
                      if (count > 0) {
                        setCount(count - 1);
                      } else {
                        count == 0;
                      }
                    }}
                    className={`${
                      count == 0 ? "text-primary" : "text-3xl text-text"
                    }`}
                  >
                    <AiFillMinusCircle />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-row-reverse h-fit w-full justify-between p-4 ">
              <div className="w-fit flex flex-row space-x-5 h-fit text-xl font-bold mt-1 rtl:space-x-reverse ">
                <p>
                  {`${Intl.NumberFormat("fa").format(
                    count * food.price
                  )} تومان`}
                </p>
              </div>
              <div className="flex flex-col items-start h-fit space-y-2">
                <h4 className="text-2xl text-bold text-black">{food.title}</h4>
                <small className="text-black">
                  {`قیمت واحد: ${Intl.NumberFormat("fa").format(
                    food.price
                  )} تومان`}
                </small>
              </div>
            </div>
            <div className="flex flex-row  h-fit w-full justify-evenly items-center">
              <div className="flex flex-row space-x-2 items-center">
                <BsFillClockFill className="text-xl text-blue ml-2" />
                <p className=" text-black/60">{`${Intl.NumberFormat(
                  "fa"
                ).format(food.time)} دقیقه`}</p>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <AiFillFire className="text-2xl text-red ml-1" />
                <p className=" text-black/60">{`${Intl.NumberFormat(
                  "fa"
                ).format(food.cal)} کیلوکالری`}</p>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <TiStar className="text-3xl text-card " />
                <p className=" text-black/60">
                  {Intl.NumberFormat("fa").format(food.rate / 10)}
                </p>
              </div>
            </div>
            <div className="flex flex-row w-full justify-between p-5">
              <div className="w-fit h-28 overflow-scroll text-black mt-1 scrollbar-hide">
                {food.desc}
              </div>
            </div>
            <div className=" flex justify-center">
              <button
                onClick={() => {
                  dispatch(
                    addorder({
                      id: 0,
                      count,
                      price: food.price,
                      img: food.img,
                      title: food.title,
                    })
                  );
                }}
                className="text-primary  rounded-xl w-72 h-12 border flex justify-center items-center bg-red border-red"
              >
                افزودن به سفارشات
              </button>
            </div>
          </div>
        </div>
      );
  }
  return;
}
