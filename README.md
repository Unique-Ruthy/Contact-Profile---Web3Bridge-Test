# Contact Profile System

The Contact Profile System allows you to create, view, and delete contact profiles. The contact information is stored in the browser's local storage.

## Features

- Create a new contact profile with a name, email, and phone number.
- View a list of all created contact profiles.
- Delete a contact profile from the list.

## How to Use

1. Open `index.html` in a web browser.
2. Use the form to enter contact details (name, email, and phone number).
3. Click the "Add Contact" button to add the contact to the list.
4. The contact will appear in the list below the form.
5. To delete a contact, click the "Delete" button next to the contact in the list.

## File Structure

- `index.html`: The main HTML file.
- `style.css`: The CSS file for styling the application.
- `script.js`: The JavaScript file for handling the application logic.
- `README.md`: This README file with instructions.

## Technical Details

- The contact data is stored in the browser's local storage.
- When the page loads, the stored contacts are loaded and displayed.
- When a new contact is added, it is saved to local storage.
- When a contact is deleted, it is removed from local storage.
