import type { ShowcaseProduct } from '~/data/products'

interface ProductShowcaseProps {
  title: string
  products: ShowcaseProduct[]
}

export function ProductShowcase({ title, products }: ProductShowcaseProps) {
  const half = Math.ceil(products.length / 2)
  const firstGroup = products.slice(0, half)
  const secondGroup = products.slice(half)

  return (
    <div className="product-showcase">
      <h2 className="title">{title}</h2>
      <div className="showcase-wrapper has-scrollbar">
        {[firstGroup, secondGroup].map((group, gi) => (
          <div key={gi} className="showcase-container">
            {group.map(p => (
              <div key={p.id} className="showcase">
                <a href="#" className="showcase-img-box">
                  <img src={p.image} alt={p.name} className="showcase-img" width={70} />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">{p.name}</h4>
                  </a>
                  <a href="#" className="showcase-category">{p.category}</a>
                  <div className="price-box">
                    <p className="price">${p.price}.00</p>
                    <del>${p.originalPrice}.00</del>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
