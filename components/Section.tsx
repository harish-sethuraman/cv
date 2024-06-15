import clsx from "clsx";
import { Lato } from "next/font/google";
import { ReactNode } from "react";

const lato = Lato({
  weight: ["300", "700"],
  subsets: ["latin"],
});
const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <section className="mt-6 text-neutral-700">
      {title && (
        <h2
          className={clsx(
            "sm:text-lg text-md mb-2 transition-all duration-150 font-thin uppercase",
            lato.className
          )}
        >
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};
export { Section };
