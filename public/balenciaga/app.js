// Balenciaga concept store — vanilla JS
(function () {
  // SVG visuals (no external images — works offline / on any host)
  const svg = {
    hoodie: `<svg class="card__svg" viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#fff" stroke-width="1.5"><path d="M50 60 Q100 30 150 60 L180 90 L160 110 L160 220 L40 220 L40 110 L20 90 Z"/><path d="M70 50 Q100 80 130 50"/><path d="M85 90 L85 140 M115 90 L115 140"/><path d="M100 90 L100 130"/></g></svg>`,
    tee: `<svg class="card__svg" viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#fff" stroke-width="1.5"><path d="M60 60 L40 90 L60 110 L60 220 L140 220 L140 110 L160 90 L140 60 L120 70 Q100 85 80 70 Z"/><text x="100" y="160" text-anchor="middle" fill="#fff" font-size="14" font-family="Helvetica" letter-spacing="3">B.</text></g></svg>`,
    pants: `<svg class="card__svg" viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#fff" stroke-width="1.5"><path d="M60 30 L140 30 L150 130 L130 230 L110 230 L100 140 L90 230 L70 230 L50 130 Z"/><path d="M60 50 L140 50"/></g></svg>`,
    jacket: `<svg class="card__svg" viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#fff" stroke-width="1.5"><path d="M55 50 L100 30 L145 50 L170 90 L150 105 L150 220 L50 220 L50 105 L30 90 Z"/><path d="M100 30 L100 220"/><circle cx="85" cy="100" r="2" fill="#fff"/><circle cx="85" cy="130" r="2" fill="#fff"/><circle cx="85" cy="160" r="2" fill="#fff"/></g></svg>`,
    sneaker: `<svg class="card__svg" viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#fff" stroke-width="1.5"><path d="M20 100 Q40 60 90 55 Q130 50 160 70 L195 75 Q210 85 205 105 L200 115 L25 115 Z"/><path d="M25 100 L200 100"/><path d="M70 75 L80 95 M90 70 L100 90 M110 65 L120 85"/><ellipse cx="170" cy="85" rx="15" ry="8" fill="none"/></g></svg>`,
    boot: `<svg class="card__svg" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#fff" stroke-width="1.5"><path d="M70 20 L130 20 L135 150 L180 150 L185 180 L180 200 L40 200 L35 180 L40 160 Z"/><path d="M70 60 L130 60 M70 90 L130 90 M70 120 L130 120"/></g></svg>`,
    bagCity: `<svg class="card__svg" viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#fff" stroke-width="1.5"><path d="M40 60 L180 60 L190 170 L30 170 Z"/><path d="M70 60 Q70 30 110 30 Q150 30 150 60"/><circle cx="60" cy="80" r="3" fill="#fff"/><path d="M150 90 L170 90"/></g></svg>`,
    hourglass: `<svg class="card__svg" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#fff" stroke-width="1.5"><path d="M30 50 L170 50 Q190 100 170 150 L30 150 Q10 100 30 50 Z"/><path d="M70 50 Q70 25 100 25 Q130 25 130 50"/><circle cx="100" cy="100" r="6" fill="none"/></g></svg>`,
    cap: `<svg class="card__svg" viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#fff" stroke-width="1.5"><path d="M40 80 Q40 30 110 30 Q180 30 180 80 L180 90 L40 90 Z"/><path d="M180 90 L210 100 L40 100 Z"/><text x="110" y="70" text-anchor="middle" fill="#fff" font-size="11" letter-spacing="2">B</text></g></svg>`,
    sock: `<svg class="card__svg" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#fff" stroke-width="1.5"><path d="M70 20 L130 20 L130 140 Q130 170 160 180 L180 190 L180 200 L60 200 L60 180 Q70 170 70 140 Z"/><path d="M70 50 L130 50"/></g></svg>`,
    perfume: `<svg class="card__svg" viewBox="0 0 160 220" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#fff" stroke-width="1.5"><rect x="65" y="20" width="30" height="40"/><path d="M50 60 L110 60 L120 100 L120 200 L40 200 L40 100 Z"/><text x="80" y="160" text-anchor="middle" fill="#fff" font-size="11" letter-spacing="2">B.</text></g></svg>`,
    mug: `<svg class="card__svg" viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#fff" stroke-width="1.5"><rect x="40" y="40" width="110" height="110"/><path d="M150 70 Q190 70 190 110 Q190 140 150 140"/><text x="95" y="105" text-anchor="middle" fill="#fff" font-size="14" letter-spacing="3">B</text></g></svg>`,
    candle: `<svg class="card__svg" viewBox="0 0 160 220" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#fff" stroke-width="1.5"><path d="M80 20 Q90 35 80 50 Q70 35 80 20"/><rect x="40" y="60" width="80" height="140"/><text x="80" y="140" text-anchor="middle" fill="#fff" font-size="10" letter-spacing="2">PARIS</text></g></svg>`,
    notebook: `<svg class="card__svg" viewBox="0 0 180 220" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#fff" stroke-width="1.5"><rect x="30" y="20" width="120" height="180"/><path d="M50 20 L50 200"/><text x="100" y="115" text-anchor="middle" fill="#fff" font-size="12" letter-spacing="3">BAL.</text></g></svg>`,
  };

  const products = {
    clothing: [
      { id: 'c1', name: 'Oversized Hoodie', price: 1290, art: 'hoodie', badge: 'NEW' },
      { id: 'c2', name: 'Logo T-Shirt', price: 590, art: 'tee' },
      { id: 'c3', name: 'Baggy Cargo Pants', price: 1450, art: 'pants' },
      { id: 'c4', name: 'Destroyed Denim Jacket', price: 2390, art: 'jacket', badge: 'FW25' },
      { id: 'c5', name: 'Logo Crewneck', price: 990, art: 'tee' },
      { id: 'c6', name: 'Wide-Leg Trousers', price: 1190, art: 'pants' },
    ],
    shoes: [
      { id: 's1', name: 'Triple S Sneaker', price: 1150, art: 'sneaker', badge: 'ICON' },
      { id: 's2', name: 'Speed Trainer', price: 850, art: 'sneaker' },
      { id: 's3', name: 'Combat Boot', price: 1690, art: 'boot' },
      { id: 's4', name: 'Track Sneaker', price: 990, art: 'sneaker' },
    ],
    bags: [
      { id: 'b1', name: 'Le Cagole Shoulder', price: 2490, art: 'bagCity', badge: 'HOT' },
      { id: 'b2', name: 'Hourglass Small', price: 2990, art: 'hourglass' },
      { id: 'b3', name: 'City Classic', price: 2190, art: 'bagCity' },
      { id: 'b4', name: 'Hourglass Mini', price: 2390, art: 'hourglass' },
    ],
    goods: [
      { id: 'g1', name: 'Logo Cap', price: 450, art: 'cap' },
      { id: 'g2', name: 'Intarsia Socks', price: 250, art: 'sock' },
      { id: 'g3', name: 'Eau de Parfum 100ml', price: 320, art: 'perfume', badge: 'NEW' },
      { id: 'g4', name: 'Ceramic Mug', price: 180, art: 'mug' },
      { id: 'g5', name: 'Scented Candle', price: 220, art: 'candle' },
      { id: 'g6', name: 'Leather Notebook', price: 390, art: 'notebook' },
    ],
  };

  // Render grids
  function cardHTML(p) {
    return `
      <article class="card">
        <div class="card__media">
          ${p.badge ? `<span class="card__badge">${p.badge}</span>` : ''}
          ${svg[p.art] || ''}
        </div>
        <div class="card__body">
          <div class="card__name">${p.name}</div>
          <div class="card__price">$${p.price.toLocaleString()}</div>
          <button class="card__add" data-id="${p.id}">ADD TO CART</button>
        </div>
      </article>`;
  }

  Object.keys(products).forEach(key => {
    const grid = document.querySelector(`[data-grid="${key}"]`);
    if (grid) grid.innerHTML = products[key].map(cardHTML).join('');
  });

  // Cart
  const allProducts = Object.values(products).flat();
  const productById = id => allProducts.find(p => p.id === id);
  let cart = {}; // id -> qty
  try { cart = JSON.parse(localStorage.getItem('bal_cart') || '{}'); } catch(e) {}

  const $count = document.getElementById('cartCount');
  const $items = document.getElementById('cartItems');
  const $total = document.getElementById('cartTotal');
  const $drawer = document.getElementById('drawer');

  function save() { localStorage.setItem('bal_cart', JSON.stringify(cart)); }
  function totalQty() { return Object.values(cart).reduce((a,b)=>a+b,0); }
  function totalPrice() {
    return Object.entries(cart).reduce((sum,[id,q]) => {
      const p = productById(id); return sum + (p ? p.price*q : 0);
    }, 0);
  }
  function render() {
    $count.textContent = totalQty();
    $total.textContent = '$' + totalPrice().toLocaleString();
    const ids = Object.keys(cart);
    if (!ids.length) {
      $items.innerHTML = '<div class="drawer__empty">Your cart is empty.</div>';
      return;
    }
    $items.innerHTML = ids.map(id => {
      const p = productById(id); if (!p) return '';
      return `<div class="cart-item">
        <div>
          <div class="cart-item__name">${p.name}</div>
          <div class="cart-item__price">$${p.price.toLocaleString()}</div>
          <div class="cart-item__qty">
            <button data-act="dec" data-id="${id}">−</button>
            <span>${cart[id]}</span>
            <button data-act="inc" data-id="${id}">+</button>
            <button class="cart-item__remove" data-act="rm" data-id="${id}">REMOVE</button>
          </div>
        </div>
      </div>`;
    }).join('');
  }

  document.addEventListener('click', e => {
    const add = e.target.closest('.card__add');
    if (add) {
      const id = add.dataset.id;
      cart[id] = (cart[id] || 0) + 1;
      save(); render();
      add.classList.add('added');
      add.textContent = 'ADDED ✓';
      setTimeout(() => { add.classList.remove('added'); add.textContent = 'ADD TO CART'; }, 1200);
      return;
    }
    const act = e.target.closest('[data-act]');
    if (act) {
      const { act: a, id } = act.dataset;
      if (a === 'inc') cart[id]++;
      if (a === 'dec') { cart[id]--; if (cart[id] <= 0) delete cart[id]; }
      if (a === 'rm') delete cart[id];
      save(); render();
      return;
    }
    if (e.target.closest('[data-close]')) $drawer.classList.remove('open');
  });

  document.getElementById('cartBtn').addEventListener('click', () => {
    $drawer.classList.add('open');
  });

  document.getElementById('year').textContent = new Date().getFullYear();
  render();
})();
