import {forwardRef} from "react";
import {ButtonProps} from "@/libs/design-system/ui/button/button.types";
import clsx from "clsx";
import {ButtonVariant} from "@/libs/design-system/ui/button/button.constants";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      children,
      className,
      ...rest
    },
    forwardRef
  ) => {
    return (
      <button
        className={clsx('text-buttonsS py-1.5 text-white bg-neutral-700 w-full hover:bg-neutral-200 hover:text-primary hover:border active:text-green',
          ButtonVariant[variant])}
        {...rest}
        ref={forwardRef}
      >
        {children}
      </button>
    );
  },
)