import { createFileRoute } from '@tanstack/react-router'
import { newProducts } from '~/data/products'
import { ProductCard } from '~/components/ui/ProductCard'
import { SidebarSection } from '~/components/sections/SidebarSection'

export const Route = createFileRoute('/category/$slug')({
  component: CategoryPage,
})

function CategoryPage() {
  const { slug } = Route.useParams()
  const label = slug.replace(/-/g, ' ')

  const filtered = newProducts.filter(
    p => p.category.toLowerCase() === label.toLowerCase() || slug === 'all'
  )

  const products = filtered.length > 0 ? filtered : newProducts

  return (
    <main>
      <div className="product-container" style={{ paddingTop: 30 }}>
        <div className="container">
          <SidebarSection />
          <div className="product-box">
            <div className="product-main">
              <h2 className="title" style={{ textTransform: 'capitalize' }}>
                {label}
              </h2>
              <div className="product-grid">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
