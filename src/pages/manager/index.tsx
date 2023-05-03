import { useRouter } from "next/router";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Manager() {
  const router = useRouter();

  return (
    <div className="w-full h-full">
      <div className="w-full h-14 relative bg-primary shadow-md">
        <button
          onClick={() => router.push("/")}
          className="absolute bg-gray shadow-md p-2 rounded-md top-2 right-2"
        >
          <MdKeyboardArrowRight className="text-2xl" />
        </button>
        <div className="flex justify-center items-center h-full">
          <p className="font-bold">مدیریت رستوران</p>
        </div>
      </div>
      <div className="w-full h-[800px] overflow-y-scroll scrollbar-hide">
        <div className="pt-5 pb-5 flex flex-col space-y-6 justify-center items-center">
          <div className="h-72 w-80 flex flex-col space-y-6 bg-primary rounded-xl shadow-md shadow-text">
            <div className="w-full  flex justify-center items-center">
              <img
                className=""
                src="/add3.png"
                alt="Loading..."
                width={210}
                height={200}
              />
            </div>
            <div className=" flex justify-center items-center">
              <button
                onClick={() => router.push("/foodmanager")}
                className="flex justify-center items-center shadow-sm shadow-text bg-bestyellow p-2 px-4 rounded-xl text-bestgray font-bold"
              >
                <p> حذف / اضافه : محصول</p>
              </button>
            </div>
          </div>
          <div className="h-72 w-80 flex flex-col space-y-6 bg-primary rounded-xl shadow-md shadow-text">
            <div className="w-full  flex justify-center items-center">
              <img
                className=""
                src="/order.png"
                alt="Loading..."
                width={220}
                height={200}
              />
            </div>
            <div className=" flex justify-center items-center">
              <button className="flex justify-center items-center shadow-sm shadow-text bg-bestgreen p-2 px-4 rounded-xl text-bestgray font-bold">
                <p> سفارشات جاری</p>
              </button>
            </div>
          </div>
          <div className="h-72 w-80 flex flex-col space-y-6 bg-primary rounded-xl shadow-md shadow-text">
            <div className="w-full  flex justify-center items-center">
              <img
                className=""
                src="/amar1.png"
                alt="Loading..."
                width={200}
                height={200}
              />
            </div>
            <div className=" flex justify-center items-center">
              <button className="flex justify-center items-center shadow-sm shadow-text bg-bestblue p-2 px-4 rounded-xl text-primary font-bold">
                <p>آمار و ارقام محصولات</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
