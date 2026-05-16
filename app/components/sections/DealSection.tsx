import { dealOfTheDay } from '~/data/products'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="showcase-rating">
      {Array.from({ length: 5 }, (_, i) => (
        <ion-icon key={i} name={i < rating ? 'star' : 'star-outline'} />
      ))}
    </div>
  )
}

export function DealSection() {
  return (
    <div className="product-featured">
      <h2 className="title">Deal of the day</h2>
      <div className="showcase-wrapper has-scrollbar">
        {dealOfTheDay.map(deal => (
          <div key={deal.id} className="showcase-container">
            <div className="showcase">
              <div className="showcase-banner">
                <img src={deal.image} alt={deal.name} className="showcase-img" />
              </div>
              <div className="showcase-content">
                <StarRating rating={deal.rating} />
                <a href="#">
                  <h3 className="showcase-title">{deal.name}</h3>
                </a>
                <p className="showcase-desc">{deal.desc}</p>
                <div className="price-box">
                  <p className="price">${deal.price}.00</p>
                  <del>${deal.originalPrice}.00</del>
                </div>
                <button className="add-cart-btn">Add to cart</button>
                <div className="showcase-status">
                  <div className="wrapper">
                    <p>already sold: <b>{deal.sold}</b></p>
                    <p>available: <b>{deal.available}</b></p>
                  </div>
                  <div className="showcase-status-bar" />
                </div>
                <div className="countdown-box">
                  <p className="countdown-desc">Hurry Up! Offer ends in:</p>
                  <div className="countdown">
                    {[{ n: 360, t: 'Days' }, { n: 24, t: 'Hours' }, { n: 59, t: 'Min' }, { n: '00', t: 'Sec' }].map(c => (
                      <div key={c.t} className="countdown-content">
                        <p className="display-number">{c.n}</p>
                        <p className="display-text">{c.t}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
