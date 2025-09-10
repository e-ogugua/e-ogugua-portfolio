'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Users, FileText, Clock } from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';

export default function AdminDashboard() {
  const { user } = useAuth();

  // Mock data - in a real app, this would come from an API
  const stats = [
    { title: 'Total Comments', value: '1,234', icon: <MessageSquare className="h-6 w-6" />, change: '+12% from last month' },
    { title: 'Active Users', value: '573', icon: <Users className="h-6 w-6" />, change: '+8% from last month' },
    { title: 'Blog Posts', value: '42', icon: <FileText className="h-6 w-6" />, change: '+3 new this month' },
    { title: 'Pending Moderation', value: '12', icon: <Clock className="h-6 w-6" />, change: 'Needs attention' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Welcome back, {user?.name || 'Admin'}!</h2>
        <p className="text-muted-foreground">Here's what's happening with your blog today.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className="h-6 w-6 text-muted-foreground">
                {stat.icon}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Comments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start space-x-4 p-2 hover:bg-muted/50 rounded-md">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Comment from User {i}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      This is a sample comment that would be truncated if it's too long...
                    </p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between rounded-md border p-4 hover:bg-muted/50 transition-colors">
                <span>View All Comments</span>
                <MessageSquare className="h-4 w-4" />
              </button>
              <button className="w-full flex items-center justify-between rounded-md border p-4 hover:bg-muted/50 transition-colors">
                <span>Create New Post</span>
                <FileText className="h-4 w-4" />
              </button>
              <button className="w-full flex items-center justify-between rounded-md border p-4 hover:bg-muted/50 transition-colors">
                <span>Manage Users</span>
                <Users className="h-4 w-4" />
              </button>
              <button className="w-full flex items-center justify-between rounded-md border p-4 hover:bg-muted/50 transition-colors">
                <span>Site Settings</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
