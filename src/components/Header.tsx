import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

import featherIcon from "../assets/icons8-feather-100.png";
import { ListItem } from "./ui/ListItem";
const menuItems: { title: string; href: string; description: string }[] = [
  {
    title: "Trening personalny / Przygotowanie Motoryczne",
    href: "/offer",
    description:
      "Plan treningowy i rehabilitacja po ACLR. / Training plan and ACLR rehabilitation.",
  },
  {
    title: "O mnie / About",
    href: "/about_me",
    description:
      "Z dwoma operacjami ACLR za sobą, wiem jak ważna jest właściwa rehabilitacja i trening. / With two ACLR surgeries behind me, I know how important proper rehabilitation and training is.",
  },
];

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-zinc-800 backdrop-blur-sm text-white">
      <div className="container mx-auto px-4 py-3 flex justify-left items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className=" px-6">
              <NavigationMenuTrigger className="text-purple-800 font-bold text-lg p-4">
                <span className="px-2">
                  <img src={featherIcon} width={75} />
                </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-8 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-zinc-800/95 backdrop-blur-sm rounded-lg border border-zinc-700">
                  {menuItems.map((menuItem) => (
                    <ListItem
                      key={menuItem.title}
                      title={menuItem.title}
                      href={menuItem.href}
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
