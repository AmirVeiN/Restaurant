import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/router";
import { useAppSelector } from "../../../store/hooks";

export default function payment() {
  const foods = useAppSelector((store) => store.foods);
  const router = useRouter();
  const { more } = router.query;

  const data = foods.filter((food) => food.foodEnum === more);

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-row justify-between items-center p-5">
        <p>لیست سفارشات</p>
        <button
          onClick={() => router.push("/")}
          className="text-xl shadow-md rounded-xl p-3 text-text/80 bg-primary"
        >
          <MdKeyboardArrowLeft />
        </button>
      </div>
      <div></div>
    </div>
  );
}
