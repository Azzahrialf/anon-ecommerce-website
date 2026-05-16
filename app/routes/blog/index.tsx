import { createFileRoute, Link } from '@tanstack/react-router'
import { blogs } from '~/data/categories'

export const Route = createFileRoute('/blog/')({
  component: BlogListPage,
})

function BlogListPage() {
  return (
    <main>
      <div className="blog" style={{ padding: '40px 0' }}>
        <div className="container">
          <h1 className="title" style={{ marginBottom: 30 }}>Blog</h1>
          <div className="blog-container" style={{ flexWrap: 'wrap', overflowX: 'unset' }}>
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
    </main>
  )
}
