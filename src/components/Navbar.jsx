import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: '最新消息', href: '#news' },
  { label: '品牌介紹', href: '#about' },
  { label: '菜單資訊', href: '#menu' },
  { label: '分店資訊', href: '#branches' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="navbar__logo-zh">客家本色</span>
          <span className="navbar__logo-en">HAKKA ORIGINAL</span>
        </a>

        <ul className={`navbar__links${open ? ' navbar__links--open' : ''}`}>
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => { e.preventDefault(); scrollTo(href) }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__toggle${open ? ' open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="選單"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
