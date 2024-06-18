document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const contactList = document.getElementById('contactList');

    const loadContacts = () => {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contactList.innerHTML = '';
        contacts.forEach((contact, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${contact.name} - ${contact.email} - ${contact.phone}
                <button data-index="${index}">Delete</button>
            `;
            contactList.appendChild(li);
        });
    };

    const addContact = (contact) => {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts.push(contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        loadContacts();
    };

    const deleteContact = (index) => {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts.splice(index, 1);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        loadContacts();
    };

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        addContact({ name, email, phone });
        contactForm.reset();
    });

    contactList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const index = e.target.dataset.index;
            deleteContact(index);
        }
    });

    loadContacts();
});
