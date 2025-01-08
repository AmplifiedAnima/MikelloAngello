import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

import featherIcon from "../assets/2730123_feather_harry_outline_potter_quill_icon.png";
import { ListItem } from "./ui/list-item";
import { menuItems } from "../utils/menu-items-header";
export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-zinc-800 backdrop-blur-sm text-white z-50">
      <div className="container mx-auto px-4 py-3">
        <NavigationMenu className="py-4 px-8">
          <NavigationMenuList>
            <NavigationMenuItem className="">
              <NavigationMenuTrigger className="text-purple-800 font-bold text-lg p-6 bg-[#f9f0fa]">
                <img src={featherIcon} width={40} />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <ul className="grid w-[200px] gap-2 p-2 md:w-[100px] md:grid-cols-1 lg:w-[200px] bg-zinc-800/95 backdrop-blur-sm rounded-lg ">
                  {" "}
                  {menuItems.map((menuItem) => (
                    <ListItem
                      key={menuItem.title}
                      title={menuItem.title}
                      href={menuItem.href}
                      className="text-purple-400 "
                    >
                      {menuItem.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
