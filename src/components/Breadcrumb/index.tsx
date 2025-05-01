import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react"; // import the icon

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="breadcrumb" className="py-6">
      <ol className="flex flex-wrap items-center space-x-1 text-gray-600 text-sm font-medium max-w76xl mx-auto px-4 ">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && (
              <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
            )}
            {index === items.length - 1 ? (
              <span className="text-gray-800  text-lg">{item.label}</span>
            ) : (
              <Link
                to={item.path}
                className="hover:underline hover:text-green-600 text-lg transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
