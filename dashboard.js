// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', () => {
  // Redirect to login page
  window.location.href = 'index.html';
});

// // Sidebar navigation highlight and simple content switch (if needed)
// const navList = document.getElementById('navList');
// navList.addEventListener('click', (e) => {
//   if(e.target.tagName === 'LI') {
//     // Remove active from all
//     [...navList.children].forEach(li => li.classList.remove('active'));
//     // Add active to clicked
//     e.target.classList.add('active');
//     alert(`You clicked on "${e.target.textContent}" - add your page logic here!`);
//   }
// });

// Cards data
const cardsData = [
  { title: "Today's Sales", value: "₹ 4,123", icon: "📊", className: "sales" },
  { title: "Today's Orders", value: "198", icon: "🛒", className: "orders" },
  { title: "Total Users", value: "1,200", icon: "👥", className: "customers" },
  { title: "Total Revenue", value: "₹ 10,987", icon: "💰", className: "revenue" },
];

// Render cards dynamically
const cardsContainer = document.getElementById('cardsContainer');
cardsData.forEach(card => {
  const cardEl = document.createElement('div');
  cardEl.className = `card ${card.className}`;
  cardEl.innerHTML = `
    <div class="card-icon">${card.icon}</div>
    <div class="card-content">
      <div class="card-title">${card.title}</div>
      <div class="card-value">${card.value}</div>
    </div>
  `;
  cardsContainer.appendChild(cardEl);
});

// Tables data
const billingData = [
  { invoice: '#2041', order: 'Order #22', items: 2, amount: '₹ 500' },
  { invoice: '#2042', order: 'Order #23', items: 4, amount: '₹ 1,230' },
  { invoice: '#2043', order: 'Order #24', items: 3, amount: '₹ 870' },
  { invoice: '#2044', order: 'Order #25', items: 5, amount: '₹ 1,450' },
];

const topSellingData = [
  { product: 'Cappuccino', image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=40&q=80', sales: 340, price: '₹ 180' },
  { product: 'Espresso', image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=40&q=80', sales: 290, price: '₹ 150' },
  { product: 'Mocha', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=40&q=80', sales: 270, price: '₹ 200' },
  { product: 'Latte', image: 'https://images.unsplash.com/photo-1527515637465-35f9f0b7d273?auto=format&fit=crop&w=40&q=80', sales: 260, price: '₹ 170' },
];

// Render tables dynamically
const tablesContainer = document.getElementById('tablesContainer');

function createTableWrapper(title, headers, rows, rowRenderer) {
  const wrapper = document.createElement('div');
  wrapper.className = 'table-wrapper';
  const heading = document.createElement('h3');
  heading.textContent = title;
  wrapper.appendChild(heading);

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const trHead = document.createElement('tr');
  headers.forEach(h => {
    const th = document.createElement('th');
    th.textContent = h;
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  rows.forEach(row => {
    const tr = rowRenderer(row);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  wrapper.appendChild(table);
  return wrapper;
}

function billingRowRenderer(row) {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${row.invoice}</td>
    <td>${row.order}</td>
    <td>${row.items}</td>
    <td>${row.amount}</td>
  `;
  return tr;
}

function topSellingRowRenderer(row) {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${row.product}</td>
    <td><img src="${row.image}" alt="${row.product}" /></td>
    <td>${row.sales}</td>
    <td>${row.price}</td>
    <td class="action-icons">
      <button title="View Details" onclick="alert('Viewing ${row.product}')">🔍</button>
      <button title="Edit" onclick="alert('Editing ${row.product}')">✏️</button>
      <button title="Delete" onclick="alert('Deleting ${row.product}')">🗑️</button>
    </td>
  `;
  return tr;
}

tablesContainer.appendChild(createTableWrapper("Today's Billing", ['Invoice', 'Order', 'Items', 'Amount'], billingData, billingRowRenderer));
tablesContainer.appendChild(createTableWrapper("Top Selling Items", ['Product', 'Image', 'Sales', 'Price', 'Action'], topSellingData, topSellingRowRenderer));



