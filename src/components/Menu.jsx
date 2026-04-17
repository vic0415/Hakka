import { useState } from 'react'
import menuImg from '../../image/menu/menu1.png'

const MENU = [
  {
    id: 1, category: '主菜',
    name: '梅乾扣肉',
    desc: '傳統客家功夫菜，選用三層豬肉與自製梅乾菜慢燉，軟嫩入味，醬香深醇',
    price: 380,
  },
  {
    id: 2, category: '主菜',
    name: '客家小炒',
    desc: '豆乾、魷魚、豬肉黃金組合，以客家醬油大火爆炒，最道地的下飯佳餚',
    price: 280,
  },
  {
    id: 3, category: '主菜',
    name: '薑絲大腸',
    desc: '醋香與薑絲交織，酸辣爽脆，客家最具代表性的名菜，開胃醒神',
    price: 320,
  },
  {
    id: 4, category: '主菜',
    name: '客家封肉',
    desc: '古法醃製三層肉，以米酒與醬油長時間封燉，皮 Q 肉嫩，香氣四溢',
    price: 420,
  },
  {
    id: 5, category: '主菜',
    name: '薑黃土雞',
    desc: '選用放養土雞，以客家特製薑黃醃漬後慢烤，皮酥肉嫩，香氣撲鼻',
    price: 480,
  },
  {
    id: 6, category: '蔬菜',
    name: '炒野蕨菜',
    desc: '採自山林的鮮嫩蕨菜，以蒜末大火快炒，清脆爽口，自然原味',
    price: 180,
  },
  {
    id: 7, category: '蔬菜',
    name: '醃菜燒豆腐',
    desc: '獨家客家醃漬酸菜搭配嫩豆腐，鹹香中帶酸，風味層次豐富',
    price: 160,
  },
  {
    id: 8, category: '蔬菜',
    name: '炒地瓜葉',
    desc: '新鮮採摘地瓜嫩葉，以薑蒜清炒，清甜可口，質樸健康',
    price: 150,
  },
  {
    id: 9, category: '飲料',
    name: '仙草茶',
    desc: '傳統客家仙草茶，清涼退火，甘甜爽口，最道地的客家飲品',
    price: 80,
  },
  {
    id: 10, category: '飲料',
    name: '客家擂茶',
    desc: '以擂缽研磨芝麻、花生、茶葉等食材，香醇濃郁，傳統客家文化飲品',
    price: 120,
  },
]

const CATEGORIES = ['全部', '主菜', '蔬菜', '飲料']

export default function Menu() {
  const [active, setActive] = useState('全部')

  const items = active === '全部' ? MENU : MENU.filter((m) => m.category === active)

  return (
    <section id="menu" className="section">
      <div className="section__inner">
        <div className="section__header">
          <h2 className="section__title">菜單資訊</h2>
          <p className="section__subtitle">MENU</p>
        </div>

        <div className="menu__tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`menu__tab${active === cat ? ' menu__tab--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu__grid">
          {items.map((item) => (
            <div key={item.id} className="menu-card">
              <div className="menu-card__img">
                <img src={menuImg} alt={item.name} />
                <span className="menu-card__tag">{item.category}</span>
              </div>
              <div className="menu-card__body">
                <h3 className="menu-card__name">{item.name}</h3>
                <p className="menu-card__desc">{item.desc}</p>
                <p className="menu-card__price">NT$ {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
