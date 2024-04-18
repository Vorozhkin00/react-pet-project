'use client';

import React from "react";
import {Search02Icon} from "@/libs/design-system/icons/search02Icon";
import {UserCircleIcon} from "@/libs/design-system/icons/userCircleIcon";
import {ShoppingBagIcon} from "@/libs/design-system/icons/shoppingBagIcon";

export default function Layout({children}: { children: React.ReactNode }) {
  return (
    <div>
      <div className='h-[60px] w-full px-40 flex justify-between'>
        <button className='text-body1Bold'>
          LoftlyLove.
        </button>
        <div className='flex gap-10'>
          <button><b>Home</b></button>
          <button>Shop</button>
          <button>Product</button>
          <button>Contact Us</button>
        </div>
        <div className='flex self-center gap-4'>
          <button>
            <Search02Icon/>
          </button>
          <button>
            <UserCircleIcon/>
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