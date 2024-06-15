import type { MDXComponents, MDXContent } from "mdx/types";
import { Lato } from "next/font/google";
import * as Icons from "lucide-react";
import Name from "@/components/Name";
import Socials from "@/components/Socials";
import { Section } from "@/components/Section";
import clsx from "clsx";
import Company from "./components/Company";

const lato = Lato({
  weight: ["300", "700", "900"],
  subsets: ["latin"],
});

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Name: (props) => <Name {...props} />,
    a: ({ title, ...props }) => {
      return (
        <a
          target="_blank"
          className="inline-flex items-center hover:bg-neutral-200/60 rounded-md transition-colors duration-150"
          {...props}
        />
      );
    },
    p: (props) => (
      <p
        className={clsx(
          lato.className,
          "text-neutral-800 sm:text-base text-sm transition-all duration-150"
        )}
        {...props}
      />
    ),
    strong: (props) => (
      <strong
        className="font-semibold text-neutral-700  sm:text-base text-sm transition-all duration-150"
        {...props}
      />
    ),
    Company,
    ul: (props) => (
      <ul className="list-disc [&>*>*]:list-[revert] pl-6" {...props} />
    ),
    li: (props) => (
      <li
        className={clsx(
          lato.className,
          "text-neutral-800 sm:text-base text-sm transition-all duration-150"
        )}
        {...props}
      />
    ),
    Socials,
    Section,
    ...components,
  };
}
