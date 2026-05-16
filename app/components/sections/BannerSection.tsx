const banners = [
  { image: '/images/banner-1.jpg', subtitle: 'Trending item', title: "Women's latest fashion sale", startingAt: 20 },
  { image: '/images/banner-2.jpg', subtitle: 'Trending accessories', title: 'Modern sunglasses', startingAt: 15 },
  { image: '/images/banner-3.jpg', subtitle: 'Sale Offer', title: 'New fashion summer sale', startingAt: 29.99 },
]

export function BannerSection() {
  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">
          {banners.map((b, i) => (
            <div key={i} className="slider-item">
              <img src={b.image} alt={b.title} className="banner-img" />
              <div className="banner-content">
                <p className="banner-subtitle">{b.subtitle}</p>
                <h2 className="banner-title">{b.title}</h2>
                <p className="banner-text">
                  starting at $ <b>{b.startingAt}</b>.00
                </p>
                <a href="#" className="banner-btn">Shop now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
