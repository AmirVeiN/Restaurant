import { MdKeyboardArrowRight } from "react-icons/md";

export default function Manager() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-14 relative bg-primary shadow-md">
        <div className="absolute bg-gray shadow-md p-2 rounded-md top-2 right-2">
          <MdKeyboardArrowRight className="text-2xl"/>
        </div>
        <div className="flex justify-center items-center h-full">
            <p className="font-bold">مدیریت رستوران</p>
        </div>
      </div>
      <div className=" w-full h-full">
        <div className="pt-5  sp grid grid-cols-fill gap-y-3">
            <div className="h-64 w-36 bg-card"></div>
            <div className="h-64 w-36 bg-card"></div>
            <div className="h-64 w-36 bg-card"></div>
            <div className="h-64 w-36 bg-card"></div>

        </div>
      </div>
    </div>
  );
}
