import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

interface CustomLinkPropsMobile extends CustomLinkProps {
  toggle: () => void;
}

export const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (

    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
          h-[1px] inline-block  bg-dark
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${pathname === href ? "w-full" : "w-0"}
          dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export const CustomMobileLink = ({
  href,
  title,
  className = "",
  toggle,
}: CustomLinkPropsMobile) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <a
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`
          h-[1px] inline-block  bg-light
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${pathname === href ? "w-full" : "w-0"}
          dark:bg-dark`}
      >
        &nbsp;
      </span>
    </a>
  );
};
