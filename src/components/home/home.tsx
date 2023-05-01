import { useState } from "react";
import { BiRestaurant } from "react-icons/bi";
import { MdShoppingBasket } from "react-icons/md";
import { useRouter } from "next/router";
import { FoodSection } from "../section/section";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { FoodEnum } from "../../../store/foods/slice";
import { CategoryEnum, setCategory } from "../../../store/core/slice";
import { Twirl as Hamburger } from "hamburger-react";
import { MdOutlineManageAccounts } from "react-icons/md";
import { TbChefHat } from "react-icons/tb";
import { TbInfoSquareRounded } from "react-icons/tb";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import KebabDiningIcon from "@mui/icons-material/KebabDining";
import WineBarIcon from "@mui/icons-material/WineBar";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import IcecreamIcon from "@mui/icons-material/Icecream";

export default function Home() {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const [choose, chooseHandler] = useState(-1);
  const dispatch = useAppDispatch();
  const order = useAppSelector((store) => store.order.length);
  const foods = useAppSelector((store) => store.foods);
  const sectionList = useAppSelector((store) => store.core);

  return (
    <div className="relative">
      <div
        className={`h-[275px] w-28 fixed mr-2 rounded-2xl ${
          !isOpen && "hidden"
        } shadow-lg items-end flex shadow-red bg-primary z-30 `}
      >
        <div className="h-3/4 flex justify-center flex-col items-start pr-2 space-y-4 w-full">
          <div className="flex flex-row items-center space-x-1 space-x-reverse shadow-md p-2 justify-center">
            <MdOutlineManageAccounts className="text-2xl" />
            <button onClick={() => router.push("/manager")}>مدیریت</button>
          </div>
          <div className="flex flex-row items-center space-x-6 shadow-md p-2 justify-center">
            <TbChefHat className="text-2xl" />
            <button className="pr-3" onClick={() => router.push("/chef")}>
              آشپز
            </button>
          </div>
          <div className="flex flex-row items-center space-x-2 space-x-reverse shadow-md p-2 justify-center">
            <TbInfoSquareRounded className="text-2xl" />
            <button>درباره ما</button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col px-5 pt-3">
          <div className="flex flex-row justify-between items-center">
            <button
              className={`${
                isOpen
                  ? "shadow-lg z-40 rounded-xl pr-9 bg-gray text-primary"
                  : "shadow-lg z-40 rounded-xl bg-red text-primary"
              }`}
            >
              <div className="bg-red rounded-xl">
                <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
              </div>
            </button>
            <div
              className="p-1 flex flex-row z-40 items-center justify-center 
                space-x-2 rtl:space-x-reverse"
            >
              <BiRestaurant className="text-red text-xl" />
              <p className=" text-text text-md">رستوران گل یخ</p>
            </div>
            <button
              onClick={() => router.push("/payment")}
              className="text-2xl shadow-sm h-12 w-12 relative shadow-red bg-red rounded-xl text-primary"
            >
              <div className="flex justify-center items-center">
                <div className="text-base absolute right-1 bottom-1">
                  <p className="bg-primary shadow-md rounded-md w-6 font-bold h-6 text-red absolute -right-3 -bottom-3">
                    {Intl.NumberFormat("fa").format(order)}
                  </p>
                </div>
                <MdShoppingBasket className="" />
              </div>
            </button>
          </div>
        </div>
        <div className="p-5 ">
          <div className="w-full  h-36 bg-red rounded-2xl relative">
            <img
              className="absolute top-2 rtl:left-0 ltr:right-0"
              src="/top.png"
              alt=""
              width={270}
              height={100}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="pb-5 pr-4 text-xl text-text">دسته بندی ها</div>
          </div>
          <div className="overflow-scroll w-screen scrollbar-hide">
            <div className="inline-grid gap-3 grid-cols-fill px-2 w-[1000px]">
              {Object.entries(sectionList.category).map(
                ([name, item], index) => (
                  <button
                    key={index}
                    onClick={() => {
                      dispatch(
                        setCategory(index === choose ? [] : item.subSection)
                      );
                      chooseHandler(index === choose ? -1 : index);
                    }}
                    className={`flex h-10 flex-row  rounded-2xl space-x-2 rtl:space-x-reverse
                           items-center justify-center shadow-sm border border-text/10 ${[
                             index === choose
                               ? "bg-card/80 text-white shadow-sm shadow-white"
                               : "bg-primary text-white ",
                           ]}`}
                  >
                    <div
                      className={`${[
                        index !== choose
                          ? "text-red text-2xl"
                          : "text-red text-2xl",
                      ]}  w-8 h-8 items-center justify-center flex`}
                    >
                      <div className=" text-white justify-center flex items-center w-full h-full">
                        {(item.icon === "pizza" && <LocalPizzaIcon />) ||
                          (item.icon === "kabab" && <KebabDiningIcon />) ||
                          (item.icon === "drink" && <WineBarIcon />) ||
                          (item.icon === "sandwich" && <LunchDiningIcon />) ||
                          (item.icon === "dessert" && <IcecreamIcon />) ||
                          (item.icon === "traditional" && <DinnerDiningIcon />)}
                      </div>
                    </div>
                    <div className="p-2 ">
                      <p className="text-bold">
                        {CategoryEnum[parseInt(name)]}
                      </p>
                    </div>
                  </button>
                )
              )}
            </div>
          </div>
        </div>
        <div className="w-full mt-5 space-y-5">
          {Object.values(sectionList.sectionOnMain || FoodEnum).map((item) => (
            <FoodSection
              data={foods.filter((food) => food.foodEnum === item)}
              title={item.toString()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
