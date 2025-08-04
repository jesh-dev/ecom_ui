import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => {
  return (
    <nav
      className="text-sm text-gray-600 dark:text-gray-300 mb-4 w-full"
      aria-label="Breadcrumb"
    >
      <ol className="flex flex-wrap items-center gap-x-1 gap-y-2 sm:gap-x-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center max-w-[150px] truncate"
          >
            {index !== 0 && (
              <ChevronRight className="w-4 h-4 mx-1 text-gray-400 flex-shrink-0" />
            )}
            {item.href ? (
              <Link
                to={item.href}
                className="hover:underline text-blue-600 dark:text-blue-400 truncate whitespace-nowrap"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-500 dark:text-gray-400 font-medium truncate">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
