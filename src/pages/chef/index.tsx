import { FaRegListAlt } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { useAppSelector } from "../../../store/hooks";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";
import { useState } from "react";



function ChefSelected(props: {
  count: Array<number>;
  title: Array<string>;
  table: number;
}) {
  const [ready, readyHandler] = useState(false);
  const toggleReady = () => {
    readyHandler((current) => !current);
  };
  return (
    <div className="w-96 h-fit p-3 ">
      <div className="bg-primary rounded-t-xl">
        <div className="h-10 bg-red flex rounded-t-md justify-center items-center mb-3 text-primary">
          میز {Intl.NumberFormat("fr").format(props.table)}
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
            <button onClick={toggleReady} className="border p-2 border-text/30 rounded-md space-x-2 space-x-reverse flex flex-row justify-center items-center">
              <div>
                <MdCheckBoxOutlineBlank />
              </div>
              <p className="font-bold">آماده شد</p>
            </button>
          </div>
          <div className="bg-mask h-5 w-full"></div>
        </div>
      </div>
    </div>
  );
}

export default function ChefPage() {
  const chefItems = useAppSelector((item) => item.chef);
  const router = useRouter();

  return (
    <div className="h-screen w-screen  bg-lightGray ">
      <div className="h-full w-full flex flex-col">
        <div className=" w-full h-16 items-center shadow-lg rounded-b-md bg-primary justify-between px-3 flex flex-row">
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
              table={items.table}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
