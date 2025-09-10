import { useState } from "react";
import { CommentList } from "./comment-list";
import { CommentForm } from "./comment-form";
import { useComments } from "@/contexts/comments-context";
import { Button } from "@/components/ui/button";
import { MessageSquare, X } from "lucide-react";

interface CommentsSectionProps {
  postId: string;
  className?: string;
}

export function CommentsSection({ postId, className = "" }: CommentsSectionProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { comments, isLoading, error, addComment, deleteComment } = useComments();
  const commentCount = comments.length;

  const handleSubmit = async (data: { name: string; email: string; content: string }) => {
    await addComment({
      name: data.name,
      content: data.content,
      email: data.email,
      isAuthor: false,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&background=random`
    });
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this comment?")) {
      await deleteComment(id);
    }
  };

  return (
    <section className={className} id="comments" data-testid="comments-section">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          {commentCount} {commentCount === 1 ? 'Comment' : 'Comments'}
        </h2>
        
        {!isFormOpen && (
          <Button 
            size="sm" 
            onClick={() => setIsFormOpen(true)}
            className="ml-auto"
            data-testid="open-comment-form-button"
          >
            Write a comment
          </Button>
        )}
      </div>

      {isFormOpen && (
        <div className="bg-muted/30 p-4 rounded-lg mb-8 relative" data-testid="comment-form-container">
          <button
            onClick={() => setIsFormOpen(false)}
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
            aria-label="Close comment form"
            data-testid="close-comment-form-button"
          >
            <X className="h-5 w-5" />
          </button>
          <CommentForm 
            onSubmit={handleSubmit} 
            isSubmitting={false} 
            data-testid="comment-form"
          />
        </div>
      )}

      {error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6" data-testid="error-message">
          {error}
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-2"
            onClick={() => window.location.reload()}
            data-testid="retry-button"
          >
            Try again
          </Button>
        </div>
      ) : (
        <div className="space-y-6" data-testid="comments-list">
          <CommentList 
            comments={comments} 
            onDelete={handleDelete}
            isLoading={isLoading}
          />
        </div>
      )}
    </section>
  );
}
