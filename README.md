# My Portfolio

This is my personal portfolio website built using HTML, CSS, and JavaScript. It includes various features like Font Awesome icons, Google Fonts, SMTP.js for handling emails, SweetAlert for alerts, and AOS (Animate On Scroll) for animations.

## Features

- **Font Awesome**: For including icons.
- **Google Fonts**: For custom fonts.
- **SMTP.js**: For handling email submissions from the contact form.
- **SweetAlert**: For displaying alert messages.
- **AOS (Animate On Scroll)**: For adding animations on scroll.

## Getting Started

To view and run the project, simply clone the repository and open `index.html` in your browser. There is no need for any additional installations.

### Prerequisites

Make sure you have a modern web browser installed to properly view and interact with the portfolio.

### Cloning the Repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```
### Running the Project

(1)Navigate to the cloned directory.
(2)Open index.html in your browser.


## Usage

### Font Awesome
Font Awesome icons are used throughout the website for various purposes. You can find the icons in the HTML files, referenced as:

```bash
<i class="fa fa-example"></i>
```

### Google Fonts
Google Fonts are used for typography. The fonts are linked in the HTML files like this:

```bash
<link href="https://fonts.googleapis.com/css?family=FontName" rel="stylesheet">
```

### SMTP.js
SMTP.js is used to send emails via the contact form on the website. Here is how it is implemented:

```bash
Email.send({
    SecureToken : "your-smtp-token",
    To : 'your-email@example.com',
    From : document.getElementById("email").value,
    Subject : "New Contact Form Enquiry",
    Body : "And this is the body"}).then(
  message => alert(message)
);
```
### SweetAlert
SweetAlert is used to show user-friendly alerts. An example usage is:

```bash
swal("Good job!", "You clicked the button!", "success");
```

### AOS (Animate On Scroll)
AOS is used to add animations as you scroll down the page. Initialize AOS in your JavaScript:

```bash
AOS.init();
```

Add data attributes to your HTML elements to specify the animations:

```bash
<div data-aos="fade-up">Your content here</div>
```


## Contributing
If you have suggestions or improvements, feel free to create a pull request or open an issue.

## Acknowledgments
Font Awesome
Google Fonts
SMTP.js
SweetAlert
AOS
