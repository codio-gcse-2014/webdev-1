---
title: An introduction to web development
files:
  - action: open
    path: 1-html/index.html
    panel: 0
  - action: open
    path: "#preview: 1-html/index.html"
    panel: 1
layout: 3-cell-tree
step: 1-html; img; audio

---
We are now going to look at the way you build everything from web sites to web products like Facebook or Codio. The Codio product you are using right now is a web application, albeit a very complex one.

You are about to take some steps on the same road that the developers of Codio journeted down.

It is a really exciting journey and one that will amaze you the more you learn. You can move through this at any speed you like and you will get the chance to write your own code.

The more you learn, the more you will be able to look things up on the Internet. There will come a point before too long, where you will only need tutorials for specialist areas and the rest you can simply Google.

Let's get started!
---
title: A really simple web page
files: []

---
What you now see on the left hand side is our first web page. It is not pretty and it is not complicated but we can learn a lot about HTML web pages from this simple example.

Later, we will introduce *styling* which lets you make your pages look pretty.

## Using Codio
Codio is the platform you are using right now. Codio is actually an IDE (Integrated Development Environment) and gives you most of the same features you find with desktop tools.

Depending on your screen size you can see a bit more or a bit less of the code and the preview on the left. Feel free to adjust the width and hieght of the panels by dragging the dividers between the panels.


---
title: HTML Elements
files: []

---
A web page is made up of HTML elements. Our page has the following elements.

- **`<h1>`** is a header. `<h1>` is larger than `<h2>`, which is larger than `<h3>` etc. It is used for headers and titles usually.
- **`<p>`** is a paragraph element (we usually call it a p tag). This is once common place where you put regular paragraphs of text. New lines within the text will not show up as new lines when the page displays.
- **`<img>`** is an image tag, which displays an image. In the next section we will discuss where it gets the image from.
- **`<img>`** is an audio element and is used for playing sound. In the next section we will discuss where it gets the sound from.

Here are the key things you need to know about elements.

- For most (but not all) elements, for every opening tag, you need a closing tag. Look at `index.html` on the left. You will see `<p>` followed by `</p>` at the end of the block. Look at the `<img>` and `<audio>` tags.
- Some tags do not require formal closing. Look at the `<br>` tag in the second paragraph element. This forces a new line and as there is never additional information associated with it, we don't need one.
- If you don't have content between the tags, then you can close the tag by putting a `/` before the closing `>` as you can see with the `<img>` tag.

The first point in the above list is the one you **must** remember.

Feel free to change the HTML to see what happens if you leave out closing tags. Play a little.

---
title: Attributes
files: []

---
Attributes provide the browser with additional information about an HTML element. Let's look again at our `index.html` file.

## Attributes of the image tag
```html
<img id="shaggycow" src="/img/cow.jpg" />
```

Here we have 2 attributes

- `id="shaggycode"` which uniquely identifies this element with a unique name. Don't worry about why we're doing this. We'll explain in a moment.
- `src="/img/cow.jpg"` which tells the browser where to load the actual image from. We'll explain how this works in the next section.

## Attributes of the audio tag
```html
<audio id="cowsound" src="/audio/moo.mp3" controls></audio>
```

Here we have 3 attributes

- `id="cowsound"` which uniquely identifies this audio element with a unique name. Don't worry about why we're doing this. We'll explain in a moment.
- `src="/audio/moo.mp3"` which tells the browser where to load the actual image from. We'll explain how this works in the next section.
- `controls` which tells the browser that it should display simple audio play controls so we can play the moo sound. Try replacing this with `autoplay` and refresh the preview (at the top left of the preview window). See what happens now? You could also have both `controls` and `autoplay`. Try it out.

## Other elements
Many HTML elements have their own attributes. We'll cover them when we need them. Later on, you'll just Google them.



---
title: A proper HTML file
files: []

---
In the previous sections, we kept our HTML simple so as not to scare you. If you look at `index.html` now, you'll see it looks different and a bit messier.

## DOCTYPE
You really do not need to know about this. If you leave it out it will still work but having it there is good practice.

## The html tag
Again, just put it in there. No need to understand this for a long time if ever. It contains our `<head></head>` and `<body></body>` tags. 

## The head
This does need to be there. We have it empty for now but in a section coming up, we'll need it.

## The body
Our main HTML content is the same but we have now simple put it inside `<body></body>` tags. This is how it should be done properly. The `<body>` is where the real action happens.

## Closing the tags
Again it is **really important** to match your opening tags with closing tags. Really look at the HTML code to see what is going on.

## In summary
What we have talked about here does not need to be learned. You will see it on every page we use from now on and you will get used to ignoring the bits you don't need.


---
title: Your first HTML hack
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 3-task1/index.html
    panel: 0
  - action: open
    path: "#preview: 3-task1/index.html"
    panel: 1
layout: ""
step: 3-task1;img;audio

---
We have now created a new `index.html` page for you on the left. Create your own page by inserting content within the `<body>` tag.

- headers
- paragraphs
- the `<br>` tag to insert new lines
- an image that you find on Google images (see below)
- anything else you fancy trying out

> Your preview window is empty to start with. When you want to try out your changes, press the refresh button in the Preview window.

## Finding an image on Google Images
We learned about the `<img>` tag earlier. Here's a reminder ...

```html
<img id="shaggycow" src="/img/cow.jpg">
```

`src` tells the browser where to look for the image. The above example actually gets it from the `img` folder you can see on the extreme left hand side. The `/` means "look from the bottom of the file tree" and then it looks for a folder called `img`. You should be able to see it.

To get an image from the web instead, you simply replace everything between the `" "` with a url to an image on the web.

Watch the video below for an explanation and to see how to get an image url from Google Images.

<iframe src="//player.vimeo.com/video/119136128" width="500" height="240" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

After you've selected 'Copy image URL', you put the cursor in between the `""` of your `src` attribute and paste it in.

You can right click to paste, or use the keyboard shortcuts ctrl+v or use the browser's Edit->Paste menu item.

