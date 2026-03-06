import { InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'

interface ILayoutProps {
  children: React.ReactNode
  links: { href: string; label: string }[]
}

const Layout: React.FC<ILayoutProps> = ({ children, links }) => {
  return (
    <div className="flex flex-col w-full h-full bg-gray-bg">
      <nav className="flex py-2 px-3 sm:px-6 justify-between items-center flex-col sm:flex-row shrink-0">
        <div className="flex sm:w-1/3 w-full justify-center sm:justify-start">
          <div
            className="uppercase tracking-wide text-black font-semibold"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1.5rem',
              letterSpacing: '0.15em',
            }}
          >
            BITA
          </div>
        </div>

        <div className="flex items-center justify-center sm:justify-end sm:w-1/3 w-full gap-2">
          {links.map(({ href, label }, i) => (
            <InertiaLink
              href={href}
              key={i}
              className="font-medium text-xs sm:text-xs text-gray-600 uppercase hover:text-gray-800"
            >
              {label}
            </InertiaLink>
          ))}
        </div>
      </nav>

      <main className="flex-1 py-6 px-2 sm:px-0 min-h-0">{children}</main>

      <footer className="flex items-center justify-center py-2 text-gray-400 flex-col text-xs text-center px-2 shrink-0">
        <div className="text-xs font-medium text-gray-300">&bull;&bull;&bull;</div>
        <div className="mt-1">&copy; 2025 · Kunal Kumar</div>
      </footer>
    </div>
  )
}

export default Layout
