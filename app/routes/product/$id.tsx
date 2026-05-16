import { createFileRoute, Link } from '@tanstack/react-router'
import { newProducts } from '~/data/products'
import { ProductCard } from '~/components/ui/ProductCard'

export const Route = createFileRoute('/product/$id')({
  component: ProductPage,
})

function ProductPage() {
  const { id } = Route.useParams()
  const product = newProducts.find(p => p.id === id) ?? newProducts[0]
  const related = newProducts.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <main>
      <div className="container" style={{ paddingTop: 40, paddingBottom: 40 }}>
        {/* Breadcrumb */}
        <nav style={{ marginBottom: 20, fontSize: 'var(--fs-8)', color: 'var(--sonic-silver)' }}>
          <Link to="/">Home</Link>
          {' / '}
          <Link to="/category/$slug" params={{ slug: product.category.toLowerCase() }}>
            {product.category}
          </Link>
          {' / '}
          <span style={{ color: 'var(--eerie-black)' }}>{product.name}</span>
        </nav>

        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', marginBottom: 40 }}>
          {/* Product Image */}
          <div style={{ flex: '1 1 350px' }}>
            <div className="showcase-banner" style={{ borderRadius: 'var(--border-radius-md)', overflow: 'hidden' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            </div>
          </div>

          {/* Product Details */}
          <div style={{ flex: '1 1 350px' }}>
            <Link
              to="/category/$slug"
              params={{ slug: product.category.toLowerCase() }}
              className="showcase-category"
              style={{ marginBottom: 10, display: 'block' }}
            >
              {product.category}
            </Link>
            <h1 style={{ fontSize: 'var(--fs-2)', fontWeight: 'var(--weight-600)', color: 'var(--eerie-black)', marginBottom: 15 }}>
              {product.name}
            </h1>

            <div className="showcase-rating" style={{ marginBottom: 15 }}>
              {Array.from({ length: 5 }, (_, i) => (
                <ion-icon key={i} name={i < product.rating ? 'star' : 'star-outline'} />
              ))}
            </div>

            <div className="price-box" style={{ marginBottom: 20 }}>
              <p className="price" style={{ fontSize: 'var(--fs-2)' }}>${product.price}.00</p>
              <del style={{ fontSize: 'var(--fs-5)' }}>${product.originalPrice}.00</del>
            </div>

            <button className="add-cart-btn">Add to Cart</button>

            <div style={{ display: 'flex', gap: 10, marginTop: 15 }}>
              <button className="btn-action" title="Add to wishlist">
                <ion-icon name="heart-outline" />
              </button>
              <button className="btn-action" title="Compare">
                <ion-icon name="repeat-outline" />
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="product-main">
          <h2 className="title">Related Products</h2>
          <div className="product-grid">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
