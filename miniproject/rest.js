
document.addEventListener('DOMContentLoaded', function () {
    const menuItems = [
        { name: 'Dish 1', price: '$10' },
        { name: 'Dish 2', price: '$15' },
        { name: 'Dish 3', price: '$12' },
    ];

    const menuContainer = document.getElementById('menuItems');

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `<h3>${item.name}</h3><p>${item.price}</p>`;
        menuContainer.appendChild(menuItem);
    });

    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        alert('Form submitted successfully!');
        contactForm.reset();
    });
});
