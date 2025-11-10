import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/sidebar';

export function MainLayout() {

  return (
      <main className="w-full flex flex-col h-screen">
      <div className="w-full flex h-full bg-gray-300">
        <Sidebar/>
        <Outlet/>
      </div>
    </main>
  );
}
