import { useState } from "react";

import Image from "next/image";
import { FoodSection } from "../section/section";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { FoodEnum } from "../../../store/foods/slice";
import { CategoryEnum, setCategory } from "../../../store/core/slice";
import { MdFastfood } from "react-icons/md";

export default function Home() {
  const [choose, chooseHandler] = useState(-1);

  const dispatch = useAppDispatch();
  const foods = useAppSelector((store) => store.foods);
  const sectionList = useAppSelector((store) => store.core);
  return (
    <>
      <div className="p-5 ">
        <div className="w-full  h-36 bg-red rounded-2xl relative">
          <Image
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
          <div className="pb-3 px-2 text-xl text-text">دسته بندی ها</div>
        </div>
        <div className="overflow-scroll w-screen scrollbar-hide">
          <div className="inline-grid gap-3 grid-cols-fill px-2 w-[1000px]">
            {Object.entries(sectionList.category).map(([name, item], index) => (
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
                    {<MdFastfood />}
                  </div>
                </div>
                <div className="p-2 ">
                  <p className="text-bold">{CategoryEnum[parseInt(name)]}</p>
                </div>
              </button>
            ))}
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
    </>
  );
}
