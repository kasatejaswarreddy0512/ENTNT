import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, BarChart3, Building2, LayoutDashboard } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Companies', href: '/companies', icon: Building2 },
    { name: 'Calendar', href: '/calendar', icon: Calendar },
    { name: 'Reports', href: '/reports', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg">
          <div className="flex h-16 items-center justify-center border-b">
            <h1 className=" title text-xl font-bold text-gray-900">Communication Tracker</h1>
          </div>
          <nav className="mt-6">
            <div className="space-y-1 px-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium ${
                      isActive
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 flex-shrink-0 ${
                        isActive ? 'text-gray-900' : 'text-gray-400'
                      }`}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto">
          <main className="p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}