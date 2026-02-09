import { useState, useEffect } from 'react';
import { Star, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

interface Review {
  id: string;
  user_id: string;
  product_handle: string;
  rating: number;
  title: string | null;
  content: string | null;
  created_at: string;
}

interface ProductReviewsProps {
  productHandle: string;
}

export const ProductReviews = ({ productHandle }: ProductReviewsProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState<{ id: string } | null>(null);
  const [userReview, setUserReview] = useState<Review | null>(null);

  useEffect(() => {
    fetchReviews();
    checkUser();
  }, [productHandle]);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  };

  const fetchReviews = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('product_reviews')
      .select('*')
      .eq('product_handle', productHandle)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching reviews:', error);
    } else {
      setReviews(data || []);
      // Check if current user has already reviewed
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const existingReview = data?.find(r => r.user_id === user.id);
        setUserReview(existingReview || null);
      }
    }
    setIsLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast.error('Please log in to submit a review');
      return;
    }

    setIsSubmitting(true);
    const { error } = await supabase
      .from('product_reviews')
      .upsert({
        user_id: user.id,
        product_handle: productHandle,
        rating,
        title,
        content
      }, { onConflict: 'user_id,product_handle' });

    if (error) {
      console.error('Error submitting review:', error);
      toast.error('Failed to submit review');
    } else {
      toast.success(userReview ? 'Review updated!' : 'Review submitted!');
      setShowForm(false);
      setTitle('');
      setContent('');
      setRating(5);
      fetchReviews();
    }
    setIsSubmitting(false);
  };

  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0;

  const renderStars = (rating: number, interactive = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${interactive ? 'cursor-pointer transition-transform hover:scale-110' : ''} ${
              star <= rating ? 'fill-primary text-primary' : 'text-muted-foreground'
            }`}
            onClick={interactive ? () => setRating(star) : undefined}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="mt-12 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-foreground">Customer Reviews</h3>
          {reviews.length > 0 && (
            <div className="flex items-center gap-2 mt-2">
              {renderStars(Math.round(averageRating))}
              <span className="text-muted-foreground">
                {averageRating.toFixed(1)} out of 5 ({reviews.length} reviews)
              </span>
            </div>
          )}
        </div>
        {user && !showForm && (
          <Button 
            onClick={() => setShowForm(true)}
            className="bg-primary hover:bg-primary/90"
          >
            {userReview ? 'Edit Review' : 'Write a Review'}
          </Button>
        )}
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-xl p-6 space-y-4"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Your Rating</label>
              {renderStars(rating, true)}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Review Title</label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Sum up your experience..."
                className="bg-background"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Your Review</label>
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Share your thoughts about this product..."
                rows={4}
                className="bg-background"
              />
            </div>
            <div className="flex gap-3">
              <Button type="submit" disabled={isSubmitting} className="bg-primary">
                {isSubmitting ? 'Submitting...' : userReview ? 'Update Review' : 'Submit Review'}
              </Button>
              <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                Cancel
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 animate-pulse">
              <div className="h-4 bg-muted rounded w-1/4 mb-2" />
              <div className="h-3 bg-muted rounded w-1/2 mb-4" />
              <div className="h-3 bg-muted rounded w-full" />
            </div>
          ))}
        </div>
      ) : reviews.length === 0 ? (
        <div className="bg-card border border-border rounded-xl p-8 text-center">
          <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">No reviews yet. Be the first to review this product!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    {renderStars(review.rating)}
                    <span className="text-xs text-muted-foreground">
                      {new Date(review.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
              {review.title && (
                <h4 className="font-semibold text-foreground mb-2">{review.title}</h4>
              )}
              {review.content && (
                <p className="text-muted-foreground">{review.content}</p>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
