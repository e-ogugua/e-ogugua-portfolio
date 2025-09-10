import Link from 'next/link';
import { LayoutDashboard, MessageSquare, Settings, LogOut } from 'lucide-react';

export function AdminSidebar() {
  return (
    <div className="hidden md:flex md:flex-col md:w-64 bg-card border-r">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        <Link 
          href="/admin" 
          className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-accent"
        >
          <LayoutDashboard className="mr-3 h-5 w-5" />
          Dashboard
        </Link>
        <Link 
          href="/admin/comments" 
          className="flex items-center px-4 py-2 text-sm font-medium rounded-md bg-accent"
        >
          <MessageSquare className="mr-3 h-5 w-5" />
          Comments
        </Link>
        <Link 
          href="/admin/settings" 
          className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-accent"
        >
          <Settings className="mr-3 h-5 w-5" />
          Settings
        </Link>
      </nav>
      <div className="p-4 border-t">
        <button className="flex items-center w-full px-4 py-2 text-sm font-medium rounded-md text-destructive hover:bg-destructive/10">
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
}
