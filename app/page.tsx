import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import classNames from "classnames";

import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Navbar from "../component/Navbar";
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      
      <div className=" h-full flex-1 flex  flex-col items-center justify-center border border-red-600">
        <h1 className="text-2xl font-bold">Linking and Navigating</h1>
        <div>There are four ways to navigate between routes in Next.js:</div>
        <ul>
          <li>Using the {"<Link>"} Component</li>
          <li>Using the useRouter hook (Client Components)</li>
          <li>Using the redirect function (Server Components)</li>
          <li>Using the native History API</li>
        </ul>
        
      </div>
    </div>
  );
}
