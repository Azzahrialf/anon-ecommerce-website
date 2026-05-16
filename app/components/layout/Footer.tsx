import { Link } from '@tanstack/react-router'

const footerCategories = [
  { title: 'Fashion', links: ['T-shirt', 'Shirts', 'Shorts & Jeans', 'Jacket', 'Dress & Frock', 'Innerwear', 'Hosiery'] },
  { title: 'Footwear', links: ['Sport', 'Formal', 'Boots', 'Casual', 'Cowboy Shoes', 'Safety Shoes', 'Party Wear Shoes', 'Branded', 'Firstcopy', 'Long Shoes'] },
  { title: 'Jewellery', links: ['Necklace', 'Earrings', 'Couple Rings', 'Pendants', 'Crystal', 'Bangles', 'Bracelets', 'Nosepin', 'Chain'] },
  { title: 'Cosmetics', links: ['Shampoo', 'Bodywash', 'Facewash', 'Makeup Kit', 'Liner', 'Lipstick', 'Perfume', 'Body Soap', 'Scrub', 'Hair Gel', 'Sunscreen'] },
]

export function Footer() {
  return (
    <footer>
      {/* Footer Category */}
      <div className="footer-category">
        <div className="container">
          <h2 className="footer-category-title">Brand Directory</h2>
          {footerCategories.map(cat => (
            <div key={cat.title} className="footer-category-box">
              <h3 className="category-box-title">{cat.title} :</h3>
              {cat.links.map(link => (
                <a key={link} href="#" className="footer-category-link">{link}</a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Nav */}
      <div className="footer-nav">
        <div className="container">
          <ul className="footer-nav-list">
            <li className="footer-nav-item"><h2 className="nav-title">Popular Categories</h2></li>
            {['Fashion', 'Electronic', 'Cosmetic', 'Health', 'Watches'].map(c => (
              <li key={c} className="footer-nav-item"><a href="#" className="footer-nav-link">{c}</a></li>
            ))}
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item"><h2 className="nav-title">Products</h2></li>
            {['Prices Drop', 'New Products', 'Best Sales', 'Contact Us', 'Sitemap'].map(p => (
              <li key={p} className="footer-nav-item"><a href="#" className="footer-nav-link">{p}</a></li>
            ))}
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item"><h2 className="nav-title">Our Company</h2></li>
            {['Delivery', 'Legal Notice', 'Terms and Conditions', 'About Us', 'Secure Payment'].map(c => (
              <li key={c} className="footer-nav-item"><a href="#" className="footer-nav-link">{c}</a></li>
            ))}
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item"><h2 className="nav-title">Services</h2></li>
            {['Prices Drop', 'New Products', 'Best Sales', 'Contact Us', 'Sitemap'].map(s => (
              <li key={s} className="footer-nav-item"><a href="#" className="footer-nav-link">{s}</a></li>
            ))}
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item"><h2 className="nav-title">Contact</h2></li>
            <li className="footer-nav-item flex">
              <div className="icon-box"><ion-icon name="location-outline" /></div>
              <address className="content">419 State 414 Rte Beaver Dams, New York(NY), 14812, USA</address>
            </li>
            <li className="footer-nav-item flex">
              <div className="icon-box"><ion-icon name="call-outline" /></div>
              <a href="tel:+6079368058" className="footer-nav-link">(607) 936-8058</a>
            </li>
            <li className="footer-nav-item flex">
              <div className="icon-box"><ion-icon name="mail-outline" /></div>
              <a href="mailto:example@gmail.com" className="footer-nav-link">example@gmail.com</a>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item"><h2 className="nav-title">Follow Us</h2></li>
            <li>
              <ul className="social-link">
                <li className="footer-nav-item"><a href="#" className="footer-nav-link"><ion-icon name="logo-facebook" /></a></li>
                <li className="footer-nav-item"><a href="#" className="footer-nav-link"><ion-icon name="logo-twitter" /></a></li>
                <li className="footer-nav-item"><a href="#" className="footer-nav-link"><ion-icon name="logo-linkedin" /></a></li>
                <li className="footer-nav-item"><a href="#" className="footer-nav-link"><ion-icon name="logo-instagram" /></a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <img src="/images/payment.png" alt="payment method" className="payment-img" />
          <p className="copyright">
            Copyright &copy; <Link to="/">Anon</Link> all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
