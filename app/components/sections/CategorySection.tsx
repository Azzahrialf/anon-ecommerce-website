import { Link } from '@tanstack/react-router'
import { categories } from '~/data/categories'

export function CategorySection() {
  return (
    <div className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">
          {categories.map(cat => (
            <div key={cat.id} className="category-item">
              <div className="category-img-box">
                <img src={cat.icon} alt={cat.name} width={30} />
              </div>
              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">{cat.name}</h3>
                  <p className="category-item-amount">({cat.count})</p>
                </div>
                <Link to="/category/$slug" params={{ slug: cat.slug }} className="category-btn">
                  Show all
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
