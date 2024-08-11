// Select the div with the class name 'contect'
const container = document.querySelector('.contect');
const textContect = document.querySelector('.contect h1');
console.log(textContect);
console.log(container);

// Create and append the input fields and submit button
const formHTML = `
    <form id="contact-form">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <br>
        <label for="phone">Phone No:</label>
        <input type="tel" id="phone" name="phone" required>
        <br>
        <label for="email">Email ID:</label>
        <input type="email" id="email" name="email" required>
        <br>
        <button type="submit">Submit</button>
    </form>
`;

// Append the form HTML to the container
container.innerHTML = formHTML;
container.prepend(textContect);
