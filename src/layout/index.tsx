import Breadcrumb from "../components/Breadcrumb";

interface LayoutProps {
  breadcrumbItems: { label: string; path: string }[];
  children: React.ReactNode;
  title?: string;
}

const Layout = ({ breadcrumbItems, children, title }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Breadcrumb Section */}
      <div className="bg-gray-100 ">
        <div className="max-w-7xl mx-auto ">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mb-2 font-bold text-[24px] md:text-[30px] px-4  ">
            {title}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto py-4 w-full px-4 pt-8">
        {children}
      </div>
    </div>
  );
};

export default Layout;
