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
        d="M17.5588 19.0488C16.5654 16.3918 14.0036 14.5 11 14.5C7.99638 14.5 5.4346 16.3918 4.44117 19.0488M17.5588 19.0488C19.6672 17.2154 21 14.5134 21 11.5C21 5.97715 16.5228 1.5 11 1.5C5.47715 1.5 1 5.97715 1 11.5C1 14.5134 2.33285 17.2154 4.44117 19.0488M17.5588 19.0488C15.8031 20.5756 13.5095 21.5 11 21.5C8.49052 21.5 6.19694 20.5756 4.44117 19.0488M14 8.5C14 10.1569 12.6569 11.5 11 11.5C9.34315 11.5 8 10.1569 8 8.5C8 6.84315 9.34315 5.5 11 5.5C12.6569 5.5 14 6.84315 14 8.5Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>

  )
);

export const UserCircleIcon = memo(Icon)