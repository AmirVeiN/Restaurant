import { useRouter } from "next/router";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import Food from "@/components/foodcard/foodcard";
import { useAppSelector } from "../../store/hooks";

export default function FoodsList() {
  const foods = useAppSelector((store) => store.foods);
  const router = useRouter();
  const { more } = router.query;

  const data = foods.filter((food) => food.foodEnum === more);

  return (
    <div className="h-screen bg-back">
      <div className="flex w-full p-6 flex-row justify-between items-center ">
        <button
          onClick={() => router.push("/")}
          className="text-xl shadow-md p-3 rounded-xl text-text/80 bg-primary"
        >
          <MdKeyboardArrowRight />
        </button>
        <div className="shadow-md p-3 px-6 rounded-xl bg-primary">
          {router.query.more} ها
        </div>
        <button
          onClick={() => router.push("/payment")}
          className="text-xl shadow-md p-3 rounded-xl text-text/80 bg-primary"
        >
          <TiShoppingCart />
        </button>
      </div>

      <div className="p-5 grid grid-cols-fit gap-5">
        {data.map((item) => (
          <Food
            id={item.id}
            img={item.img}
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
