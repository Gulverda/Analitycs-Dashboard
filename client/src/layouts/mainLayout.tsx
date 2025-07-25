import Sidebar from '../components/sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 dark:bg-gray-900 p-6">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
