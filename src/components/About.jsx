export default function About() {
  return (
    <section id="about" className="section section--dark">
      <div className="section__inner">
        <div className="section__header">
          <h2 className="section__title">品牌介紹</h2>
          <p className="section__subtitle">ABOUT US</p>
        </div>

        <div className="about__content">
          <div>
            <p className="about__text about__text--lead">
              客家本色，源自對家鄉味道最深沉的記憶與思念。
            </p>
            <p className="about__text">
              我們傳承百年客家飲食文化，以最純粹的食材、最傳統的工法，精緻呈現每一道客家菜餚的本色之美。從梅干扣肉的醬香濃郁，到薑絲大腸的酸辣爽脆，每一口都是歲月沉澱的滋味。
            </p>
            <p className="about__text">
              在這裡，我們不只是提供一頓飯食，更是邀請您走入一段客家人的生命故事，感受那份樸實而深厚的土地情感。客家本色，傳的是文化，留的是記憶，守的是那份不變的本心。
            </p>
          </div>

          <div className="about__values">
            {[
              ['01', '傳統工法'],
              ['02', '嚴選食材'],
              ['03', '精緻呈現'],
              ['04', '在地精神'],
            ].map(([num, label]) => (
              <div key={num} className="about__value-item">
                <span className="about__value-num">{num}</span>
                <span className="about__value-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
