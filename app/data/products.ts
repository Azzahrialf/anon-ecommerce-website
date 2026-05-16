export interface Product {
  id: string
  name: string
  price: number
  originalPrice: number
  image: string
  hoverImage?: string
  category: string
  badge?: string
  badgeStyle?: 'default' | 'black' | 'pink'
  rating: number
}

export interface ShowcaseProduct {
  id: string
  name: string
  price: number
  originalPrice: number
  image: string
  category: string
  rating: number
  halfStar?: boolean
}

export const bestSellers: ShowcaseProduct[] = [
  { id: 'bs-1', name: 'Baby Fabric Shoes', price: 4, originalPrice: 5, image: '/images/products/1.jpg', category: 'footwear', rating: 5 },
  { id: 'bs-2', name: "Men's Hoodies T-Shirt", price: 7, originalPrice: 17, image: '/images/products/2.jpg', category: 'clothes', rating: 4, halfStar: true },
  { id: 'bs-3', name: "Girls T-Shirt", price: 3, originalPrice: 5, image: '/images/products/3.jpg', category: 'clothes', rating: 4, halfStar: true },
  { id: 'bs-4', name: 'Woolen Hat for Men', price: 12, originalPrice: 15, image: '/images/products/4.jpg', category: 'hats', rating: 5 },
]

export const newArrivals: ShowcaseProduct[] = [
  { id: 'na-1', name: 'Relaxed Short Full Sleeve T-Shirt', price: 45, originalPrice: 12, image: '/images/products/clothes-1.jpg', category: 'Clothes', rating: 4 },
  { id: 'na-2', name: 'Girls Pink Embro Design Top', price: 61, originalPrice: 9, image: '/images/products/clothes-2.jpg', category: 'Clothes', rating: 4 },
  { id: 'na-3', name: 'Black Floral Wrap Midi Skirt', price: 76, originalPrice: 25, image: '/images/products/clothes-3.jpg', category: 'Clothes', rating: 4 },
  { id: 'na-4', name: 'Pure Garment Dyed Cotton Shirt', price: 68, originalPrice: 31, image: '/images/products/shirt-1.jpg', category: 'Mens Fashion', rating: 4 },
  { id: 'na-5', name: 'MEN Yarn Fleece Full-Zip Jacket', price: 61, originalPrice: 11, image: '/images/products/jacket-5.jpg', category: 'Winter wear', rating: 4 },
  { id: 'na-6', name: 'Mens Winter Leathers Jackets', price: 32, originalPrice: 20, image: '/images/products/jacket-1.jpg', category: 'Winter wear', rating: 4 },
  { id: 'na-7', name: 'Mens Winter Leathers Jackets', price: 50, originalPrice: 25, image: '/images/products/jacket-3.jpg', category: 'Jackets', rating: 4 },
  { id: 'na-8', name: 'Better Basics French Terry Sweatshorts', price: 20, originalPrice: 10, image: '/images/products/shorts-1.jpg', category: 'Shorts', rating: 4 },
]

export const trending: ShowcaseProduct[] = [
  { id: 'tr-1', name: 'Running & Trekking Shoes - White', price: 49, originalPrice: 15, image: '/images/products/sports-1.jpg', category: 'Sports', rating: 4 },
  { id: 'tr-2', name: 'Trekking & Running Shoes - black', price: 78, originalPrice: 36, image: '/images/products/sports-2.jpg', category: 'Sports', rating: 4 },
  { id: 'tr-3', name: 'Womens Party Wear Shoes', price: 94, originalPrice: 42, image: '/images/products/party-wear-1.jpg', category: 'Party wear', rating: 4 },
  { id: 'tr-4', name: "Sports Claw Women's Shoes", price: 54, originalPrice: 65, image: '/images/products/sports-3.jpg', category: 'Sports', rating: 4 },
  { id: 'tr-5', name: 'Air Trekking Shoes - white', price: 52, originalPrice: 55, image: '/images/products/sports-6.jpg', category: 'Sports', rating: 4 },
  { id: 'tr-6', name: 'Boot With Suede Detail', price: 20, originalPrice: 30, image: '/images/products/shoe-3.jpg', category: 'boots', rating: 4 },
  { id: 'tr-7', name: "Men's Leather Formal Wear shoes", price: 56, originalPrice: 78, image: '/images/products/shoe-1.jpg', category: 'formal', rating: 4 },
  { id: 'tr-8', name: "Casual Men's Brown shoes", price: 50, originalPrice: 55, image: '/images/products/shoe-2.jpg', category: 'Casual', rating: 4 },
]

export const topRated: ShowcaseProduct[] = [
  { id: 'tp-1', name: 'Pocket Watch Leather Pouch', price: 50, originalPrice: 34, image: '/images/products/watch-3.jpg', category: 'Watches', rating: 4 },
  { id: 'tp-2', name: 'Silver Deer Heart Necklace', price: 84, originalPrice: 30, image: '/images/products/jewellery-3.jpg', category: 'Jewellery', rating: 4 },
  { id: 'tp-3', name: 'Titan 100 Ml Womens Perfume', price: 42, originalPrice: 10, image: '/images/products/perfume.jpg', category: 'Perfume', rating: 4 },
  { id: 'tp-4', name: "Men's Leather Reversible Belt", price: 24, originalPrice: 10, image: '/images/products/belt.jpg', category: 'Belt', rating: 4 },
  { id: 'tp-5', name: 'Platinum Zircon Classic Ring', price: 62, originalPrice: 65, image: '/images/products/jewellery-2.jpg', category: 'jewellery', rating: 4 },
  { id: 'tp-6', name: 'Smart Watche Vital Plus', price: 56, originalPrice: 78, image: '/images/products/watch-1.jpg', category: 'Watches', rating: 4 },
  { id: 'tp-7', name: 'Shampoo Conditioner Packs', price: 20, originalPrice: 30, image: '/images/products/shampoo.jpg', category: 'cosmetics', rating: 4 },
  { id: 'tp-8', name: 'Rose Gold Peacock Earrings', price: 20, originalPrice: 30, image: '/images/products/jewellery-1.jpg', category: 'jewellery', rating: 4 },
]

export const newProducts: Product[] = [
  { id: 'np-1', name: 'Mens Winter Leathers Jackets', price: 48, originalPrice: 75, image: '/images/products/jacket-3.jpg', hoverImage: '/images/products/jacket-4.jpg', category: 'jacket', badge: '15%', rating: 3 },
  { id: 'np-2', name: 'Pure Garment Dyed Cotton Shirt', price: 45, originalPrice: 56, image: '/images/products/shirt-1.jpg', hoverImage: '/images/products/shirt-2.jpg', category: 'shirt', badge: 'sale', badgeStyle: 'black', rating: 3 },
  { id: 'np-3', name: 'MEN Yarn Fleece Full-Zip Jacket', price: 58, originalPrice: 65, image: '/images/products/jacket-5.jpg', hoverImage: '/images/products/jacket-6.jpg', category: 'Jacket', rating: 3 },
  { id: 'np-4', name: 'Black Floral Wrap Midi Skirt', price: 25, originalPrice: 35, image: '/images/products/clothes-3.jpg', hoverImage: '/images/products/clothes-4.jpg', category: 'skirt', badge: 'new', badgeStyle: 'pink', rating: 5 },
  { id: 'np-5', name: "Casual Men's Brown shoes", price: 99, originalPrice: 105, image: '/images/products/shoe-2.jpg', hoverImage: '/images/products/shoe-2_1.jpg', category: 'casual', rating: 5 },
  { id: 'np-6', name: 'Pocket Watch Leather Pouch', price: 150, originalPrice: 170, image: '/images/products/watch-3.jpg', hoverImage: '/images/products/watch-4.jpg', category: 'watches', badge: 'sale', badgeStyle: 'black', rating: 3 },
  { id: 'np-7', name: 'Smart Watche Vital Plus', price: 100, originalPrice: 120, image: '/images/products/watch-1.jpg', hoverImage: '/images/products/watch-2.jpg', category: 'watches', rating: 4 },
  { id: 'np-8', name: 'Womens Party Wear Shoes', price: 25, originalPrice: 30, image: '/images/products/party-wear-1.jpg', hoverImage: '/images/products/party-wear-2.jpg', category: 'party wear', badge: 'sale', badgeStyle: 'black', rating: 3 },
  { id: 'np-9', name: 'Mens Winter Leathers Jackets', price: 32, originalPrice: 45, image: '/images/products/jacket-1.jpg', hoverImage: '/images/products/jacket-2.jpg', category: 'jacket', rating: 4 },
  { id: 'np-10', name: 'Trekking & Running Shoes - black', price: 58, originalPrice: 64, image: '/images/products/sports-2.jpg', hoverImage: '/images/products/sports-4.jpg', category: 'sports', badge: 'sale', badgeStyle: 'black', rating: 3 },
  { id: 'np-11', name: "Men's Leather Formal Wear shoes", price: 50, originalPrice: 65, image: '/images/products/shoe-1.jpg', hoverImage: '/images/products/shoe-1_1.jpg', category: 'formal', rating: 4 },
  { id: 'np-12', name: 'Better Basics French Terry Sweatshorts', price: 78, originalPrice: 85, image: '/images/products/shorts-1.jpg', hoverImage: '/images/products/shorts-2.jpg', category: 'shorts', badge: 'sale', badgeStyle: 'black', rating: 3 },
]

export const dealOfTheDay = [
  {
    id: 'deal-1',
    name: 'Shampoo, Conditioner & Facewash Packs',
    image: '/images/products/shampoo.jpg',
    price: 150,
    originalPrice: 200,
    rating: 3,
    desc: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor',
    sold: 20,
    available: 40,
  },
  {
    id: 'deal-2',
    name: 'Rose Gold Diamonds Earring',
    image: '/images/products/jewellery-1.jpg',
    price: 1990,
    originalPrice: 2000,
    rating: 3,
    desc: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor',
    sold: 15,
    available: 40,
  },
]
