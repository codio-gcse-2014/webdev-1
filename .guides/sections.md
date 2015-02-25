---
title: An introduction to web development
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 1-html/index.html
    panel: 0
    index: 0
    type: file
    arg: 1-html/index.html
  - action: open
    path: "#preview: 1-html/index.html"
    panel: 1
    index: 1
    type: preview
    arg: 1-html/index.html
layout: 3-cell-tree
step: 1-html;img;audio

---
We are now going to look at the way you build everything from web sites to web products like Facebook or Codio. The Codio product you are using right now is a web application, albeit a very complex one.

You are about to take some steps on the same road that the developers of Codio journeyed down.

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
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 2-html-proper/index.html
    panel: 0
  - action: open
    path: "#preview: 2-html-proper/index.html"
    panel: 1
layout: ""
step: 2-html-proper;img;audio

---
In the previous sections, we kept our HTML simple so as not to scare you. If you look at `index.html` now, you'll see it looks different and a bit messier.

## DOCTYPE
You really do not need to know about this. If you leave it out it will still work but having it there is good practice.

## The html tag
Again, just put it in there. No need to understand this for a long time if ever. It contains our `<head></head>` and `<body></body>` tags. 

## The head tag
The `<head></head>` tags should be. It's empty for now but in a section coming up, we'll need it.

Whatever is in the `<head>` gets fully loaded before the browser displays the `<body>`.

## The body tag
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
    index: 0
    type: file
    arg: 3-task1/index.html
  - action: open
    path: "#preview: 3-task1/index.html"
    panel: 1
    index: 1
    type: preview
    arg: 3-task1/index.html
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

<iframe src="//player.vimeo.com/video/120383889" width="500" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

After you've selected 'Copy image URL', you put the cursor in between the `""` of your `src` attribute and paste it in.

You can right click to paste, or use the keyboard shortcuts ctrl+v or use the browser's Edit->Paste menu item.


---
title: "Indent your code!!!"
files: []

---
This point applies to HTML as well as almost all programming languages.

**ALWAYS INDENT YOUR CODE**

Below you will find an example of HTML with and without indentation. No indentation makes it **much** harder for you and other people to read.

Good indentation not only makes it more readable, it usually also shows how code is organized logically.

Feel free to use empty lines as well to make things clearer.

## Bad

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="eng" lang="eng">
<head>
</head>
<body onload="main();">
<h1>Welcome to your first web page</h1>
<p>This is a very boring paragraph of text.</p>
<p>And this is another paragraph of text. Below is an image of a shaggy cow. Soon, we will get it to moo by clicking it. Notice that the <br> element forces a new line, not pressing enter.</p>
<img id="shaggycow" src="/img/cow.jpg">
<audio id="cowsound" src="/audio/moo.mp3" controls></audio>
</body>
</html>
```

## Good
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="eng" lang="eng">
  
  <head>

  </head>
  
  <body onload="main();">

    <h1>Welcome to your first web page</h1>
    <p>This is a very boring paragraph of text.</p>
    <p>And this is another paragraph of text. Below is an image of a shaggy cow. Soon, we will get it to moo by clicking it. Notice that the <br> element forces a new line, not pressing enter.</p>
    <img id="shaggycow" src="/img/cow.jpg">
    <audio id="cowsound" src="/audio/moo.mp3" controls></audio>
    
  </body>
  
</html>
```

## Check your play code
Now check your play code and make sure it is nicely indented and laid out.



---
title: Adding intelligence with Javascript
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 4-js-intro/index.html
    panel: 0
  - action: open
    path: 4-js-intro/main.js
    panel: 0
  - action: open
    path: "#preview: 4-js-intro/index.html"
    panel: 1
layout: ""
step: 4-js-intro;img;audio

---
Now we get to a really exciting part. We are going to add a tiny bit of intelligence to the page.

We will make our cow moo! All you need to do is click on the cow and it will moo at you. Try it out now in the preview window.

## Changes to the HTML

### Referencing our Javascript file
Although it is actually possible to put Javascript code in the HTML file, the correct way to do it is to use another file.

Check out the file tree and you will find a file called `main.js`. This should be open already in the top panel on the left. You will need to click on the tab at the top to see the file.

We tell `index.html` to load `main.js` in the `<head>` section at the top.

```html
<head>
  <script src="main.js" type="text/javascript"></script>	
</head>
```

Like the `<img>` tag, we tell the browser where to get this file from using the `src` attribute. It looks for it in the same location as `index.html` came from.

### Events
This next bit is great. We create a so-called *Event Handler*. Events can happen to any HTML element on your page. Here are just a few common events.

- **onclick** - a mouse click on the element
- **onmouseover** - user moves the mouse over the element
- **focus** - an element gets the focus, which means it is currently selected. Most often used with data input fields, so you can do take an action as soon as the user puts the cursor into it.
- **blur** - when an element loses the focus (user moves away from it). Often used to trigger data validations, for example.

The point of an event is to get Javascript to take control when the event happens. In our example, we want the cow to moo on the `onclick` event.

```html
<img id="shaggycow" src="/img/cow.jpg" onclick="moo();">
```

Notice `onclick="moo();"`? This tells the browser to call the function `moo()` whenever the image is clicked. The browser has already loaded `main.js` and will discover our `moo()` function when we need it.




---
title: moo()
files: []

---
Now make sure you are looking at `main.js` on the left. 

## Video overview
If you would rather watch a video than read, then here is a video overview.

<iframe src="//player.vimeo.com/video/120596684" width="500" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Accessing an HTML element from Javascript
Whenever we want to do something with an HTML element, we have to get it from the *DOM*, which means **D**ocument **O**bject **M**odel. Don't worry about this name, we'll just use it for now.

```html
<audio id="cowsound" src="/audio/moo.mp3"></audio>
```

When we created the `<audio>` element in `index.html`, we gave it a unique name we chose `cowsound`. In this case, we did this so Javascript can get this element quickly and easily.

```javascript
var cowAudio = document.getElementById("cowsound");
```

What we are doing here is 

- creating a new variable called `cowAudio`
- looking for out HTML element using `document.getElementById("cowsound");`

`getElementByID` is a function that the browser 'document' supplies us, which is why we have `document.` before it. Don't worry about this yet, just be happy to use it.

## Making it Moo
At this point, our variable `cowAudio` contains everything about  our moo audio clip that we could possibly want to use.

This variable is actually called an *object* variable as is contains a lot more information that just a single value. Again, don't worry about this.

Our Javascript variable also contains functions! And yes, `play()` is one of those functions.

So, to play our audio clip, we simply use

```javascript
cowAudio.play(); 
```

That's it! What you have now learned is actually the basis for an awful lot of web development. Make sure it all makes 100% sense and then you can have a quick challenge.








---
title: Styling our HTML page
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 5-css-intro/index.html
    panel: 0
  - action: open
    path: 5-css-intro/main.css
    panel: 0
  - action: open
    path: "#preview: 5-css-intro/index.html"
    panel: 1
layout: ""
step: 5-css-intro;img;audio

---
We're now going to introduce you to the missing piece of the jigsaw - CSS. 

CSS (**C**ascading **S**tyle **S**heet) is a way of styling your HTML elements. 

>Although you can style your HTML directly within your HTML page, it is bad practice. For all but the simplest use cases, you should use a special file.

## Loading our CSS file
In the same way we loaded our Javascript file `main.js`, we use load a CSS file within the `<head>` tag.

```html
<link rel="stylesheet" type="text/css" href="main.css">
```

The key attribute that is specified here is `href="main.css"`. This tells the browser to load `main.css` from the same location`index.html`.






---
title: Explaining the CSS
files: []

---
On the left hand side, you will see a file called `main.css`. What this does is apply *styles* to the different HTML elements. If we don't specify a style for an element, then it uses the default styles that the browser decides.

Here are some important things to note

- the HTML tag you used in your HTML file (`<h1>, <p>` etc. ) is used in the CSS file **without** the `<>` angled brackets.
- After the tag name come the styling attributes **between** two `{}` curly braces
- **Indent** your CSS attribute
- Follow it with a `:` semi-colon then add a new line

## Preview
Take a look at the preview window. You will see that our page looks different. It's not exactly a work of art but it has changed for the better.

- **body** : the body styling is saying "for the entire body of the page and everything on it, a) set the background color to light-gray and b) use the font called Open Sans. We'll explain fonts more in a later section. The important thing to note here is that the font will now change for all other elements that are contained within the `<body>` tag of our HTML, so the `<h1>` and `<p>` elements are changed.
- **h1** : here we are saying that wherever the browser sees an `<h1>` element on the page, we should a) set the color to blue and b) set the font-size to be 20 pixels high. You can play with these values if you like and see what happens.
- **img** : we are doing something nice here. We are saying that for all `<img>` elements on the page, we should a) provide a solid border around the edge b) make the border 3 pixels thick and c) provide rounded corners to the border with a *radius* of 3 pixels. Again, feel free to change this value and see what happens.


