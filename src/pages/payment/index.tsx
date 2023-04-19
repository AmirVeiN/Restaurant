import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/router";
import { useAppSelector } from "../../../store/hooks";
import Image from "next/image";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

export default function payment() {
  const orderItems = useAppSelector((item) => item.order);
  const router = useRouter();
  const { more } = router.query;

  console.log(orderItems);

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex flex-row justify-between items-center p-5">
        <p className="text-bold text-2xl">لیست سفارشات</p>
        <button
          onClick={() => router.push("/")}
          className="text-xl shadow-md rounded-xl p-3 text-text/80 bg-primary"
        >
          <MdKeyboardArrowLeft />
        </button>
      </div>
      <div className="h-5/6 flex flex-col">
        <div className="h-full w-full ">
          <div className="flex flex-col h-full  space-y-6">
            {orderItems.map((item) => (
              <div className="flex justify-around h-24 w-full flex-row">
                <Image
                  src={item.img}
                  alt="Loading..."
                  width={100}
                  height={10}
                />
                <div className="flex flex-col items-center justify-center space-y-6 w-full">
                  <div>{item.title}</div>
                  <div className="flex flex-row">
                    <div>{Intl.NumberFormat("fa").format(item.price)}</div>
                    <div>
                      <p>تومان</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full h-full">
                  <div
                    className="flex  flex-row p-1 justify-center space-x-5 bg-gray  rounded-lg
                rtl:space-x-reverse items-center"
                  >
                    <button
                      className="text-text bg-card justify-center 
                  flex items-center h-8 w-8 rounded-lg text-xl"
                    >
                      <AiOutlinePlus />
                    </button>
                    <div>{Intl.NumberFormat("fa").format(item.count)}</div>
                    <button
                      className="text-text bg-primary justify-center
                   flex items-center h-8 w-8 rounded-lg text-xl"
                    >
                      <AiOutlineMinus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" h-2/5"></div>
    </div>
  );
}
