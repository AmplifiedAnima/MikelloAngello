import { ListItem } from "./ui/list-item";
import { menuItems } from "../utils/menu-items-header";
export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-black backdrop-blur-sm text-white z-50 flex">
      <div className="container   py-3  ">
        <ul className="font-sans font-bold flex  lg:flex-row-start-1 md:text-3xl   justify-end  w-full gap-2 my-4    backdrop-blur-sm rounded-lg ">
          {" "}
          {menuItems.map((menuItem) => (
            <ListItem
              key={menuItem.title}
              title={menuItem.title}
              href={menuItem.href}
              className="text-white lg:px-24  "
            >
              {menuItem.description}
            </ListItem>
          ))}
        </ul>
      </div>
    </header>
  );
};
