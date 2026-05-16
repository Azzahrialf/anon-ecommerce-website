import { Link } from '@tanstack/react-router'
import type { Product } from '~/data/products'

interface ProductCardProps {
  product: Product
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="showcase-rating">
      {Array.from({ length: 5 }, (_, i) => (
        <ion-icon key={i} name={i < rating ? 'star' : 'star-outline'} />
      ))}
    </div>
  )
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="showcase">
      <div className="showcase-banner">
        <img
          src={product.image}
          alt={product.name}
          width={300}
          className="product-img default"
        />
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={product.name}
            width={300}
            className="product-img hover"
          />
        )}

        {product.badge && (
          <p className={`showcase-badge${product.badgeStyle && product.badgeStyle !== 'default' ? ` angle ${product.badgeStyle}` : ''}`}>
            {product.badge}
          </p>
        )}

        <div className="showcase-actions">
          <button className="btn-action" title="Add to wishlist">
            <ion-icon name="heart-outline" />
          </button>
          <button className="btn-action" title="Quick view">
            <ion-icon name="eye-outline" />
          </button>
          <button className="btn-action" title="Compare">
            <ion-icon name="repeat-outline" />
          </button>
          <button className="btn-action" title="Add to cart">
            <ion-icon name="bag-add-outline" />
          </button>
        </div>
      </div>

      <div className="showcase-content">
        <Link to="/category/$slug" params={{ slug: product.category.toLowerCase() }} className="showcase-category">
          {product.category}
        </Link>
        <h3>
          <Link to="/product/$id" params={{ id: product.id }} className="showcase-title">
            {product.name}
          </Link>
        </h3>
        <StarRating rating={product.rating} />
        <div className="price-box">
          <p className="price">${product.price}.00</p>
          <del>${product.originalPrice}.00</del>
        </div>
      </div>
    </div>
  )
}
