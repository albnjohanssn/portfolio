"use client"

import Image from "next/image"
import Link from "next/link"
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import { JSX } from 'react'

export default function Navbar(): JSX.Element {
  const pathname = usePathname()

  const getLinkClasses = (path: string): string => {
    const baseClasses =
      "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
    const activeClasses = "border-lime-500 text-zinc-900"
    const inactiveClasses =
      "border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-700"

    return pathname === path
      ? `${baseClasses} ${activeClasses}`
      : `${baseClasses} ${inactiveClasses}`
  }

  const getMobileLinkClasses = (path: string): string => {
    const baseClasses =
      "block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
    const activeClasses = "border-lime-500 bg-indigo-50 text-lime-700"
    const inactiveClasses =
      "border-transparent text-zinc-500 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-700"

    return pathname === path
      ? `${baseClasses} ${activeClasses}`
      : `${baseClasses} ${inactiveClasses}`
  }

  return (
    <Disclosure as="nav" className="bg-zinc-50/75 backdrop-blur-sm shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex shrink-0 items-center">
              <Image
                alt="Your Company"
                src="/profile_picture.jpg"
                width={32} // or the appropriate width in pixels
                height={32} // or the appropriate height in pixels
                className="rounded-full"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className={getLinkClasses("/")}>
                Home
              </Link>
              <Link href="/about" className={getLinkClasses("/about")}>
                About
              </Link>
              <Link href="/projects" className={getLinkClasses("/projects")}>
                Projects
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pb-3 pt-2">
          <Link href="/">
            <DisclosureButton as="a" className={getMobileLinkClasses("/")}>
              Home
            </DisclosureButton>
          </Link>
          <Link href="/about">
            <DisclosureButton as="a" className={getMobileLinkClasses("/about")}>
              About
            </DisclosureButton>
          </Link>
          <Link href="/projects">
            <DisclosureButton as="a" className={getMobileLinkClasses("/projects")}>
              Projects
            </DisclosureButton>
          </Link>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
