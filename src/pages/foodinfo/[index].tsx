import { useState } from "react";
import { useRouter } from "next/router";
import { TiStar } from "react-icons/ti";
import { AiFillFire } from "react-icons/ai";
import { BsFillClockFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
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
        <div className="flex bg-back flex-col items-center h-screen  w-screen ">
          <div className="flex w-full p-6 flex-row justify-between items-center">
            <button
              onClick={() => router.push("/")}
              className="text-xl shadow-md p-3 rounded-xl bg-primary text-black/80"
            >
              <MdKeyboardArrowRight />
            </button>
          </div>
          <div className=" bg-primary w-full h-full rounded-t-[60px] flex flex-col p-5 items-center justify-around ">
            <div className="flex h-1/3 w-fit items-center justify-center ">
              <img
                className="h-full w-fit"
                src={food.img}
                alt="Loading..."
                width={250}
                height={250}
              />
            </div>
            <div className="flex w-full h-fit justify-center items-center">
              <div className="w-fit flex flex-row-reverse space-x-reverse space-x-5 justify-center items-center">
                <div className="w-32 h-12 bg-text/20 rounded-lg px-1 flex flex-row justify-center space-x-5 items-center rtl:space-x-reverse ">
                  <button
                    className="text-xl text-primary bg-red w-7 h-7 flex rounded-md justify-center items-center"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    <AiOutlinePlus />
                  </button>
                  <div className="text-text text-2xl font-bold">
                    {Intl.NumberFormat("fa").format(count)}
                  </div>
                  <button
                    onClick={() => {
                      if (count > 1) {
                        setCount(count - 1);
                      } else {
                        count == 1;
                      }
                    }}
                    className={`${
                      count == 1 ? " hidden" : "text-xl text-text bg-primary h-7 w-7 flex justify-center rounded-md items-center"
                    }`}
                  >
                    <AiOutlineMinus />
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
                  router.push("/");
                  dispatch(
                    addorder({
                      number: food.id,
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
