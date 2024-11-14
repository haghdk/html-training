# Task 10: Play Around
Now that we’ve added a background image, it’s time to make your website truly your own! Feel free to experiment with different values in the CSS file and add your own unique touches.

## Try a New Google Font
One easy way to personalize your site is by choosing a new font from [Google Fonts](https://fonts.google.com/).

### Here’s How to Do It:

1: Head over to Google Fonts and browse around until you find a font you like. When you click on a font, click **Get Font.**

![Google Fonts](https://github.com/haghdk/html-training/blob/master/10/get-font.png)

2: Then, click **Embed Code**.

![Google Fonts](https://github.com/haghdk/html-training/blob/master/10/embed-code.png)

3: Next, select **@import** to see the import link for your font.
![Google Fonts](https://github.com/haghdk/html-training/blob/master/10/import.png)

4: Copy everything in the gray box (skip the `<style>` tags).

For example, it might look like this:

`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');`

5: In your CSS file, replace the existing font import line: 

`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900');`

with the line you just copied.

6: Finally, in the body rule, replace the font-family value with the name of the font you chose!

Now you’ve got a brand new font to give your website a fresh look! Have fun experimenting with different styles and colors to make the design uniquely yours.

