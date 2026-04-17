import heroImg from '../../image/image.png'

export default function Hero() {
  return (
    <section className="hero">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="hero__overlay" />

      <div className="hero__content">
        <p className="hero__pre-title">HAKKA ORIGINAL</p>
        <h1 className="hero__title">客家本色</h1>
        <div className="hero__divider" />
        <p className="hero__subtitle">傳承百年客家風味　精緻呈現本色之美</p>
      </div>

      <div className="hero__scroll">
        <span>向下探索</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
