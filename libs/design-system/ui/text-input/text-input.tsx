import {forwardRef} from "react";
import {TextInputProps} from "@/libs/design-system/ui/text-input/text-input.types";
import clsx from "clsx";

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({className, placeholder, ...props}, ref) => {
    return (
      // <input type='text'
      //        className={clsx('text-body2 outline-0 focus:transition-all focus:border-b focus:border-b-neutral-700 w-full pb-3.5 border-b border-b-neutral-300', className)}
      //        ref={ref}
      //        {...props}
      // />
      <div className="relative h-11 w-full min-w-[200px]">
        <input
          type='text'
          ref={ref}
          placeholder={placeholder}
          {...props}
          className="peer h-full w-full border-b border-neutral-300 text-neutral-400 outline outline-0 transition-all disabled:text-neutral-400 text-body2
                disabled:cursor-not-allowed disabled:bg-transparent placeholder:opacity-0 focus:placeholder:opacity-100"/>
        <label
          className="after:content[''] pointer-events-none absolute left-0 -top-3.5 flex h-full w-full !overflow-visible truncate text-caption1 text-neutral-700 transition-all after:absolute after:-bottom-3.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:transition-transform after:duration-300 peer-placeholder-shown:text-body2 peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-neutral-400 peer-focus:text-caption1 peer-focus:text-primary peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-neutral-400 peer-disabled:peer-placeholder-shown:text-neutral-400">
          {placeholder}
        </label>
      </div>
    )
  }
)