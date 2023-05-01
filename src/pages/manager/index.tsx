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
      <div className=" w-full h-full">
        <div className="pt-5 pr-6 grid grid-cols-fit gap-y-8 ">
          <div className="h-64 w-40 bg-card rounded-xl shadow-md shadow-text">
            <div className=" w-full h-2/3 flex justify-center items-center">
              <img
                className="shadow-lg "
                src="/add2.png"
                alt="Loading..."
                width={300}
                height={200}
              />
            </div>
            <div className="h-1/3 flex flex-col justify-center items-center">
              <div className="flex justify-center items-center flex-col shadow-sm shadow-text bg-red p-1 px-2 rounded-xl text-primary font-bold">
                <p> حذف / اضافه </p>
                <p> محصول</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
