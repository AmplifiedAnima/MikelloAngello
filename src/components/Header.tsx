import { ListItem } from "./ui/list-item";
import { menuItems } from "../utils/menu-items-header";
export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-black backdrop-blur-sm text-white z-50">
      <div className="container mx-auto px-4 py-3">
        <ul className="font-sans font-bold flex flex-row-start-1 w-full gap-2 mx-24 my-4 md:w-[100px] md:grid-cols-1 lg:w-[100vw] backdrop-blur-sm rounded-lg ">
          {" "}
          <div className="px-8">
            {" "}
            <span className="text-2xl">Michał Czupa</span>
          </div>
          {menuItems.map((menuItem) => (
            <ListItem
              key={menuItem.title}
              title={menuItem.title}
              href={menuItem.href}
              className="text-white px-8"
            >
              {menuItem.description}
            </ListItem>
          ))}
        </ul>
      </div>
    </header>
  );
};
