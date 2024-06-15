import clsx from "clsx";
import { Raleway } from "next/font/google";
import { ReactNode } from "react";

const raleway = Raleway({
  weight: ["300", "500", "600", "700", "800", "400"],
  subsets: ["latin"],
});

const Company = ({
  location,
  role,
  ...props
}: {
  location: string;
  role: string;
  children: ReactNode
}) => (
  <div className="flex justify-between">
    <p className="flex sm:inline justify-center flex-col">
      <span className={clsx("text-md font-semibold")}>
        {props.children}
      </span>{" "}
      {role && (
        <>
          <span className="hidden sm:inline">| </span>
          <span
            className={clsx(
              raleway.className,
              "uppercase inline-block text-xs mb-2 sm:mb-0"
            )}
          >
            {role}
          </span>
        </>
      )}
    </p>
    <p
      className={clsx(
        raleway.className,
        "hidden sm:block text-sm text-neutral-500"
      )}
    >
      {location}
    </p>
  </div>
);

export default Company;
