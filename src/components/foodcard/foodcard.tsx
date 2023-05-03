import { useRouter } from "next/router";
import { Key } from "react";

export default function Food(props: {
  img?: any;
  title?: string;
  subtitle?: string;
  price?: number;
  id: Key;
  overflowY?: string;
}) {
  const router = useRouter();

  return (
    <div className="min-w-36">
      <button
        onClick={() => router.push(`foodinfo/${props.id}`)}
        className="flex h-52 flex-col w-full bg-primary rounded-3xl shadow-xl shadow-text/30 items-center justify-center"
      >
        <div className="w-22 h-22 items-center flex justify-center flex-col-reverse">
          <img src={props.img} alt="Loading..." width={100} height={100} />
        </div>
        <div className="flex p-1 flex-col  items-center justify-center ">
          <p className="text-text">{props.title}</p>
          <small className="p-1 text-text">{props.subtitle}</small>
          <div className="flex space-x-1 flex-row items-center rtl:space-x-reverse">
            <h4 className="text-text">
              {Intl.NumberFormat("fa").format(props.price || NaN)}
            </h4>

            <small className="text-green">تومان</small>
          </div>
        </div>
      </button>
    </div>
  );
}
