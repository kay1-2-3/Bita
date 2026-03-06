import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import Layout from '../components/Layout'
import { Admin, Authenticated, Guest } from '../lib/authorization'
import { IPageProps } from '../lib/types'
import useTitle from '../lib/use-title'

const Index: React.FC = () => {
  const {
    props: { user, authenticated },
  } = usePage<IPageProps>()
  authenticated ? useTitle(user.name) : useTitle('Home')
  const backgroundImageUrl =
    'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1920&q=80'

  return (
    <Layout links={[]}>
      <div
        className="relative min-h-full w-full flex flex-col items-center justify-center px-5 py-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <Guest>
            <div className="flex flex-col items-center w-full max-w-sm">
              <span
                className="text-black uppercase tracking-wide mb-6 block select-none"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(2.5rem, 12vw, 5rem)',
                  fontWeight: 700,
                  opacity: 0.85,
                }}
                aria-hidden
              >
                BITA
              </span>
              <div className="bg-white w-full p-5 rounded-lg shadow-lg">
              <Link className="button my-3" href="/auth/login">
                Login
              </Link>
              <Link className="button my-3" href="/auth/register">
                Register
              </Link>
              </div>
            </div>
          </Guest>

          <Authenticated>
            <div className="bg-white w-full max-w-md p-5 rounded-lg shadow-lg">
            <pre
              style={{
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
              }}
            >
              {JSON.stringify(user, null, 2)}
            </pre>
            <div className="mt-4">
              <Admin>
                <Link className="button w-full mb-4" href="/admin">
                  Admin
                </Link>
              </Admin>
              <Link className="button w-full" href="/auth/logout">
                Logout
              </Link>
            </div>
            </div>
          </Authenticated>
        </div>
      </div>
    </Layout>
  )
}

export default Index
