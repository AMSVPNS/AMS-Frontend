'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Search,
  LayoutDashboard,
  Clock,
  BarChart3,
  Users,
  FileText,
  Settings,
  Bell,
  Menu,
  X,
} from 'lucide-react';

const navItems = [
  {
    title: 'Dashboards',
    icon: LayoutDashboard,
    href: '/dashboards',
  },
  {
    title: 'Attendance',
    icon: Clock,
    href: '/attendance',
  },
  {
    title: 'Class & Analytics',
    icon: BarChart3,
    href: '/analytics',
  },
  {
    title: 'User Management',
    icon: Users,
    href: '/users',
  },
  {
    title: 'Report & Analysis',
    icon: FileText,
    href: '/reports',
  },
  {
    title: 'Settings & Support',
    icon: Settings,
    href: '/settings',
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex ${isOpen ? 'w-[280px]' : 'w-[80px]'} h-screen flex-col border-r bg-white transition-width duration-300`}>
      {/* Header */}
      <div className="flex h-[60px] items-center justify-between border-b px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white">
            ACE
          </div>
          {isOpen && <span className="font-semibold">ACE Admin</span>}
        </div>
        <button onClick={toggleSidebar} className="rounded-full p-2 hover:bg-gray-100">
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Search */}
      {isOpen && (
        <div className="border-b p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-md bg-gray-100 py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}

      {/* Nav Items */}
      <nav className="flex-1 space-y-1 p-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                isActive
                  ? 'bg-[#4635FF] text-white'
                  : 'text-gray-500 hover:bg-[#E7F5FF] hover:text-[#4635FF]'
              }`}
            >
              <item.icon className={`h-4 w-4 ${isActive ? 'text-white' : ''}`} />
              {isOpen && item.title}

              {/* Tooltip */}
              {!isOpen && (
                <span className="absolute left-full ml-2 hidden whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white shadow-lg group-hover:flex">
                  {item.title}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
