import { useState } from 'react'
import { Link } from '@tanstack/react-router'

interface HeaderProps {
  onMobileMenuOpen: () => void
  cartCount: number
  wishlistCount: number
}

export function Header({ onMobileMenuOpen, cartCount, wishlistCount }: HeaderProps) {
  const [search, setSearch] = useState('')

  return (
    <header>
      {/* Header Top */}
      <div className="header-top">
        <div className="container">
          <ul className="header-social-container">
            <li><a href="#" className="social-link"><ion-icon name="logo-facebook" /></a></li>
            <li><a href="#" className="social-link"><ion-icon name="logo-twitter" /></a></li>
            <li><a href="#" className="social-link"><ion-icon name="logo-instagram" /></a></li>
            <li><a href="#" className="social-link"><ion-icon name="logo-linkedin" /></a></li>
          </ul>

          <div className="header-alert-news">
            <p><b>Free Shipping</b> This Week Order Over - $55</p>
          </div>

          <div className="header-top-actions">
            <select name="currency">
              <option value="usd">USD $</option>
              <option value="eur">EUR €</option>
            </select>
            <select name="language">
              <option value="en-US">English</option>
              <option value="es-ES">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </div>

      {/* Header Main */}
      <div className="header-main">
        <div className="container">
          <Link to="/" className="header-logo">
            <img src="/images/logo/logo.svg" alt="Anon's logo" width={120} height={36} />
          </Link>

          <div className="header-search-container">
            <input
              type="search"
              className="search-field"
              placeholder="Enter your product name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="search-btn">
              <ion-icon name="search-outline" />
            </button>
          </div>

          <div className="header-user-actions">
            <button className="action-btn">
              <ion-icon name="person-outline" />
            </button>
            <button className="action-btn">
              <ion-icon name="heart-outline" />
              <span className="count">{wishlistCount}</span>
            </button>
            <button className="action-btn">
              <ion-icon name="bag-handle-outline" />
              <span className="count">{cartCount}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <Link to="/" className="menu-title">Home</Link>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Categories</a>
              <div className="dropdown-panel">
                <ul className="dropdown-panel-list">
                  <li className="menu-title"><a href="#">Electronics</a></li>
                  {['Desktop', 'Laptop', 'Camera', 'Tablet', 'Headphone'].map(item => (
                    <li key={item} className="panel-list-item"><Link to="/category/$slug" params={{ slug: item.toLowerCase() }}>{item}</Link></li>
                  ))}
                  <li className="panel-list-item"><a href="#"><img src="/images/electronics-banner-1.jpg" alt="headphone collection" width={250} height={119} /></a></li>
                </ul>
                <ul className="dropdown-panel-list">
                  <li className="menu-title"><a href="#">Men's</a></li>
                  {['Formal', 'Casual', 'Sports', 'Jacket', 'Sunglasses'].map(item => (
                    <li key={item} className="panel-list-item"><Link to="/category/$slug" params={{ slug: item.toLowerCase() }}>{item}</Link></li>
                  ))}
                  <li className="panel-list-item"><a href="#"><img src="/images/mens-banner.jpg" alt="men's fashion" width={250} height={119} /></a></li>
                </ul>
                <ul className="dropdown-panel-list">
                  <li className="menu-title"><a href="#">Women's</a></li>
                  {['Formal', 'Casual', 'Perfume', 'Cosmetics', 'Bags'].map(item => (
                    <li key={item} className="panel-list-item"><Link to="/category/$slug" params={{ slug: item.toLowerCase() }}>{item}</Link></li>
                  ))}
                  <li className="panel-list-item"><a href="#"><img src="/images/womens-banner.jpg" alt="women's fashion" width={250} height={119} /></a></li>
                </ul>
                <ul className="dropdown-panel-list">
                  <li className="menu-title"><a href="#">Electronics</a></li>
                  {['Smart Watch', 'Smart TV', 'Keyboard', 'Mouse', 'Microphone'].map(item => (
                    <li key={item} className="panel-list-item"><Link to="/category/$slug" params={{ slug: item.toLowerCase().replace(' ', '-') }}>{item}</Link></li>
                  ))}
                  <li className="panel-list-item"><a href="#"><img src="/images/electronics-banner-2.jpg" alt="mouse collection" width={250} height={119} /></a></li>
                </ul>
              </div>
            </li>

            <li className="menu-category">
              <Link to="/category/$slug" params={{ slug: 'mens' }} className="menu-title">Men's</Link>
              <ul className="dropdown-list">
                {["Shirt", "Shorts & Jeans", "Safety Shoes", "Wallet"].map(item => (
                  <li key={item} className="dropdown-item"><a href="#">{item}</a></li>
                ))}
              </ul>
            </li>

            <li className="menu-category">
              <Link to="/category/$slug" params={{ slug: 'womens' }} className="menu-title">Women's</Link>
              <ul className="dropdown-list">
                {["Dress & Frock", "Earrings", "Necklace", "Makeup Kit"].map(item => (
                  <li key={item} className="dropdown-item"><a href="#">{item}</a></li>
                ))}
              </ul>
            </li>

            <li className="menu-category">
              <Link to="/category/$slug" params={{ slug: 'jewelry' }} className="menu-title">Jewelry</Link>
              <ul className="dropdown-list">
                {["Earrings", "Couple Rings", "Necklace", "Bracelets"].map(item => (
                  <li key={item} className="dropdown-item"><a href="#">{item}</a></li>
                ))}
              </ul>
            </li>

            <li className="menu-category">
              <Link to="/category/$slug" params={{ slug: 'perfume' }} className="menu-title">Perfume</Link>
              <ul className="dropdown-list">
                {["Clothes Perfume", "Deodorant", "Flower Fragrance", "Air Freshener"].map(item => (
                  <li key={item} className="dropdown-item"><a href="#">{item}</a></li>
                ))}
              </ul>
            </li>

            <li className="menu-category">
              <Link to="/blog" className="menu-title">Blog</Link>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Hot Offers</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="mobile-bottom-navigation">
        <button className="action-btn" onClick={onMobileMenuOpen}>
          <ion-icon name="menu-outline" />
        </button>
        <button className="action-btn">
          <ion-icon name="bag-handle-outline" />
          <span className="count">{cartCount}</span>
        </button>
        <Link to="/" className="action-btn">
          <ion-icon name="home-outline" />
        </Link>
        <button className="action-btn">
          <ion-icon name="heart-outline" />
          <span className="count">{wishlistCount}</span>
        </button>
        <button className="action-btn" onClick={onMobileMenuOpen}>
          <ion-icon name="grid-outline" />
        </button>
      </div>
    </header>
  )
}
