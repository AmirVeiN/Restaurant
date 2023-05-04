import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TiStar } from "react-icons/ti";
import { AiFillFire } from "react-icons/ai";
import { BsFillClockFill } from "react-icons/bs";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useState } from "react";
import { foodChanger } from "../../../store/foods/slice";

export default function FoodChanger() {
  interface FormDataType {
    title: string;
    subtitle: string;
    price: number;
    cal: number;
    time: number;
    desc: string;
  }
  const formData: FormDataType = {
    title: "",
    subtitle: "",
    desc: "",
    price: 0,
    cal: 0,
    time: 0,
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setResponse({ ...response, [name]: value });
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const dispach = useAppDispatch();
  const [response, setResponse] = useState<FormDataType>(formData);
  const router = useRouter();
  const foods = useAppSelector((store) => store.foods);
  const { food } = router.query;

  if (typeof food === "string") {
    const data = foods.find((f) => f.id === parseInt(food));
    if (data !== undefined)
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
          <div className=" bg-primary w-full h-full rounded-t-[60px] flex flex-col p-5 items-center justify-start ">
            <form
              onSubmit={onSubmitHandler}
              className="w-full h-full flex flex-col justify-around items-center"
            >
              <div className="w-[80%] h-[10%] justify-center items-center flex flex-row space-x-3 space-x-reverse">
                <label htmlFor="title">اسم غذا</label>
                <input
                  className="w-44 h-12 rounded-2xl focus:border-red focus:ring-0"
                  maxLength={24}
                  onChange={(e) => inputChangeHandler(e)}
                  placeholder={data.title}
                  name="title"
                  type="text"
                  id="title"
                />
              </div>
              <div className="w-[80%] h-[10%] justify-center items-center flex flex-row space-x-3 space-x-reverse">
                <label htmlFor="subtitle">توضیح مختصر</label>
                <input
                  className="w-44 h-12 rounded-2xl focus:border-red focus:ring-0"
                  placeholder={data.subtitle}
                  onChange={(e) => inputChangeHandler(e)}
                  maxLength={30}
                  type="text"
                  name="subtitle"
                  id="subtitle"
                />
              </div>
              <div className="w-[80%] h-[10%] justify-center items-center flex flex-row space-x-3 space-x-reverse">
                <label htmlFor="price">قیمت</label>
                <input
                  className="w-44 h-12 rounded-2xl focus:border-red focus:ring-0"
                  placeholder={`${data.price} هزار تومان`}
                  maxLength={9}
                  type="number"
                  onChange={(e) => inputChangeHandler(e)}
                  id="price"
                  name="price"
                />
              </div>
              <div className="w-[80%] h-[10%] justify-center items-center flex flex-row space-x-3 space-x-reverse">
                <label htmlFor="cal">کالری</label>
                <input
                  className="w-44 h-12 rounded-2xl focus:border-red focus:ring-0"
                  placeholder={`${data.cal.toString()} کیلوکالری`}
                  maxLength={9}
                  type="number"
                  onChange={(e) => inputChangeHandler(e)}
                  id="cal"
                  name="cal"
                />
              </div>
              <div className="w-[80%] h-[10%] justify-center items-center flex flex-row space-x-3 space-x-reverse">
                <label htmlFor="time">کالری</label>
                <input
                  className="w-44 h-12 rounded-2xl focus:border-red focus:ring-0"
                  placeholder={`${data.time} دقیقه`}
                  maxLength={9}
                  type="number"
                  id="time"
                  onChange={(e) => inputChangeHandler(e)}
                  name="time"
                />
              </div>
              <div className="w-[80%] h-[10%] justify-center items-center flex flex-row space-x-3 space-x-reverse">
                <label htmlFor="desc">توضیحات</label>
                <input
                  className="w-48 h-12 rounded-2xl focus:border-red focus:ring-0"
                  placeholder={data.desc}
                  maxLength={62}
                  id="desc"
                  onChange={(e) => inputChangeHandler(e)}
                  name="desc"
                  type="text"
                />
              </div>
              <input
                onClick={() => (
                  dispach(foodChanger({ id: data.id, title: response.title })), router.push("/")
                )}
                value="ثبت تغییرات"
                className="text-primary  rounded-xl w-72 h-12 border flex justify-center items-center bg-red border-red"
                type="submit"
              />
            </form>
          </div>
        </div>
      );
  }
  return;
}
