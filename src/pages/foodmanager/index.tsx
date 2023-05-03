import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/router";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import KebabDiningIcon from "@mui/icons-material/KebabDining";
import WineBarIcon from "@mui/icons-material/WineBar";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import IcecreamIcon from "@mui/icons-material/Icecream";
import { Key } from "react";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { removeFood } from "../../../store/foods/slice";

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
              <p className="text-text font-extrabold text-2xl">حذف شدن محصول</p>
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
                  dispatch(removeFood(props.id));
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

function FoodManage(props: {
  img?: any;
  title?: string;
  subtitle?: string;
  price?: number;
  id: number;
  handler: () => void;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <div className="h-fit w-fit ">
      <div className="flex h-52 flex-col w-32 -space-y-3 bg-primary rounded-2xl relative shadow-lg shadow-text items-center justify-center">
        <div className="w-22 h-1/2 items-center flex justify-center flex-col-reverse">
          <img src={props.img} alt="Loading..." width={100} height={100} />
        </div>
        <div className="flex p-1 flex-col h-1/2 items-center justify-center ">
          <p className="text-text">{props.title}</p>
          <small className="p-1 text-text">{props.subtitle}</small>
          <div className="flex space-x-1 flex-row items-center rtl:space-x-reverse">
            <h4 className="text-text">
              {Intl.NumberFormat("fa").format(props.price || NaN)}
            </h4>
            <small className="text-green">تومان</small>
          </div>
        </div>
        <div className="bg-red rounded-2xl w-24 h-10 absolute justify-around items-center flex flex-row -bottom-6">
          <MdEdit onClick={()=> router.push(`/foodmanager/${props.id}`)} className="text-xl text-primary" />
          <FaTrash onClick={() => props.handler()} className="text-primary text-md" />
        </div>
      </div>
    </div>
  );
}

function CategoryMenu(props: { opener: boolean; title: string; icon: string }) {
  return (
    <button
      className={` h-12 flex-row duration-500 delay-500 flex ease-in-out${
        props.opener
          ? " w-32 duration-500 delay-500 justify-between px-3 pl-4"
          : " w-12 justify-between pr-3"
      } items-center text-3xl`}
    >
      <div>
        {(props.icon === "pizza" && <LocalPizzaIcon />) ||
          (props.icon === "kabab" && <KebabDiningIcon />) ||
          (props.icon === "drink" && <WineBarIcon />) ||
          (props.icon === "sandwich" && <LunchDiningIcon />) ||
          (props.icon === "dessert" && <IcecreamIcon />) ||
          (props.icon === "traditional" && <DinnerDiningIcon />)}
      </div>
      <div
        className={`text-base ease-in-out ${
          props.opener
            ? "opacity-100 duration-700 delay-700"
            : "opacity-0 translate-x-14 duration-300 delay-300"
        }`}
      >
        {props.title}
      </div>
    </button>
  );
}

export default function FoodManager() {
  const [isOpen, setOpen] = useState(false);
  const category = useAppSelector((item) => item.core.category);
  const foods = useAppSelector((store) => store.foods);
  const router = useRouter();
  const [choose, chooseHandler] = useState("کباب");
  const data = foods.filter((food) => food.foodEnum === choose);
  const [show, showHandler] = useState(-1);

  return (
    <div className="w-screen h-screen bg-back1">
      <div className="w-full h-full">
        <button
          onClick={() => router.push("/manager")}
          className={`z-30 bg-primary rounded-lg shadow-md shadow-text w-10 h-10 duration-500 delay-500 absolute left-3 top-3 flex justify-center items-center text-3xl`}
        >
          <div>
            <MdKeyboardArrowLeft />
          </div>
        </button>
        <div
          className={`z-20 duration-500 delay-500 ease-in-out ${
            isOpen ? "w-32" : "w-12"
          } h-fit flex justify-start absolute top-3 right-2 items-start shadow-md shadow-text rounded-lg flex-col space-y-3 bg-primary`}
        >
          <div
            className={` h-12 flex-row duration-500 delay-500 flex ease-in-out${
              isOpen
                ? " w-32 duration-500 delay-500 justify-between pl-4"
                : " w-12 justify-between "
            } items-center text-3xl`}
          >
            <button>
              <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
            </button>
            <div
              className={`text-base ease-in-out ${
                isOpen
                  ? "opacity-100 duration-700 delay-700"
                  : "opacity-0 translate-x-14 duration-300 delay-300"
              }`}
            >
              منو
            </div>
          </div>
          {Object.entries(category).map(([name, item], index) => (
            <div
              onClick={() => chooseHandler(item.subSection[0])}
              className={`${item.subSection[0] === choose && "bg-red"}`}
            >
              <CategoryMenu
                opener={isOpen}
                title={item.subSection[0]}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
        <div className=" h-full w-full flex pt-16 overflow-y-scroll pr-20 justify-end">
          <div className="gap-y-9 w-full h-full grid grid-cols-fit ">
            {data.map((item) => (
              <FoodManage
                id={item.id}
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
                price={item.price}
                handler={() => showHandler(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
      <ReadyModal id={show} onClose={() => showHandler(-1)} />
    </div>
  );
}
