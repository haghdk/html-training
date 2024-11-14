# Task 11: Adding Some JavaScript Magic
Wow! Our website is looking amazing and has its own style. Now, let’s add some dynamic fun! For that, we’ll use JavaScript.

## What is JavaScript?

Now that we’ve styled our website, you might be wondering: can we make it do cool stuff? That’s where JavaScript comes in!

JavaScript is like the "action hero" of web development. It lets you add fun and interactive features to your website—things that change, move, or respond when you click a button or type something. With JavaScript, you can create things like pop-up messages, animations, and even games!

Think of HTML as the bones, CSS as the style, and JavaScript as the brains that make your website come alive. It’s a super powerful tool that makes websites interactive and engaging!

## Create A JavaScript file

Just like we created the `index.html` and `index.css` files, create a new file and call it `index.js`.

Then, copy this code into the `index.js` file:

```
const footerYear = document.querySelector('.footer-year');
const date = new Date();
const currentYear = date.getFullYear();
footerYear.textContent = currentYear.toString();

const websiteTitle = "My Awesome Website"
const titleElements = document.querySelectorAll('.website-title');

titleElements.forEach(item => {
    item.textContent = websiteTitle;
});
```

## What Does This Code Do?

Let’s break down what’s happening here!

1: **Getting the Current Year:**
`const footerYear = document.querySelector('.footer-year');`

This line finds an element in our HTML that has the class footer-year and saves it to a variable called footerYear. Think of a variable as a storage box where we can save information to use later.

```
const date = new Date();
const currentYear = date.getFullYear();
```

Here, we create a **date** variable that stores the current date. Then, we get the current year (like 2024) and save it in the **currentYear** variable.

`footerYear.textContent = currentYear.toString();`

This line updates the text inside the footer-year element with the current year. So, our website will always display the correct year without us updating it each January!

2: **Setting the Website Title:**
```
const websiteTitle = "My Awesome Website";
const titleElements = document.querySelectorAll('.website-title');

titleElements.forEach(item => {
    item.textContent = websiteTitle;
});
```

Here, we save the title of our website in the variable `websiteTitle` and use JavaScript to place it inside any element with the `website-title` class. This means we can easily update our website title across the entire site just by changing this line.

## Link It in the HTML

Now, let’s link our JavaScript file to the HTML.

In your HTML file, just before the `</body>` tag, add this line:

`<script type="text/javascript" src="index.js"></script>`

## Update Your HTML Elements


1: Change the `<h1></h1>` tag to this:
`<h1 class="website-title"></h1>` 
_(Note: We’ve removed the text here, since it will now be added automatically by JavaScript.)_

2: In the `<footer>`, replace the text inside `<div>`    with this line:

`<span class="footer-year"></span> - <span class="website-title"></span>`

Now, the current year and website title will automatically appear, thanks to JavaScript. How cool is that?