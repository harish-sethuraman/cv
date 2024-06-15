import clsx from "clsx";
import { Lato } from "next/font/google";
import { HTMLProps } from "react";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Name = ({ ...props }: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h1
      className={clsx(
        lato.className,
        "text-2xl transition-all font-medium mt-4 sm:text-center sm:text-4xl"
      )}
      {...props}
    >
      {props.children}
    </h1>
  );
};

export default Name;
