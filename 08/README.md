# Task 08: Add Some CSS
We’re almost done! To make things easier, some CSS has already been prepared for you. We’ll use this code as a starting point and add extra CSS as we go along.

## Use This CSS
For this task, copy the CSS code below and paste it into your `index.css` file.


```
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900');

body {
    margin: 0;
    padding: 0;
    font-family: "Playfair Display", sans-serif;
    font-size: 16px;
    line-height: 1.5;
}

img {
    max-width: 100%;
    height: auto;
}

h1 {
    font-size: 2.5rem;
}

h2 {
    font-size: 1.75rem;
}

header {
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(50, 50, 50);
    color: rgb(255, 255, 255);
}

.section-inner, .header-inner {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
}

footer {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
}
```

## What Does This Do?

Let’s walk through some of the styling we’ve added to our CSS file!

1: Font Import:

`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900');`

This line loads a font from Google Fonts called "Playfair Display" for a unique look on our website!

2: Body Styling:

```
body {
    margin: 0;
    padding: 0;
    font-family: "Noto Sans", sans-serif;
    font-size: 16px;
    line-height: 1.5;
}
```
Here, we remove any default spacing around the edges (margin) and inside the body (padding). We also set the font to our imported Google font and adjust the font size and line spacing

3: Image Styling

```
img {
    max-width: 100%;
    height: auto;
}
```
This keeps images from overflowing off the page. By setting max-width to 100%, images can only stretch to fit the screen size. The height automatically adjusts based on the width.

4: Combining Classes:

```
.section-inner, .header-inner {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
}
```
Here, we give both `.section-inner` and `.header-inner` some extra padding to create nice spacing around the content. Since both classes have the same styles, we can list them together, separated by a comma, instead of writing two separate rules!

## Apply the Classes to the HTML
Now let’s add these classes to our HTML so we can see the styling in action!

In the `header`, which currently looks like this:

```
<header>
    <h1>My Awesome Website</h1>
</header>
```

Add a `<div></div>` tag around the `<h1></h1>`:

```
<header>
    <div>
        <h1>My Awesome Website</h1>
    </div>
</header>
```

Next, add the `header-inner` class to the `<div>`:

`<div class="header-inner">`

Then, in the first `<section>`, add a section-inner class to the `<div>`, so it looks like this:

`<div class="section-inner">`

If you need help, check out the **08** folder for a quick example.

Now, refresh your website and see the CSS magic in action! Cool, right?
