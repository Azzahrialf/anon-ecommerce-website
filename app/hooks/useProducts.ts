import { useQuery } from '@tanstack/react-query'
import { newProducts, bestSellers, newArrivals, trending, topRated, dealOfTheDay } from '~/data/products'
import { blogs } from '~/data/categories'

export const useNewProducts = (category?: string) =>
  useQuery({
    queryKey: ['products', 'new', category],
    queryFn: () => {
      if (!category) return newProducts
      return newProducts.filter((p) => p.category.toLowerCase() === category.toLowerCase())
    },
  })

export const useBestSellers = () =>
  useQuery({ queryKey: ['products', 'best-sellers'], queryFn: () => bestSellers })

export const useNewArrivals = () =>
  useQuery({ queryKey: ['products', 'new-arrivals'], queryFn: () => newArrivals })

export const useTrending = () =>
  useQuery({ queryKey: ['products', 'trending'], queryFn: () => trending })

export const useTopRated = () =>
  useQuery({ queryKey: ['products', 'top-rated'], queryFn: () => topRated })

export const useDealOfTheDay = () =>
  useQuery({ queryKey: ['products', 'deals'], queryFn: () => dealOfTheDay })

export const useBlogs = () =>
  useQuery({ queryKey: ['blogs'], queryFn: () => blogs })
