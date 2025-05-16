import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-luxe-white min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-8xl font-heading text-luxe-gold mb-4">404</h1>
        <h2 className="text-3xl mb-6">Page Not Found</h2>
        <p className="text-luxe-charcoal/70 max-w-md mx-auto mb-8">
          We're sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/">Return Home</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/collections">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;