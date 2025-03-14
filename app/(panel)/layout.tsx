'use client';

import React from "react";
import {Search02Icon} from "@/libs/design-system/icons/search02Icon";
import {UserCircleIcon} from "@/libs/design-system/icons/userCircleIcon";
import {ShoppingBagIcon} from "@/libs/design-system/icons/shoppingBagIcon";
import Link from "next/link";

export default function Layout({children}: { children: React.ReactNode }) {
  return (
    <div>
      <div className='h-[60px] w-full px-40 flex justify-between'>
        <button className='text-body1Bold'>
          <Link href="/">
            LoftlyLove.
          </Link>
        </button>
        <div className='flex gap-10'>
          <button>
            <Link href="/">Home</Link>
          </button>
          <button>
            <Link href='/shop'>Shop</Link>
          </button>
          <button>Product</button>
          <button>Contact Us</button>
        </div>
        <div className='flex self-center gap-4'>
          <button>
            <Search02Icon/>
          </button>
          <button>
            <Link href="../auth/sign-in"><UserCircleIcon/></Link>
          </button>
          <button>
            <ShoppingBagIcon/>
          </button>
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}