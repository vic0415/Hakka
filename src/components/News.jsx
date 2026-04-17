const NEWS = [
  {
    id: 1,
    date: '2024-03-15',
    category: '活動公告',
    title: '清明節特別套餐，傳統客家味',
    body: '清明時節，客家本色特別推出「清明養生套餐」，精選時令野菜與傳統梅干扣肉，讓您在佳節中品嚐道地客家滋味。即日起至四月底前，訂位享有九折優惠，歡迎致電各分店預約。',
  },
  {
    id: 2,
    date: '2024-02-28',
    category: '品牌動態',
    title: '新分店正式開幕，誠邀蒞臨',
    body: '客家本色第二分店正式於台北信義區盛大開幕，延續一貫的精緻用餐環境與道地客家料理，期待與您共享最純粹的客家本色。開幕期間，憑官網訂位可享精美開幕伴手禮乙份。',
  },
]

export default function News() {
  return (
    <section id="news" className="section">
      <div className="section__inner">
        <div className="section__header">
          <h2 className="section__title">最新消息</h2>
          <p className="section__subtitle">NEWS</p>
        </div>
        <div className="news__grid">
          {NEWS.map((item) => (
            <article key={item.id} className="news-card">
              <div className="news-card__meta">
                <span className="news-card__date">{item.date}</span>
                <span className="news-card__category">{item.category}</span>
              </div>
              <h3 className="news-card__title">{item.title}</h3>
              <p className="news-card__content">{item.body}</p>
              <span className="news-card__more">閱讀更多 →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
