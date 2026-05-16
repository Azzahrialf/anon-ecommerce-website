import { createFileRoute, Link } from '@tanstack/react-router'
import { blogs } from '~/data/categories'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPostPage,
})

function BlogPostPage() {
  const { slug } = Route.useParams()
  const post = blogs.find(b => b.slug === slug) ?? blogs[0]

  return (
    <main>
      <div className="container" style={{ paddingTop: 40, paddingBottom: 60, maxWidth: 800 }}>
        {/* Breadcrumb */}
        <nav style={{ marginBottom: 20, fontSize: 'var(--fs-8)', color: 'var(--sonic-silver)' }}>
          <Link to="/">Home</Link> / <Link to="/blog">Blog</Link> /{' '}
          <span style={{ color: 'var(--eerie-black)' }}>{post.category}</span>
        </nav>

        <span className="blog-category" style={{ marginBottom: 10, display: 'block' }}>
          {post.category}
        </span>

        <h1
          style={{
            fontSize: 'var(--fs-2)',
            fontWeight: 'var(--weight-700)',
            color: 'var(--eerie-black)',
            marginBottom: 15,
            lineHeight: 1.4,
          }}
        >
          {post.title}
        </h1>

        <p className="blog-meta" style={{ marginBottom: 25 }}>
          By <cite>{post.author}</cite> / <time>{post.date}</time>
        </p>

        <img
          src={post.image}
          alt={post.title}
          style={{ width: '100%', borderRadius: 'var(--border-radius-md)', marginBottom: 30 }}
        />

        <div style={{ color: 'var(--sonic-silver)', fontSize: 'var(--fs-7)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: 15 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p style={{ marginBottom: 15 }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </p>
        </div>

        <div style={{ marginTop: 40 }}>
          <Link
            to="/blog"
            style={{
              display: 'inline-block',
              background: 'var(--salmon-pink)',
              color: 'var(--white)',
              padding: '10px 24px',
              borderRadius: 'var(--border-radius-sm)',
              fontSize: 'var(--fs-7)',
              fontWeight: 'var(--weight-600)',
            }}
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </main>
  )
}
