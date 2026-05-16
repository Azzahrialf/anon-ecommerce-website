import { useEffect, useState } from 'react'

export function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const close = () => setIsOpen(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    close()
  }

  return (
    <div className={`modal${isOpen ? '' : ' closed'}`}>
      <div className="modal-close-overlay" onClick={close} />
      <div className="modal-content">
        <button className="modal-close-btn" onClick={close}>
          <ion-icon name="close-outline" />
        </button>

        <div className="newsletter-img">
          <img src="/images/newsletter.png" alt="subscribe newsletter" width={400} height={400} />
        </div>

        <div className="newsletter">
          <form onSubmit={handleSubmit}>
            <div className="newsletter-header">
              <h3 className="newsletter-title">Subscribe Newsletter.</h3>
              <p className="newsletter-desc">
                Subscribe the <b>Anon</b> to get latest products and discount update.
              </p>
            </div>
            <input
              type="email"
              className="email-field"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-newsletter">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}
