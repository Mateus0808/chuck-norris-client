import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "peer h-full w-full border-b bg-transparent pt-4 pb-1.5 font-ibm-plex-serif text-16 placeholder:text-16 font-normal outline outline-0 transition-all placeholder-shown:border-gray-600 focus:border-blue-500 focus:outline-0 disabled:border-0 disabled:bg-blue-50 placeholder:opacity-0 focus:placeholder:opacity-100",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
