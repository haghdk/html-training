# Task 01

The first thing to do when building a website is to write the necessary *HTML* (HyperText Markup Language).
HTML is written with "tags". An HTML begin tag can look like this: `<body>`, and an HTML end tag looks like this: `</body>`. 

*Notice the forward slash before "body" in the end tag.*

It is very important to always remember the end tag (if the tag has an end tag). If we forget it, the website will look broken.

So a BODY tag looks like this: `<body></body>`, and everything inside the body tag is all that are visible on our website. 

Most HTML tags has a begin tag and an end tag, and some content between those tags, for example an image, some text, or even other HTML tags. 

There are some tags that does not have an end tag though, for example an image tag. It looks like this: `<img />`. *Notice the forward slash at the end.*

HTML tags can also have some information inside them. Those are called *attributes* and can be used for many different purposes, depending on the tag. 

An image tag for example, has different attributes to define what image file to load (`src`) which stands for "source", the size of the image (`width` and `height`) and a text to display if the image fails to load (`alt`) which stands for "alternative text". Like this:

`<img src="my-yellow-car.jpg" width="200" height="200" alt="My yellow car">`

There are a ton of different HTML tags and even more attributes.

A list of them all can be seen [here](https://www.w3schools.com/tags/)


## HTML Template

So to begin our website we must start with the necessary HTML. This is the HTML that is needed for the browser to be able to even display our website.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    
</body>
</html>
```

We don't have the time to go into detail on every tag, but `<!DOCTYPE html>` tells the browser which type of HTML our website is written in. The `<html></html>` tag contains our entire website, with all the visible part, but also some information about our website in the `<head></head>` tag. The metadata. 

Between the begin and end `<title></title>` tag, we write the name of the website. It can be whatever you want.

Also notice the attributes in the `meta` tags. The **charset** defines the type of letters and numbers that our website contains. UTF-8 is normal letters and numbers.

The **viewport**, **content** and **initial-scale** describes how to display the website on the screen.

This is the basic HTML that we need for our website.

You can choose to copy and paste it all, but the best way to learn is to write it yourself.