import {forwardRef, memo, Ref, SVGProps} from "react";


const Icon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      ref={ref}
      {...props}
    >
      <path d="M6.66669 16H25.3334" stroke="#6C7275" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66669 16L14.6667 24" stroke="#6C7275" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round"/>
      <path d="M6.66669 16L14.6667 8" stroke="#6C7275" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

export const ArrowLeftIcon = memo(Icon)

