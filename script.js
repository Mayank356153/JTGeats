
    const starSVG = `<svg width="12" height="12" viewBox="0 0 20 20" fill="#1B1C21"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.951 2.878c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.062 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.951-.69l1.285-3.957z"/></svg>`;

    const kitchenItems = [
      { img: "images/food1.png",  name: "Home made pizza",    price: "₹190", rating: "4.7", time: "50-79 min", discount: "50%" },
      { img: "images/food2.png",  name: "Home made pizza",    price: "₹123", rating: "4.7", time: "50-79 min", discount: null },
      { img: "images/food3.png",  name: "Home made pizza",    price: "₹190", rating: "4.7", time: "50-79 min", discount: "20%" },
      { img: "images/food4.png",  name: "Home made pizza",    price: "₹190", rating: "4.7", time: "50-79 min", discount: null },
      { img: "images/food5.png",  name: "Home made pizza",    price: "$19",  rating: "4.7", time: "50-79 min", discount: "50%" },
      { img: "images/food6.png",  name: "Home made pizza",    price: "₹190", rating: "4.7", time: "50-79 min", discount: null },
      { img: "images/food7.png",  name: "Home made pizza",    price: "₹190", rating: "4.7", time: "50-79 min", discount: "20%" },
      { img: "images/food8.png",  name: "Home made pizza",    price: "₹190", rating: "4.7", time: "50-79 min", discount: "50%" },
      { img: "images/food1.png",  name: "Home made pizza",    price: "$19",  rating: "4.7", time: "50-79 min", discount: "50%" },
      { img: "images/food2.png",  name: "Home made pizza",    price: "₹190", rating: "4.7", time: "50-79 min", discount: null },
      { img: "images/food3.png",  name: "Home made pizza",    price: "₹190", rating: "4.7", time: "50-79 min", discount: "20%" },
      { img: "images/food4.png",  name: "Home made pizza",    price: "₹190", rating: "4.7", time: "50-79 min", discount: null },
    ];

    const popularItems = [
      { img: "images/food1.png",  name: "Home made pizza",   price: "₹190", rating: "4.7", time: "50-79 min", discount: null,  hasQty: true },
      { img: "images/food9.png",  name: "Tandoori Chicken",  price: "₹184", rating: "4.3", time: "15-29 min", discount: "20%", hasQty: false },
      { img: "images/food10.png", name: "Chilli Chicken",    price: "₹116", rating: "4.1", time: "30-40 min", discount: "50%", hasQty: false },
      { img: "images/food5.png",  name: "Home made pizza",   price: "₹190", rating: "4.7", time: "50-79 min", discount: null,  hasQty: false },
      { img: "images/food6.png",  name: "Butter Chicken",    price: "₹210", rating: "4.8", time: "30-45 min", discount: "10%", hasQty: false },
    ];

    // Menu Items
    const grid = document.getElementById('kitchenGrid');
    kitchenItems.forEach((item, i) => {
      grid.innerHTML += `
        <div class="food-card">
          ${item.discount ? `<span class="discount-badge">${item.discount}</span>` : ''}
          <img class="food-card-img" src="${item.img}" alt="${item.name}" onerror="this.src='https://placehold.co/300x165/e5e7eb/9ca3af?text=Food'"/>
          <div class="food-card-body">
            <div class="food-card-row">
              <span class="food-name">${item.name}</span>
              <span class="food-price">${item.price}</span>
            </div>
            <div class="food-meta">
              <div class="food-meta-left">
                <span class="rating">${starSVG} ${item.rating}</span>
                <span class="time-badge">${item.time}</span>
              </div>
              <button class="add-btn" aria-label="Add to cart">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </button>
            </div>
          </div>
        </div>`;
    });

    // Popular Food Items
    const carousel = document.getElementById('popularCarousel');
    popularItems.forEach((item, i) => {
      const bottomControls = item.hasQty
        ? `<div class="qty-control">
             <button class="qty-btn minus" onclick="changeQty(this,-1)">−</button>
             <span class="qty-num">1</span>
             <button class="qty-btn plus" onclick="changeQty(this,1)">+</button>
           </div>`
        : `<button class="add-btn" aria-label="Add to cart">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
           </button>`;

      carousel.innerHTML += `
        <div class="popular-card">
          ${item.discount ? `<span class="discount-badge">${item.discount}</span>` : ''}
          <img class="popular-card-img" src="${item.img}" alt="${item.name}" onerror="this.src='https://placehold.co/400x190/e5e7eb/9ca3af?text=Food'"/>
          <div class="popular-card-body">
            <div class="food-card-row">
              <span class="food-name">${item.name}</span>
              <span class="food-price">${item.price}</span>
            </div>
            <div class="food-meta">
              <div class="food-meta-left">
                <span class="rating">${starSVG} ${item.rating}</span>
                <span class="time-badge">${item.time}</span>
              </div>
              ${bottomControls}
            </div>
          </div>
        </div>`;
    });

    /* ── sliding ── */
    let carouselIndex = 0;
    function slideCarousel(dir) {
      const cards = carousel.querySelectorAll('.popular-card');
      const visible = window.innerWidth <= 560 ? 1 : window.innerWidth <= 900 ? 2 : 3;
      const max = cards.length - visible;
      carouselIndex = Math.max(0, Math.min(carouselIndex + dir, max));
      const cardWidth = cards[0].offsetWidth + 20; 
      carousel.scrollTo({ left: carouselIndex * cardWidth, behavior: 'smooth' });
    }

    /* ── Quantity── */
    function changeQty(btn, qty) {
      const span = btn.parentElement.querySelector('.qty-num');
      let val = parseInt(span.textContent) + qty;
      if (val < 1) val = 1;
      span.textContent = val;
    }

    /* ── SEARCH ── */
    function handleSearch() {
      const q = document.getElementById('searchInput').value.trim();
      if (q) alert(`Searching for: "${q}"`);
      else document.getElementById('searchInput').focus();
    }

    /* ── CONTACT FORM ── */
    function submitContact() {
      const name  = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const msg   = document.getElementById('contactMsg').value.trim();
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name)            { showToast('⚠️ Please enter your name.', true); return; }
      if (!emailRe.test(email)) { showToast('⚠️ Please enter a valid email.', true); return; }
      if (!msg)             { showToast('⚠️ Please enter your message.', true); return; }

      // Reset fields
      document.getElementById('contactName').value  = '';
      document.getElementById('contactEmail').value = '';
      document.getElementById('contactMsg').value   = '';
      showToast('✅ Message sent! We\'ll reply within 48 hours.');
    }

    function showToast(msg, isError) {
      const t = document.getElementById('toast');
      t.textContent = msg;
      t.style.background = isError ? '#dc2626' : '#1e2a3a';
      t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 3500);
    }

    document.getElementById('searchInput').addEventListener('keydown', e => { if (e.key === 'Enter') handleSearch(); });
