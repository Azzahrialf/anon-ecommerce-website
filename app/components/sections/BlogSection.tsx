import { Link } from '@tanstack/react-router'
import { blogs } from '~/data/categories'

export function BlogSection() {
  return (
    <div className="blog">
      <div className="container">
        <div className="blog-container has-scrollbar">
          {blogs.map(blog => (
            <div key={blog.id} className="blog-card">
              <div className="blog-banner-wrap">
                <Link to="/blog/$slug" params={{ slug: blog.slug }}>
                  <img src={blog.image} alt={blog.title} width={300} className="blog-banner" />
                </Link>
              </div>
              <div className="blog-content">
                <Link to="/blog/$slug" params={{ slug: blog.slug }} className="blog-category">
                  {blog.category}
                </Link>
                <h3>
                  <Link to="/blog/$slug" params={{ slug: blog.slug }} className="blog-title">
                    {blog.title}
                  </Link>
                </h3>
                <p className="blog-meta">
                  By <cite>{blog.author}</cite> / <time>{blog.date}</time>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
