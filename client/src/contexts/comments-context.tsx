import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { Comment as CommentType } from '@/components/comments/comment-list';

interface CommentsContextType {
  comments: CommentType[];
  isLoading: boolean;
  error: string | null;
  addComment: (comment: Omit<CommentType, 'id' | 'createdAt'>) => Promise<void>;
  deleteComment: (id: string) => Promise<void>;
  refetch: () => Promise<void>;
}

const CommentsContext = createContext<CommentsContextType | undefined>(undefined);

interface CommentsProviderProps {
  children: ReactNode;
  postId: string;
}

export function CommentsProvider({ children, postId }: CommentsProviderProps) {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchComments = async () => {
    try {
      setIsLoading(true);
      setError(null);
      // In a real app, you would fetch comments from your API
      // const response = await fetch(`/api/posts/${postId}/comments`);
      // const data = await response.json();
      
      // Mock data for now
      const mockComments: CommentType[] = [
        {
          id: '1',
          name: 'John Doe',
          email: 'john@example.com',
          content: 'This is a great post! Thanks for sharing your insights.',
          createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
          isAuthor: true,
          avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=random'
        },
        {
          id: '2',
          name: 'Jane Smith',
          email: 'jane@example.com',
          content: 'I found this very helpful. Looking forward to more content like this!',
          createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
          avatar: 'https://ui-avatars.com/api/?name=Jane+Smith&background=random'
        },
      ];
      
      setComments(mockComments);
    } catch (err) {
      console.error('Failed to fetch comments:', err);
      setError('Failed to load comments. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const addComment = async (commentData: Omit<CommentType, 'id' | 'createdAt'>) => {
    try {
      // In a real app, you would post to your API
      // const response = await fetch(`/api/posts/${postId}/comments`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(commentData),
      // });
      // const newComment = await response.json();
      
      // Mock implementation
      const newComment: CommentType = {
        ...commentData,
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date().toISOString(),
        // Ensure required fields have defaults
        name: commentData.name || 'Anonymous',
        content: commentData.content || '',
        // Add avatar if not provided
        avatar: commentData.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(commentData.name || 'U')}&background=random`
      };
      
      setComments(prev => [newComment, ...prev]);
      return Promise.resolve();
    } catch (err) {
      console.error('Failed to add comment:', err);
      throw new Error('Failed to add comment. Please try again.');
    }
  };

  const deleteComment = async (id: string) => {
    try {
      // In a real app, you would call your API
      // await fetch(`/api/comments/${id}`, { method: 'DELETE' });
      
      // Mock implementation
      setComments(prev => prev.filter(comment => comment.id !== id));
      return Promise.resolve();
    } catch (err) {
      console.error('Failed to delete comment:', err);
      throw new Error('Failed to delete comment. Please try again.');
    }
  };

  return (
    <CommentsContext.Provider
      value={{
        comments,
        isLoading,
        error,
        addComment,
        deleteComment,
        refetch: fetchComments,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
}

export function useComments() {
  const context = useContext(CommentsContext);
  if (context === undefined) {
    throw new Error('useComments must be used within a CommentsProvider');
  }
  return context;
}
