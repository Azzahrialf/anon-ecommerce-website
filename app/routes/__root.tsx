import { useState } from 'react'
import type { ReactNode } from 'react'
import {
  Outlet,
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'
import { QueryClientProvider } from '@tanstack/react-query'
import { Header } from '~/components/layout/Header'
import { MobileMenu } from '~/components/layout/MobileMenu'
import { Footer } from '~/components/layout/Footer'
import { NewsletterModal } from '~/components/ui/NewsletterModal'
import { NotificationToast } from '~/components/ui/NotificationToast'
import appCss from '~/styles/globals.css?url'

interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Anon - eCommerce Website' },
    ],
    links: [
      { rel: 'icon', href: '/images/logo/favicon.ico', type: 'image/x-icon' },
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap',
      },
    ],
    scripts: [
      {
        type: 'module',
        src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  const { queryClient } = Route.useRouteContext()
  return (
    <QueryClientProvider client={queryClient}>
      <RootDocument>
        <AppShell />
      </RootDocument>
    </QueryClientProvider>
  )
}

function AppShell() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartCount] = useState(0)
  const [wishlistCount] = useState(0)

  return (
    <>
      <NewsletterModal />
      <NotificationToast />
      <Header
        onMobileMenuOpen={() => setMobileMenuOpen(true)}
        cartCount={cartCount}
        wishlistCount={wishlistCount}
      />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <Outlet />
      <Footer />
    </>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
