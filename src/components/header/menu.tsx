import { BiRestaurant } from "react-icons/bi";
import { BiMenuAltRight } from "react-icons/bi";
import { MdShoppingBasket } from "react-icons/md";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <div className="flex flex-col px-5 pt-3">
      <div className="flex flex-row justify-between items-center">
        <button className="text-xl shadow-sm shadow-red p-2 rounded-xl bg-red text-primary">
          <BiMenuAltRight />
        </button>
        <div
          className="p-1 flex flex-row items-center justify-center 
                space-x-2 rtl:space-x-reverse"
        >
          <BiRestaurant className="text-red text-xl" />
          <p className=" text-text">رستوران گل یخ</p>
        </div>
        <button
          onClick={() => router.push("/payment")}
          className="text-xl shadow-sm p-2 shadow-red bg-red rounded-xl text-primary"
        >
          <MdShoppingBasket />
        </button>
      </div>
    </div>
  );
}
