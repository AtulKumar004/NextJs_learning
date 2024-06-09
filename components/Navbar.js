import React from "react";
import Logo from "../assets/logo.png";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav class="bg-transparent  ">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between">
          <div class="flex flex-1 items-center justify-between sm:items-stretch ">
            <div class="flex flex-shrink-0 gap-4 items-center text-white font-medium text-3xl">
              <Link href="/">
                <Image
                  class="h-32 w-auto"
                  src={Logo}
                  alt="Your Company"
                  priority
                />
              </Link>
              Next Level Food
            </div>
            <div class="hidden sm:ml-6 sm:block items-center mx-0 my-auto ">
              <div class="flex space-x-4 ">
                <Link
                  href="/meals"
                  class="rounded-md px-3 py-2 font-medium text-white  text-2xl "
                  aria-current="page"
                >
                  Meals
                </Link>
                <Link
                  href="/community"
                  class="rounded-md px-3 py-2  font-medium text-white text-2xl  "
                >
                  Cummunity
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
