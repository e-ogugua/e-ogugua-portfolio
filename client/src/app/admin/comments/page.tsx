'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, X, Search, Trash2, MessageSquare } from 'lucide-react';
import { Comment } from '@/components/comments/comment-list';

export default function CommentsPage() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [filteredComments, setFilteredComments] = useState<Comment[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedComments, setSelectedComments] = useState<string[]>([]);
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');

  // Fetch comments from API
  useEffect(() => {
    const fetchComments = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await fetch('/api/admin/comments');
        // const data = await response.json();
        
        // Mock data for now
        const mockComments: Comment[] = [
          {
            id: '1',
            name: 'John Doe',
            email: 'john@example.com',
            content: 'This is a great post!',
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
            status: 'pending',
            postTitle: 'Getting Started with Next.js',
          },
          {
            id: '2',
            name: 'Jane Smith',
            email: 'jane@example.com',
            content: 'Very informative, thanks for sharing!',
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
            status: 'approved',
            postTitle: 'React Hooks Explained',
          },
          {
            id: '3',
            name: 'Spam Bot',
            email: 'spam@example.com',
            content: 'Buy cheap products now!',
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48), // 2 days ago
            status: 'rejected',
            postTitle: 'TypeScript Best Practices',
          },
        ];
        
        setComments(mockComments);
        setFilteredComments(mockComments);
      } catch (error) {
        console.error('Failed to fetch comments:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, []);

  // Filter comments based on search term and status
  useEffect(() => {
    let result = [...comments];
    
    // Apply status filter
    if (statusFilter !== 'all') {
      result = result.filter(comment => comment.status === statusFilter);
    }
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        comment =>
          comment.name.toLowerCase().includes(term) ||
          (comment.email && comment.email.toLowerCase().includes(term)) ||
          comment.content.toLowerCase().includes(term) ||
          (comment.postTitle && comment.postTitle.toLowerCase().includes(term))
      );
    }
    
    setFilteredComments(result);
  }, [searchTerm, statusFilter, comments]);

  const toggleSelectComment = (id: string) => {
    setSelectedComments(prev =>
      prev.includes(id) ? prev.filter(commentId => commentId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedComments.length === filteredComments.length) {
      setSelectedComments([]);
    } else {
      setSelectedComments(filteredComments.map(comment => comment.id));
    }
  };

  const updateCommentStatus = async (ids: string[], status: 'approved' | 'rejected') => {
    try {
      // In a real app, this would be an API call
      // await fetch('/api/admin/comments/status', {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ ids, status })
      // });
      
      // Update local state
      setComments(prev =>
        prev.map(comment =>
          ids.includes(comment.id) ? { ...comment, status } : comment
        )
      );
      
      // Clear selection
      setSelectedComments([]);
    } catch (error) {
      console.error('Failed to update comment status:', error);
    }
  };

  const deleteComments = async (ids: string[]) => {
    if (!confirm('Are you sure you want to delete the selected comments?')) return;
    
    try {
      // In a real app, this would be an API call
      // await fetch('/api/admin/comments', {
      //   method: 'DELETE',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ ids })
      // });
      
      // Update local state
      setComments(prev => prev.filter(comment => !ids.includes(comment.id)));
      setSelectedComments([]);
    } catch (error) {
      console.error('Failed to delete comments:', error);
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = 'px-2 py-1 text-xs font-medium rounded-full';
    
    switch (status) {
      case 'approved':
        return <span className={`${baseClasses} bg-green-100 text-green-800`}>Approved</span>;
      case 'rejected':
        return <span className={`${baseClasses} bg-red-100 text-red-800`}>Rejected</span>;
      default:
        return <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>Pending</span>;
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Comments</h2>
          <p className="text-muted-foreground">
            Manage and moderate user comments
          </p>
        </div>
        
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <Button variant="outline" size="sm">
            <MessageSquare className="mr-2 h-4 w-4" />
            View All Comments
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search comments..."
            className="w-full pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <select
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as any)}
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {selectedComments.length > 0 && (
        <div className="flex items-center gap-2 p-3 bg-accent rounded-md">
          <span className="text-sm text-muted-foreground">
            {selectedComments.length} selected
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => updateCommentStatus(selectedComments, 'approved')}
            className="h-8 text-green-600 hover:bg-green-50"
          >
            <Check className="mr-2 h-3.5 w-3.5" />
            Approve
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => updateCommentStatus(selectedComments, 'rejected')}
            className="h-8 text-red-600 hover:bg-red-50"
          >
            <X className="mr-2 h-3.5 w-3.5" />
            Reject
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => deleteComments(selectedComments)}
            className="h-8 text-red-600 hover:bg-red-50 ml-auto"
          >
            <Trash2 className="mr-2 h-3.5 w-3.5" />
            Delete
          </Button>
        </div>
      )}

      {filteredComments.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium">No comments found</h3>
          <p className="text-muted-foreground text-sm mt-1">
            {searchTerm || statusFilter !== 'all' 
              ? 'Try adjusting your search or filter criteria'
              : 'There are no comments to display'}
          </p>
        </div>
      ) : (
        <div className="rounded-md border">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-12">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      checked={selectedComments.length === filteredComments.length && filteredComments.length > 0}
                      onChange={toggleSelectAll}
                    />
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    Comment
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground hidden md:table-cell">
                    Post
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground hidden sm:table-cell">
                    Status
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground hidden lg:table-cell">
                    Date
                  </th>
                  <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {filteredComments.map((comment) => (
                  <tr key={comment.id} className="border-b transition-colors hover:bg-muted/50">
                    <td className="p-4 align-middle">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        checked={selectedComments.includes(comment.id)}
                        onChange={() => toggleSelectComment(comment.id)}
                      />
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex flex-col">
                        <div className="font-medium">{comment.name}</div>
                        <div className="text-sm text-muted-foreground line-clamp-2">
                          {comment.content}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {comment.email}
                        </div>
                      </div>
                    </td>
                    <td className="p-4 align-middle hidden md:table-cell">
                      <div className="text-sm text-muted-foreground line-clamp-1">
                        {comment.postTitle || 'Untitled Post'}
                      </div>
                    </td>
                    <td className="p-4 align-middle hidden sm:table-cell">
                      {getStatusBadge(comment.status || 'pending')}
                    </td>
                    <td className="p-4 align-middle hidden lg:table-cell">
                      <div className="text-sm text-muted-foreground">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(comment.createdAt).toLocaleTimeString()}
                      </div>
                    </td>
                    <td className="p-4 align-middle text-right">
                      <div className="flex justify-end gap-2">
                        {comment.status !== 'approved' && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-green-600 hover:bg-green-50"
                            onClick={() => updateCommentStatus([comment.id], 'approved')}
                            title="Approve"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        )}
                        {comment.status !== 'rejected' && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-600 hover:bg-red-50"
                            onClick={() => updateCommentStatus([comment.id], 'rejected')}
                            title="Reject"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-600 hover:bg-red-50"
                          onClick={() => deleteComments([comment.id])}
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
