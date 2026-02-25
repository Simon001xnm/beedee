'use client';

import { useEffect, useState, useMemo } from 'react';
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

  // Stabilize inputs for recommendations
  const recommendationParams = useMemo(() => ({
    currentProductId,
    currentCategory
  }), [currentProductId, currentCategory]);

  useEffect(() => {
    let history: string[] = [];
    try {
      history = JSON.parse(sessionStorage.getItem(BROWSING_HISTORY_KEY) || '[]');
    } catch (e) {
      history = [];
    }
    
    if (!history.includes(recommendationParams.currentProductId)) {
      history.unshift(recommendationParams.currentProductId);
    }
    
    const updatedHistory = history.slice(0, MAX_HISTORY_LENGTH);
    
    try {
      sessionStorage.setItem(BROWSING_HISTORY_KEY, JSON.stringify(updatedHistory));
    } catch (e) {}

    const fetchRecommendations = async () => {
      setIsLoading(true);
      try {
        const recommendedProducts = await getRecommendations({
          browsingHistory: updatedHistory,
          cartItems: [],
          categoryPreferences: [recommendationParams.currentCategory],
          numberOfRecommendations: 4,
        });

        const filteredRecommendations = recommendedProducts.filter(p => p.id !== recommendationParams.currentProductId);
        setRecommendations(filteredRecommendations);
      } catch (error) {
        setRecommendations([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendations();
  }, [recommendationParams]);

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
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      {recommendations.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}