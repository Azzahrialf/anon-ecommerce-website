export interface Category {
  id: string
  name: string
  icon: string
  count: number
  slug: string
}

export const categories: Category[] = [
  { id: 'c-1', name: 'Dress & Frock', icon: '/images/icons/dress.svg', count: 53, slug: 'dress-frock' },
  { id: 'c-2', name: 'Winter Wear', icon: '/images/icons/coat.svg', count: 58, slug: 'winter-wear' },
  { id: 'c-3', name: 'Glasses & Lens', icon: '/images/icons/glasses.svg', count: 68, slug: 'glasses-lens' },
  { id: 'c-4', name: 'Shorts & Jeans', icon: '/images/icons/shorts.svg', count: 84, slug: 'shorts-jeans' },
  { id: 'c-5', name: 'T-Shirts', icon: '/images/icons/tee.svg', count: 35, slug: 't-shirts' },
  { id: 'c-6', name: 'Jacket', icon: '/images/icons/jacket.svg', count: 16, slug: 'jacket' },
  { id: 'c-7', name: 'Watch', icon: '/images/icons/watch.svg', count: 27, slug: 'watch' },
  { id: 'c-8', name: 'Hat & Caps', icon: '/images/icons/hat.svg', count: 39, slug: 'hat-caps' },
]

export const sidebarCategories = [
  {
    id: 'sc-1',
    name: 'Clothes',
    icon: '/images/icons/dress.svg',
    items: [
      { name: 'Shirt', stock: 300 },
      { name: 'Shorts & Jeans', stock: 60 },
      { name: 'Jacket', stock: 50 },
      { name: 'Dress & Frock', stock: 87 },
    ],
  },
  {
    id: 'sc-2',
    name: 'Footwear',
    icon: '/images/icons/shoes.svg',
    items: [
      { name: 'Sports', stock: 45 },
      { name: 'Formal', stock: 75 },
      { name: 'Casual', stock: 35 },
      { name: 'Safety Shoes', stock: 26 },
    ],
  },
  {
    id: 'sc-3',
    name: 'Jewelry',
    icon: '/images/icons/jewelry.svg',
    items: [
      { name: 'Earrings', stock: 46 },
      { name: 'Couple Rings', stock: 73 },
      { name: 'Necklace', stock: 61 },
    ],
  },
  {
    id: 'sc-4',
    name: 'Perfume',
    icon: '/images/icons/perfume.svg',
    items: [
      { name: 'Clothes Perfume', stock: 12 },
      { name: 'Deodorant', stock: 60 },
      { name: 'Jacket', stock: 50 },
      { name: 'Dress & Frock', stock: 87 },
    ],
  },
  {
    id: 'sc-5',
    name: 'Cosmetics',
    icon: '/images/icons/cosmetics.svg',
    items: [
      { name: 'Shampoo', stock: 68 },
      { name: 'Sunscreen', stock: 46 },
      { name: 'Body Wash', stock: 79 },
      { name: 'Makeup Kit', stock: 23 },
    ],
  },
  {
    id: 'sc-6',
    name: 'Glasses',
    icon: '/images/icons/glasses.svg',
    items: [
      { name: 'Sunglasses', stock: 50 },
      { name: 'Lenses', stock: 48 },
    ],
  },
  {
    id: 'sc-7',
    name: 'Bags',
    icon: '/images/icons/bag.svg',
    items: [
      { name: 'Shopping Bag', stock: 62 },
      { name: 'Gym Backpack', stock: 35 },
      { name: 'Purse', stock: 80 },
      { name: 'Wallet', stock: 75 },
    ],
  },
]

export const blogs = [
  { id: 'blog-1', title: 'Clothes Retail KPIs 2021 Guide for Clothes Executives.', image: '/images/blog-1.jpg', category: 'Fashion', author: 'Mr Admin', date: 'Apr 06, 2022', slug: 'clothes-retail-kpis-2021' },
  { id: 'blog-2', title: 'Curbside fashion Trends: How to Win the Pickup Battle.', image: '/images/blog-2.jpg', category: 'Clothes', author: 'Mr Robin', date: 'Jan 18, 2022', slug: 'curbside-fashion-trends' },
  { id: 'blog-3', title: 'EBT vendors: Claim Your Share of SNAP Online Revenue.', image: '/images/blog-3.jpg', category: 'Shoes', author: 'Mr Selsa', date: 'Feb 10, 2022', slug: 'ebt-vendors-snap-online' },
  { id: 'blog-4', title: 'Curbside fashion Trends: How to Win the Pickup Battle.', image: '/images/blog-4.jpg', category: 'Electronics', author: 'Mr Pawar', date: 'Mar 15, 2022', slug: 'curbside-fashion-trends-2' },
]
