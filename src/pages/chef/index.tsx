import { FaRegListAlt } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { useAppSelector } from "../../../store/hooks";

function ChefSelected(props: {
  count: Array<number>;
  title: Array<string>;
  table: number;
}) {
  function StringFinder(title: Array<string>) {
    var len = title.length;
    return 43 - len;
  }

  return (
    <div className="w-full h-fit flex-col p-3">
      <div className="bg-primary rounded-t-xl">
        <div className="h-10 bg-red flex rounded-t-md justify-center items-center mb-3 text-primary">
          میز {Intl.NumberFormat("fr").format(props.table)}
        </div>
        <div className="h-fit flex flex-col space-y-3 ">
          <div className="flex flex-row justify-evenly">
            <div>
              {props.title.map((i) => (
                <div>{i}</div>
              ))}
            </div>
            <div>
              {props.title.map(() => (
                <div>{".".repeat(StringFinder(props.title))}</div>
              ))}
            </div>
            <div>
              {props.count.map((e) => (
                <div className="flex flex-row justify-around space-x-1 space-x-reverse">
                  <div>{Intl.NumberFormat("fa").format(e)}</div>
                  <div>عدد</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="border p-2 border-text/30 rounded-md space-x-2 space-x-reverse flex flex-row justify-center items-center">
              <div>
                <MdCheckBoxOutlineBlank />
              </div>
              <p className="font-bold">آماده شد</p>
            </div>
          </div>
          <div className="bg-mask h-5 w-full"></div>
        </div>
      </div>
    </div>
  );
}

export default function ChefPage() {
  const chefItems = useAppSelector((item) => item.chef);

  return (
    <div className="h-screen w-screen  bg-lightGray overflow-y-auto">
      <div className="h-full w-full">
        <div className="justify-center absolute w-full h-12 items-center space-x-2 space-x-reverse shadow-md bg-primary flex flex-row">
          <div className="absolute left-3 bg-gray p-2 rounded-md shadow-md">
            <BsFilter className="text-xl " />
          </div>
          <div>
            <FaRegListAlt className="text-xl text-red" />
          </div>
          <p className="font-extrabold">لیست سفارشات غذا</p>
        </div>
        <div className="h-12"></div>
        {chefItems.map((items) => (
            <ChefSelected
              title={items.title}
              count={items.count}
              table={items.table}
            />
        ))}
      </div>
    </div>
  );
}
