import Link from "next/link";
import React from "react";

// Icons imports
import {
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavigationBarAdmin() {
  return (
    <>
      <div className="flex">
        <div class="lg:hidden flex flex-col items-center w-16 h-screen overflow-hidden text-gray-200 bg-white rounded">
          <Link class="flex items-center justify-center mt-3" href="#">
            <svg
              class="w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
          </Link>
          <div class="flex flex-col items-center mt-3 border-t border-gray-300">
            <Link
              class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-neutral-700"
              href="#"
            >
              <FontAwesomeIcon icon={faTable} />
            </Link>
          </div>
          <Link
            class="flex items-center justify-center w-16 h-16 mt-auto bg-neutral-700 hover:bg-neutral-800"
            href="#"
          >
            <svg
              class="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>
        </div>

        <div class="hidden lg:flex flex-col items-center w-40 h-screen overflow-hidden text-gray-300 bg-neutral-600 rounded">
          <Link class="flex items-center w-full px-3 mt-3" href="#">
            <svg
              class="w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
            <span class="ml-2 text-sm font-bold">The App</span>
          </Link>
          <div class="w-full px-2">
            <div class="flex flex-col items-center w-full mt-3 border-t border-gray-300">
              <Link
                class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-neutral-700"
                href="#"
              >
                <FontAwesomeIcon icon={faTable} />
                <span class="ml-2 text-sm font-medium">Tables</span>
              </Link>
            </div>
          </div>
          <Link
            class="flex items-center justify-center w-full h-16 mt-auto bg-neutral-700 hover:bg-neutral-800"
            href="#"
          >
            <svg
              class="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="ml-2 text-sm font-medium">Account</span>
          </Link>
        </div>
      </div>
    </>
  );
}
