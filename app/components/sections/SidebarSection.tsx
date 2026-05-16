import { useState } from 'react'
import { sidebarCategories } from '~/data/categories'

interface SidebarSectionProps {
  onClose?: () => void
}

export function SidebarSection({ onClose }: SidebarSectionProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const toggle = (id: string) => setOpenAccordion(prev => prev === id ? null : id)

  return (
    <div className="sidebar has-scrollbar">
      <div className="sidebar-category">
        <div className="sidebar-top">
          <h2 className="sidebar-title">Category</h2>
          {onClose && (
            <button className="sidebar-close-btn" onClick={onClose}>
              <ion-icon name="close-outline" />
            </button>
          )}
        </div>

        <ul className="sidebar-menu-category-list">
          {sidebarCategories.map(cat => (
            <li key={cat.id} className="sidebar-menu-category">
              <button
                className={`sidebar-accordion-menu${openAccordion === cat.id ? ' active' : ''}`}
                onClick={() => toggle(cat.id)}
              >
                <div className="menu-title-flex">
                  <img src={cat.icon} alt={cat.name} className="menu-title-img" width={20} height={20} />
                  <p className="menu-title">{cat.name}</p>
                </div>
                <div>
                  <ion-icon name="add-outline" class="add-icon" />
                  <ion-icon name="remove-outline" class="remove-icon" />
                </div>
              </button>

              <ul className={`sidebar-submenu-category-list${openAccordion === cat.id ? ' active' : ''}`}>
                {cat.items.map(item => (
                  <li key={item.name} className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">{item.name}</p>
                      <data value={item.stock} className="stock" title="Available Stock">{item.stock}</data>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="product-showcase">
        <h3 className="showcase-heading">best sellers</h3>
        <div className="showcase-wrapper">
          <div className="showcase-container">
            {[
              { id: '1', name: 'Baby Fabric Shoes', img: '/images/products/1.jpg', price: 4, original: 5, rating: 5 },
              { id: '2', name: "Men's Hoodies T-Shirt", img: '/images/products/2.jpg', price: 7, original: 17, rating: 4 },
              { id: '3', name: "Girls T-Shirt", img: '/images/products/3.jpg', price: 3, original: 5, rating: 4 },
              { id: '4', name: 'Woolen Hat for Men', img: '/images/products/4.jpg', price: 12, original: 15, rating: 5 },
            ].map(p => (
              <div key={p.id} className="showcase">
                <a href="#" className="showcase-img-box">
                  <img src={p.img} alt={p.name} width={75} height={75} className="showcase-img" />
                </a>
                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">{p.name}</h4>
                  </a>
                  <div className="showcase-rating">
                    {Array.from({ length: 5 }, (_, i) => (
                      <ion-icon key={i} name={i < p.rating ? 'star' : 'star-half-outline'} />
                    ))}
                  </div>
                  <div className="price-box">
                    <del>${p.original}.00</del>
                    <p className="price">${p.price}.00</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
