# Task 05: Add An Awesome Image

Now that we’ve added some text, it’s time to make things even cooler with a picture! Just like we used “Lorem Ipsum” as placeholder text, we’ll start with a placeholder image—but if you have an awesome image on your computer, feel free to use that instead. We’re going for a wide image that stretches across the screen to create a cool background effect.

## Adding An IMG Tag With Attributes

Inside your second `<section></section>` tag, add an `<img>` tag. Remember from the first task that some tags don’t need a closing tag like `</img>`. The `<img>` tag is one of them!

Here’s what it looks like:
`<img />`
 
1: **Adding the `src` Attribute:** This is where we tell the browser the location of our image. We’ll use a placeholder image here, but you can swap in your own later.
Here’s what it looks like:
`<img src="https://picsum.photos/1920/700/" />`
Everything inside the quotes is the link to the image.

2: **Adding the `alt` Attribute:** Next, let’s add an alt attribute, which is a short description of the image. This text will show up if the image doesn’t load.

`<img src="https://picsum.photos/1920/700/" alt="A cool placeholder image" />`

3: **Adding Width and Height:** Finally, let’s set the size with width and height attributes, so the image fills the whole screen.

Here’s the complete tag:
`<img src="https://picsum.photos/1920/700/" alt="A cool placeholder image" width="1920" height="700" />`

## Use Your Own Image

Want to use a photo from your computer? Awesome! Just save it in the same folder as your HTML file. Then, change the src attribute to the name of your file instead of the placeholder link.

For example:
`<img src="my-new-computer.jpg" alt="My cool image" width="1920" height="700" />`

Just make sure your image is big enough to fill the screen’s width, or it might look blurry or “pixelated.”

## Solution

If you get stuck, don’t worry! You can check out the full solution in the **05** folder for a sneak peek.
