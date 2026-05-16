import { createFileRoute } from '@tanstack/react-router'
import { BannerSection } from '~/components/sections/BannerSection'
import { CategorySection } from '~/components/sections/CategorySection'
import { SidebarSection } from '~/components/sections/SidebarSection'
import { ProductShowcase } from '~/components/sections/ProductShowcase'
import { DealSection } from '~/components/sections/DealSection'
import { TestimonialSection } from '~/components/sections/TestimonialSection'
import { BlogSection } from '~/components/sections/BlogSection'
import { ProductCard } from '~/components/ui/ProductCard'
import { newArrivals, trending, topRated, newProducts } from '~/data/products'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main>
      <BannerSection />
      <CategorySection />

      <div className="product-container">
        <div className="container">
          <SidebarSection />
          <div className="product-box">
            <div className="product-minimal">
              <ProductShowcase title="New Arrivals" products={newArrivals} />
              <ProductShowcase title="Trending" products={trending} />
              <ProductShowcase title="Top Rated" products={topRated} />
            </div>

            <DealSection />

            <div className="product-main">
              <h2 className="title">New Products</h2>
              <div className="product-grid">
                {newProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <TestimonialSection />
      <BlogSection />
    </main>
  )
}
