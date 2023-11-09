import { Link } from 'react-router-dom';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function NavbarItem({ children, href = '/', ...rest }: Props) {
  return (
    <li>
      <Link
        className="relative py-3 font-bold text-stone-600 after:absolute after:bottom-1 after:left-0 after:right-0 after:h-[2px] after:scale-x-0 after:bg-black after:transition-all hover:text-black hover:after:visible hover:after:scale-x-100 dark:text-white dark:after:bg-cyan-500 dark:hover:text-cyan-500"
        to={href}
        {...rest}
      >
        {children}
      </Link>
    </li>
  );
}
