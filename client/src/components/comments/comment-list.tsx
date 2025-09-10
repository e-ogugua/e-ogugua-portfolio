import { formatDistanceToNow } from "date-fns";
import { useMemo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { MessageCircle, MessageSquare } from "lucide-react";

export interface Comment {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  content: string;
  createdAt: string | Date;
  isAuthor?: boolean;
  website?: string;
  status?: 'pending' | 'approved' | 'rejected';
  postTitle?: string;
}

interface CommentListProps {
  comments: Comment[];
  onDelete?: (id: string) => void;
  currentUserId?: string;
  isLoading?: boolean;
}

export function CommentList({ 
  comments, 
  onDelete, 
  currentUserId,
  isLoading = false 
}: CommentListProps) {
  if (isLoading) {
    return (
      <div className="space-y-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-muted" />
              <div className="space-y-1 flex-1">
                <div className="h-4 w-32 bg-muted rounded" />
                <div className="h-3 w-24 bg-muted rounded" />
              </div>
            </div>
            <div className="space-y-2 pl-13">
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-5/6" />
              <div className="h-4 bg-muted rounded w-3/4" />
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground pl-13">
              <div className="h-4 w-20 bg-muted rounded" />
              <div className="h-4 w-16 bg-muted rounded" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (comments.length === 0) {
    return (
      <div className="text-center py-12">
        <MessageCircle className="h-12 w-12 mx-auto text-muted-foreground/30 mb-4" />
        <h3 className="text-lg font-medium text-foreground mb-2">No comments yet</h3>
        <p className="text-muted-foreground mb-4">Be the first to share your thoughts!</p>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => document.getElementById('comment-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          Write a comment
        </Button>
      </div>
    );
  }

  const { sortedComments, groupedComments } = useMemo(() => {
    const sorted = [...comments].sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    const groups: { [key: string]: Comment[] } = {};
    
    sorted.forEach(comment => {
      const date = new Date(comment.createdAt);
      const today = new Date();
      const diffTime = Math.abs(today.getTime() - date.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      let groupName = '';
      if (diffDays === 0) groupName = 'Today';
      else if (diffDays === 1) groupName = 'Yesterday';
      else if (diffDays < 7) groupName = 'This Week';
      else if (date.getFullYear() === today.getFullYear()) groupName = date.toLocaleDateString('en-US', { month: 'long' });
      else groupName = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
      
      if (!groups[groupName]) groups[groupName] = [];
      groups[groupName].push(comment);
    });

    return { sortedComments: sorted, groupedComments: groups };
  }, [comments]);

  return (
    <div className="space-y-6">
      {Object.entries(groupedComments).map(([groupName, groupComments]) => (
        <div key={groupName} className="space-y-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-background text-xs font-medium text-muted-foreground">
                {groupName}
              </span>
            </div>
          </div>
          
          <div className="space-y-6">
            {groupComments.map((comment) => (
              <div key={comment.id} className="group relative" data-testid="comment-item">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10 flex-shrink-0">
                    <AvatarImage src={comment.avatar} alt={comment.name} />
                    <AvatarFallback>
                      {comment.name
                        .split(' ')
                        .map((n: string) => n[0])
                        .join('')
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h4 className="text-sm font-medium text-foreground">
                        {comment.name}
                      </h4>
                      {comment.isAuthor && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          Author
                        </span>
                      )}
                      <span className="text-xs text-muted-foreground ml-auto">
                        {formatDistanceToNow(new Date(comment.createdAt), { 
                          addSuffix: true 
                        })}
                      </span>
                    </div>
                    
                    <div className="mt-1 text-sm text-foreground/90 whitespace-pre-wrap break-words">
                      {comment.content}
                    </div>
                    
                    <div className="mt-2 flex items-center space-x-4 text-xs text-muted-foreground">
                      <button 
                        className="hover:text-foreground transition-colors"
                        onClick={() => {
                          // Implement reply functionality
                        }}
                      >
                        Reply
                      </button>
                      
                      {onDelete && (currentUserId || comment.isAuthor) && (
                        <button
                          onClick={() => onDelete(comment.id)}
                          className="text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
