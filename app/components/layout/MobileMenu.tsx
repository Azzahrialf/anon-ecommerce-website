import { useState } from 'react'
import { Link } from '@tanstack/react-router'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { label: "Men's", slug: 'mens', items: ['Shirt', 'Shorts & Jeans', 'Safety Shoes', 'Wallet'] },
  { label: "Women's", slug: 'womens', items: ['Dress & Frock', 'Earrings', 'Necklace', 'Makeup Kit'] },
  { label: 'Jewelry', slug: 'jewelry', items: ['Earrings', 'Couple Rings', 'Necklace', 'Bracelets'] },
  { label: 'Perfume', slug: 'perfume', items: ['Clothes Perfume', 'Deodorant', 'Flower Fragrance', 'Air Freshener'] },
]

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setOpenAccordion(prev => prev === id ? null : id)
  }

  return (
    <>
      {isOpen && (
        <div className="overlay active" onClick={onClose} />
      )}

      <nav className={`mobile-navigation-menu has-scrollbar${isOpen ? ' active' : ''}`}>
        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>
          <button className="menu-close-btn" onClick={onClose}>
            <ion-icon name="close-outline" />
          </button>
        </div>

        <ul className="mobile-menu-category-list">
          <li className="menu-category">
            <Link to="/" className="menu-title" onClick={onClose}>Home</Link>
          </li>

          {menuItems.map(item => (
            <li key={item.slug} className="menu-category">
              <button
                className={`accordion-menu${openAccordion === item.slug ? ' active' : ''}`}
                onClick={() => toggleAccordion(item.slug)}
              >
                <p className="menu-title">{item.label}</p>
                <div>
                  <ion-icon name="add-outline" class="add-icon" />
                  <ion-icon name="remove-outline" class="remove-icon" />
                </div>
              </button>
              <ul className={`submenu-category-list${openAccordion === item.slug ? ' active' : ''}`}>
                {item.items.map(sub => (
                  <li key={sub} className="submenu-category">
                    <a href="#" className="submenu-title">{sub}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          <li className="menu-category">
            <Link to="/blog" className="menu-title" onClick={onClose}>Blog</Link>
          </li>
          <li className="menu-category">
            <a href="#" className="menu-title">Hot Offers</a>
          </li>
        </ul>

        <div className="menu-bottom">
          <ul className="menu-category-list">
            <li className="menu-category">
              <button
                className={`accordion-menu${openAccordion === 'language' ? ' active' : ''}`}
                onClick={() => toggleAccordion('language')}
              >
                <p className="menu-title">Language</p>
                <ion-icon name="caret-back-outline" class="caret-back" />
              </button>
              <ul className={`submenu-category-list${openAccordion === 'language' ? ' active' : ''}`}>
                {['English', 'Español', 'Français'].map(lang => (
                  <li key={lang} className="submenu-category">
                    <a href="#" className="submenu-title">{lang}</a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="menu-category">
              <button
                className={`accordion-menu${openAccordion === 'currency' ? ' active' : ''}`}
                onClick={() => toggleAccordion('currency')}
              >
                <p className="menu-title">Currency</p>
                <ion-icon name="caret-back-outline" class="caret-back" />
              </button>
              <ul className={`submenu-category-list${openAccordion === 'currency' ? ' active' : ''}`}>
                {['USD $', 'EUR €'].map(c => (
                  <li key={c} className="submenu-category">
                    <a href="#" className="submenu-title">{c}</a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          <ul className="menu-social-container">
            <li><a href="#" className="social-link"><ion-icon name="logo-facebook" /></a></li>
            <li><a href="#" className="social-link"><ion-icon name="logo-twitter" /></a></li>
            <li><a href="#" className="social-link"><ion-icon name="logo-instagram" /></a></li>
            <li><a href="#" className="social-link"><ion-icon name="logo-linkedin" /></a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}
