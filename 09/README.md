# Task 08: Spice It Up!
Our website is looking much better than when we started, but let’s add a final touch to make it even cooler—a background image for the header!

## Add The Background Image

In your `index.css` file, find the `header` selector, and let’s add a background image to it.

Add these lines inside the `header` rule:

```
background-image: url('https://picsum.photos/1920/1200?grayscale');
background-size: cover;
background-position: center;
```

Now the whole rule should look like this:

```
header {
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(50, 50, 50);
    color: rgb(255, 255, 255);
    background-image: url('https://picsum.photos/1920/1200?grayscale');
    background-size: cover;
    background-position: center;
}
```

This will add a stylish black-and-white background image that stretches to fit the whole header!

## Change the Header Text Color
Since our background image is grayscale, white text can be a bit hard to read. Let’s switch it to black for better contrast.

In the same `header` rule, change:

`color: rgb(255, 255, 255);`

to 

`color: rgb(0, 0, 0);`

This will make your header text stand out even more!

## Stuck?
If you’re stuck, don’t worry—you can check out the full solution in the **09** folder to help you along.