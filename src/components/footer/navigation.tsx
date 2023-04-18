import { HiHome } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";
import { MdShoppingBasket } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import {FiSearch} from "react-icons/fi"

import { Dispatch, SetStateAction, useState } from "react";

export default function Footer(props: {
  activeButtonIndex: number;
  activeButtonIndexHandler: Dispatch<SetStateAction<number>>;
}) {
  const [favModal, favModalHandler] = useState(false);

  const div = "flex flex-row rtl:space-x-reverse"
  return (
    <div className="flex  justify-around space-x-7 fixed w-full h-14 bottom-0 left-0">
      
        <div className={`${div} w-full bg-white rounded-se-2xl `}>

        {[
          {
            key: 0,
            icon: <HiHome />,
            onClick: () => props.activeButtonIndexHandler(0),
          },

          {
            key: 1,
            icon: <AiFillHeart />,
            onClick: () => {
              favModalHandler(true), props.activeButtonIndexHandler(1);
            },
          },
        ].map((e) => (
          <button
            key={0}
            onClick={e.onClick}
            className="w-full flex justify-center items-end"
          >
            <div
              className={`flex rounded-2xl  justify-center items-center p-2 ${
                props.activeButtonIndex === e.key
                  ? "text-4xl animate-up bg-primary text-white"
                  : "text-3xl text-darkgray "
              }`}
            >
              {e.icon}
            </div>
          </button>
        ))}
        </div>
        <div className={`${div} `}> 
        {[

          {
            key: 2,
            icon: <FiSearch />,
            onClick: () => {
              favModalHandler(true), props.activeButtonIndexHandler(2);
            },
          },


        ].map((e) => (
          <button
            key={0}
            onClick={e.onClick}
            className="w-full flex justify-center"
          >
            <div
              className={`flex rounded-2xl justify-center items-center p-2 ${
                props.activeButtonIndex === e.key
                  ? "text-4xl animate-up bg-primary text-white"
                  : "text-3xl text-darkgray bg-white rounded-xl"
              }`}
            >
              {e.icon}
            </div>
          </button>
        ))}
        </div>
        <div className={`${div} w-full bg-white rounded-tl-2xl `}>
        {[
          {
            key: 3,
            icon: <IoMdPerson />,
            onClick: () => {
              favModalHandler(true), props.activeButtonIndexHandler(3);
            },
          },
          {
            key: 4,
            icon: <MdShoppingBasket />,
            onClick: () => props.activeButtonIndexHandler(4),
          },
        ].map((e) => (
          <button
            key={0}
            onClick={e.onClick}
            className="w-full flex justify-center items-end"
          >
            <div
              className={`flex rounded-2xl justify-center items-center p-2 ${
                props.activeButtonIndex === e.key
                  ? "text-4xl animate-up bg-primary text-white"
                  : "text-3xl text-darkgray "
              }`}
            >
              {e.icon}
            </div>
          </button>
        ))}
        </div>
      </div>

  );
}
