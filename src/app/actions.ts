"use server";

import { getPersonalizedRecommendations, PersonalizedRecommendationsInput } from '@/ai/flows/personalized-product-recommendations';
import { getRecommendedProductsByIds } from '@/lib/data';

export async function getRecommendations(input: PersonalizedRecommendationsInput) {
  try {
    const { productIds } = await getPersonalizedRecommendations(input);
    if (!productIds || productIds.length === 0) {
      return [];
    }
    const products = getRecommendedProductsByIds(productIds);
    return products;
  } catch (error) {
    console.error("Error getting AI recommendations:", error);
    return [];
  }
}
