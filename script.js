const menuData = {
  Starters: [
    { name: 'Masala Dosa', price: '₹120', src: 'image/menu/fast food/masala dosa.jpg' },
    { name: 'Idli', price: '₹80', src: 'image/menu/fast food/Idli.jpg' },
    { name: 'Paneer Tikka', price: '₹180', src: 'image/menu/fast food/paneer tikka.jpg' },
    { name: 'Khaman Dhokla', price: '₹90', src: 'image/menu/fast food/Khaman Dhokla recipe.jpg' },
    { name: 'Manchurian', price: '₹160', src: 'image/menu/fast food/manchurian.jpg' },
    { name: 'Chilli Paneer', price: '₹170', src: 'image/menu/fast food/chilli 🌶 paneer.jpg' }
  ],
  'Main Course': [
    { name: 'Aloo Gobi', price: '₹140', src: 'image/menu/main course/aloo gobhi.jpg' },
    { name: 'Aloo Matar', price: '₹135', src: 'image/menu/main course/aloo matar.jpg' },
    { name: 'Aloo Methi', price: '₹145', src: 'image/menu/main course/aloo methi.jpg' },
    { name: 'Aloo Shimla Mirch', price: '₹150', src: 'image/menu/main course/aloo shimlamirch.jpg' },
    { name: 'Aloo Tikki', price: '₹125', src: 'image/menu/main course/aloo tikki.jpg' },
    { name: 'Bhatura', price: '₹110', src: 'image/menu/main course/bhatura.jpg' },
    { name: 'Bhindi Masala', price: '₹140', src: 'image/menu/main course/bhindi masala.jpg' },
    { name: 'Chana Masala', price: '₹145', src: 'image/menu/main course/chana masala.jpg' },
    { name: 'Chapati', price: '₹35', src: 'image/menu/main course/chapati.jpg' },
    { name: 'Daal Makhani', price: '₹160', src: 'image/menu/main course/daal makhani.jpg' },
    { name: 'Daal Tadka', price: '₹155', src: 'image/menu/main course/daal tadka.jpg' },
    { name: 'Dum Aloo', price: '₹150', src: 'image/menu/main course/dum aloo.jpg' },
    { name: 'Kadhai Paneer', price: '₹190', src: 'image/menu/main course/kadhai paneer.jpg' },
    { name: 'Kadhi', price: '₹135', src: 'image/menu/main course/kadhi.jpg' },
    { name: 'Kofta', price: '₹170', src: 'image/menu/main course/kofta.jpg' },
    { name: 'Naan', price: '₹40', src: 'image/menu/main course/naan.jpg' },
    { name: 'Palaj Paneer', price: '₹185', src: 'image/menu/main course/palaj paneer.jpg' },
    { name: 'Paneer Butter Masala', price: '₹190', src: 'image/menu/main course/paneer butter masala.jpg' },
    { name: 'Rajma Chawal', price: '₹165', src: 'image/menu/main course/rajma chawal.jpg' }
  ],
  'Cocktails / Mocktails': [
    { name: 'Berry Bliss', price: '₹140', src: 'image/menu/shakes and icecreams/berry shake.jpg' },
    { name: 'Faluda Fantasy', price: '₹150', src: 'image/menu/shakes and icecreams/faluda.jpg' }
  ],
  Desserts: [
    { name: 'Cham Cham', price: '₹90', src: 'image/menu/desert/cham cham.jpg' },
    { name: 'Gulab Jamun', price: '₹95', src: 'image/menu/desert/gulab  jamun.jpg' },
    { name: 'Jalebi', price: '₹85', src: 'image/menu/desert/jalebi.jpg' },
    { name: 'Lassi', price: '₹90', src: 'image/menu/desert/lassi.jpg' },
    { name: 'Misti Doi', price: '₹100', src: 'image/menu/desert/misti doi.jpg' },
    { name: 'Mysore Pak', price: '₹95', src: 'image/menu/desert/mysore pak.jpg' },
    { name: 'Rabri', price: '₹110', src: 'image/menu/desert/rabri.jpg' },
    { name: 'Rasgulla', price: '₹90', src: 'image/menu/desert/rasgulla.jpg' },
    { name: 'Rasmalai', price: '₹100', src: 'image/menu/desert/rasmalai.jpg' },
    { name: 'Sheera', price: '₹95', src: 'image/menu/desert/sheera.jpg' },
    { name: 'Shrikhand', price: '₹100', src: 'image/menu/desert/shrikhand.jpg' }
  ],
  'Ice Creams & Shakes': [
    { name: 'Chocolate Strawberry Shake', price: '₹160', src: 'image/menu/shakes and icecreams/chocolate,strawbery and milk shake.jpg' },
    { name: 'Mango Banana Almond Shake', price: '₹170', src: 'image/menu/shakes and icecreams/mango , banana and, almand shake.jpg' }
  ],
  'Fast Food': [
    { name: 'Cheese Grilled Sandwich', price: '₹140', src: 'image/menu/fast food/cheese grilled sandwitch.jpg' },
    { name: 'Chilli Garlic Maggi', price: '₹120', src: 'image/menu/fast food/Chilli garlic Maggi.jpg' },
    { name: 'Hot & Spicy Chowmein', price: '₹150', src: 'image/menu/fast food/Hot and Spicy Chowmein.jpg' },
    { name: 'Pasta', price: '₹155', src: 'image/menu/fast food/pasta.jpg' },
    { name: 'Pav Bhaji', price: '₹145', src: 'image/menu/fast food/paw bhaji.jpg' },
    { name: 'Stir Fried Noodles', price: '₹150', src: 'image/menu/fast food/Spicy Stir-Fried Noodles.jpg' }
  ]
};

const services = [
  {
    title: 'Catering',
    text: 'Delicious vegetarian menus for intimate gatherings, office lunches, and festive occasions.',
    src: 'image/rooms and services/rd10-Hotel-Panjtara-cafe-and-restaurant-interior 2.jpg'
  },
  {
    title: 'Function Hall',
    text: 'A refined hall for celebrations, meetings, and elegant events with a touch of class.',
    src: 'image/rooms and services/r674-facade-Hotel-Panjtara-cafe-and-restaurant- function.jpg'
  },
  {
    title: 'Birthday Parties',
    text: 'A cheerful setting with warm hospitality for children, families, and themed celebrations.',
    src: 'image/rooms and services/panjtara room.jpg'
  },
  {
    title: 'Engagement & Reception',
    text: 'Beautifully styled spaces for engagement ceremonies, receptions, and grand welcomes.',
    src: 'image/rooms and services/rab8-interior-Hotel-Panjtara-cafe-and-restaurant-Best-Hotel-In-Pipariya.jpg'
  }
];

const reviews = [
  {
    name: 'Riya Sharma',
    role: 'Birthday Celebration',
    text: 'The ambience was lovely and the food was just perfect for our family gathering. Everything felt warm and well-organized.',
    rating: '★★★★★'
  },
  {
    name: 'Aman Verma',
    role: 'Reception Guest',
    text: 'The service was polished and the venue looked beautiful. Our reception felt elegant without being overwhelming.',
    rating: '★★★★★'
  },
  {
    name: 'Meera Patel',
    role: 'Lunch with Family',
    text: 'We loved the vegetarian dishes and the friendly staff. It is now our go-to place for comfort food.',
    rating: '★★★★★'
  },
  {
    name: 'Kunal Jain',
    role: 'Office Event',
    text: 'The catering and setup for our office function were excellent. Everything was delivered on time and tasted amazing.',
    rating: '★★★★★'
  }
];

const galleryImages = [
  { title: 'Grand Entrance', src: 'image/rooms and services/entrance.jpg' },
  { title: 'Restaurant Interior', src: 'image/rooms and services/interior 1.jpg' },
  { title: 'Signature Room', src: 'image/rooms and services/panjtara room.jpg' },
  { title: 'Hotel Exterior', src: 'image/rooms and services/r043-Hotel-Panjtara-cafe-and-restaurant-Best-Hotel-In-Pipariya-design.jpg' },
  { title: 'Function Hall', src: 'image/rooms and services/r674-facade-Hotel-Panjtara-cafe-and-restaurant- function.jpg' },
  { title: 'Dining View', src: 'image/rooms and services/rab8-interior-Hotel-Panjtara-cafe-and-restaurant-Best-Hotel-In-Pipariya.jpg' },
  { title: 'Elegant Design', src: 'image/rooms and services/rcea-design-Hotel-Panjtara-cafe-and-restaurant-Best-Hotel-In-Pipariya r1.jpg' },
  { title: 'Cafe Interior', src: 'image/rooms and services/rd10-Hotel-Panjtara-cafe-and-restaurant-interior 2.jpg' },
  { title: 'Front Entrance', src: 'image/front homepage/entrance.jpg' },
  { title: 'Facade', src: 'image/front homepage/exterior.jpg' },
  { title: 'Main Entry', src: 'image/front homepage/mainentry.jpg' }
];

Object.values(menuData).forEach((items) => {
  items.forEach((item) => {
    galleryImages.push({ title: item.name, src: item.src });
  });
});

services.forEach((service) => {
  galleryImages.push({ title: service.title, src: service.src });
});

function createImageMarkup(item) {
  return `<img src="${encodeURI(item.src)}" alt="${item.title || item.name}" loading="lazy" />`;
}

function renderMenu() {
  const menuContent = document.getElementById('menuContent');
  if (!menuContent) return;

  menuContent.innerHTML = Object.entries(menuData)
    .map(([category, items]) => `
      <div class="category-block reveal">
        <div class="category-title">
          <h4>${category}</h4>
          <span>${items.length} dishes</span>
        </div>
        <div class="menu-grid">
          ${items
            .map(
              (item) => `
                <article class="menu-card tilt-card">
                  ${createImageMarkup(item)}
                  <div class="card-content">
                    <h4>${item.name}</h4>
                    <span class="price">${item.price}</span>
                  </div>
                </article>
              `
            )
            .join('')}
        </div>
      </div>
    `)
    .join('');
}

function renderServices() {
  const servicesContent = document.getElementById('servicesContent');
  if (!servicesContent) return;

  servicesContent.innerHTML = services
    .map(
      (service) => `
        <article class="service-card reveal tilt-card">
          ${createImageMarkup(service)}
          <div class="overlay">
            <h4>${service.title}</h4>
            <p>${service.text}</p>
          </div>
        </article>
      `
    )
    .join('');
}

function renderGallery() {
  const galleryGrid = document.getElementById('galleryGrid');
  if (!galleryGrid) return;

  galleryGrid.innerHTML = galleryImages
    .map(
      (item) => `
        <article class="gallery-card reveal tilt-card">
          ${createImageMarkup(item)}
          <div class="gallery-caption">
            <h4>${item.title}</h4>
          </div>
        </article>
      `
    )
    .join('');
}

function renderReviews() {
  const reviewsGrid = document.getElementById('reviewsGrid');
  if (!reviewsGrid) return;

  reviewsGrid.innerHTML = reviews
    .map(
      (review) => `
        <article class="review-card reveal">
          <div class="rating">${review.rating}</div>
          <h4>${review.name}</h4>
          <p class="eyebrow">${review.role}</p>
          <p>${review.text}</p>
        </article>
      `
    )
    .join('');
}

function setupReveal() {
  const revealItems = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupTilt() {
  document.querySelectorAll('.tilt-card').forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 10;
      const rotateX = ((0.5 - y / rect.height)) * 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px) scale(1.01)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  renderServices();
  renderGallery();
  renderReviews();
  setupReveal();
  setupTilt();
});
