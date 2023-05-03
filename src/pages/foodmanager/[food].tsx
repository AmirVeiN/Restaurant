import { useRouter } from "next/router";
import { useAppSelector } from "../../../store/hooks";

export default function FoodChanger() {
  const router = useRouter();
  const foods = useAppSelector((store) => store.foods);
  const { food } = router.query;
  if (typeof food === "string") {
    const data = foods.find((f) => f.id === parseInt(food));
    if (data !== undefined)
      return (
        <div className="h-screen w-screen">
          <div>{}</div>
        </div>
      );
  }
  return;
}
