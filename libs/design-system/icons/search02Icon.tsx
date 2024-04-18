import {forwardRef, memo, Ref, SVGProps} from "react";


const Icon = forwardRef(
  (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M17.5 18L21 21.5M20 11C20 5.75329 15.7467 1.5 10.5 1.5C5.25329 1.5 1 5.75329 1 11C1 16.2467 5.25329 20.5 10.5 20.5C15.7467 20.5 20 16.2467 20 11Z"
        stroke="#141718" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

export const Search02Icon = memo(Icon)

