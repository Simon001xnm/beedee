'use server';

/**
 * @fileOverview A personalized product recommendation AI agent.
 *
 * - getPersonalizedRecommendations - A function that generates product recommendations.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  browsingHistory: z.array(z.string()).describe('List of product IDs the user has viewed.'),
  cartItems: z.array(z.string()).describe('List of product IDs currently in the user\'s cart.'),
  categoryPreferences: z.array(z.string()).describe('List of category names the user prefers.'),
  numberOfRecommendations: z.number().default(5).describe('The number of product recommendations to return.'),
});
export type PersonalizedRecommendationsInput = z.infer<
  typeof PersonalizedRecommendationsInputSchema
>;

const PersonalizedRecommendationsOutputSchema = z.object({
  productIds: z.array(z.string()).describe('List of product IDs recommended for the user.'),
});
export type PersonalizedRecommendationsOutput = z.infer<
  typeof PersonalizedRecommendationsOutputSchema
>;

export async function getPersonalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are an expert e-commerce product recommender.

Based on the user's browsing history, items in their cart, and category preferences, recommend {{numberOfRecommendations}} products they are most likely to be interested in.  Only return a list of product IDs. Do not include any other text in your response.

Browsing History: {{browsingHistory}}
Cart Items: {{cartItems}}
Category Preferences: {{categoryPreferences}}`,
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
