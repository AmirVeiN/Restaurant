import { useRouter } from "next/router";
import { foodType } from "../../../store/foods/slice";
import Food from "../foodcard/foodcard";

export function FoodSection(props: {
  data: foodType[];
  title: string;
  subtitle?: string;
  moreicon?: any;
}) {
  const router = useRouter();
  return (
    <div className="flex flex-col space-y-1">
      <div className="flex flex-row  justify-between px-5 items-center">
        <div className="pb-2 text-xl text-text">{props.title}</div>
        <button
          onClick={() => router.push(`/${props.title}`)}
          className="text-sm pb-3 flex h-fit rounded-xl p-2"
        >
          <p className="text-blue">موارد بیشتر ...</p>
        </button>
      </div>
      <div>{props.subtitle}</div>
      <div>{props.moreicon}</div>
      <div className="overflow-x-scroll h-fit pb-10 scrollbar-hide">
        <div className="gap-5 scrollbar-hide flex flex-row w-fit px-5">
          {props.data.map((e) => (
            <div className="w-36 z-10">
              <Food
                //TODO: SET 9 LEN TO PRICE
                id={e.id}
                img={e.img}
                title={e.title}
                subtitle={e.subtitle}
                price={e.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
