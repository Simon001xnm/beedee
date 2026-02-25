'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/lib/types';
import { getRecommendations } from '@/app/actions';
import { ProductCard } from './product-card';
import { Skeleton } from './ui/skeleton';

interface ProductRecommendationsProps {
  currentProductId: string;
  currentCategory: string;
}

const BROWSING_HISTORY_KEY = 'browsingHistory';
const MAX_HISTORY_LENGTH = 10;

export function ProductRecommendations({ currentProductId, currentCategory }: ProductRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let history: string[] = [];
    try {
      history = JSON.parse(sessionStorage.getItem(BROWSING_HISTORY_KEY) || '[]');
    } catch (e) {
      console.error('Could not parse browsing history', e);
      history = [];
    }
    
    // Add current product to history if not already present
    if (!history.includes(currentProductId)) {
      history.unshift(currentProductId);
    }
    
    // Trim history
    const updatedHistory = history.slice(0, MAX_HISTORY_LENGTH);
    
    try {
      sessionStorage.setItem(BROWSING_HISTORY_KEY, JSON.stringify(updatedHistory));
    } catch (e) {
      console.error('Could not save browsing history', e);
    }

    const fetchRecommendations = async () => {
      setIsLoading(true);
      const recommendedProducts = await getRecommendations({
        browsingHistory: updatedHistory,
        cartItems: [], // This could be populated from a cart context
        categoryPreferences: [currentCategory],
        numberOfRecommendations: 4,
      });

      // Filter out the current product from recommendations
      const filteredRecommendations = recommendedProducts.filter(p => p.id !== currentProductId);
      
      setRecommendations(filteredRecommendations);
      setIsLoading(false);
    };

    fetchRecommendations();
  }, [currentProductId, currentCategory]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {[...Array(4)].map((_, i) => (
           <div key={i} className="flex flex-col space-y-4">
             <Skeleton className="h-[300px] w-full rounded-[2.5rem]" />
             <div className="space-y-3">
               <Skeleton className="h-6 w-4/5" />
               <Skeleton className="h-6 w-1/2" />
             </div>
           </div>
        ))}
      </div>
    );
  }

  if (recommendations.length === 0) {
    return null; // Don't show the section if there are no recommendations
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      {recommendations.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}