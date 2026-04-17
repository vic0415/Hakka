const BRANCHES = [
  {
    id: 1,
    name: '台北大安店',
    address: '台北市大安區忠孝東路四段 123 號',
    phone: '02-2771-0415',
    hours: '週一至週日　11:30 – 21:30',
    image: null,
  },
  {
    id: 2,
    name: '台北信義店',
    address: '台北市信義區松仁路 88 號 2 樓',
    phone: '02-8789-0415',
    hours: '週一至週日　11:30 – 22:00',
    image: null,
  },
]

function PlaceholderIcon() {
  return (
    <svg
      className="branch-card__placeholder-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  )
}

export default function Branches() {
  return (
    <section id="branches" className="section section--dark">
      <div className="section__inner">
        <div className="section__header">
          <h2 className="section__title">分店資訊</h2>
          <p className="section__subtitle">LOCATIONS</p>
        </div>

        <div className="branches__grid">
          {BRANCHES.map((branch) => (
            <div key={branch.id} className="branch-card">
              <div className="branch-card__photo">
                {branch.image ? (
                  <img src={branch.image} alt={branch.name} />
                ) : (
                  <div className="branch-card__placeholder">
                    <PlaceholderIcon />
                    <span>照片即將上線</span>
                  </div>
                )}
              </div>
              <div className="branch-card__info">
                <h3 className="branch-card__name">{branch.name}</h3>
                <div className="branch-card__row">
                  <span className="branch-card__row-label">地址</span>
                  <span>{branch.address}</span>
                </div>
                <div className="branch-card__row">
                  <span className="branch-card__row-label">電話</span>
                  <span>{branch.phone}</span>
                </div>
                <div className="branch-card__row">
                  <span className="branch-card__row-label">時間</span>
                  <span>{branch.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
