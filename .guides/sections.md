---
title: An introduction to web development
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 01-html/index.html
    panel: 0
  - action: open
    path: "#preview: 01-html/index.html"
    panel: 1
layout: 3-cell-tree
step: 01-html;img;audio;my-play

---
We are now going to look at the way you build everything from web sites to web products like Facebook or Codio. The Codio product you are using right now is a web application, albeit a very complex one.

You are about to take some steps on the same road that the developers of Codio journeyed down.

It is a really exciting journey and one that will amaze you the more you learn. You can move through this at any speed you like and you will get the chance to write your own code.

Once you have completed this introduction module, you can deepend your knowledge of HTML, CSS and Javascript with further modules.

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

The `<img>` tag has one attribute

- `src="/img/cow.jpg"` which tells the browser where to load the actual image from. We'll explain how this works in the next section.

## Attributes of the audio tag
```html
<audio src="/audio/moo.mp3" controls></audio>
```

Here we have 2 attributes

- `src="/audio/moo.mp3"` which tells the browser where to load the actual image from, just like for the image. We'll explain how this works in the next section.
- `controls` which tells the browser that it should display simple audio play controls so we can play the moo sound. Take a look at the preview window and you'll see them at the bottom. Try replacing this with `autoplay` and refresh the preview (at the top left of the preview window). See what happens now? You could also have both `controls` and `autoplay`. Try it out.

## Attributes of `<p>` and `<h1>`
Look at `index.html` and you'll see that we have not used any attributes for these.

## Other elements
Different HTML elements have their own set of attributes. We'll cover them when we need them. Later on, you'll just Google them.



---
title: A quick review of an HTML file
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 02-html-proper/index.html
    panel: 0
  - action: open
    path: "#preview: 02-html-proper/index.html"
    panel: 1
layout: ""
step: 02-html-proper;img;audio;my-play

---
These are the main tags that all HTML files normally have. 

## DOCTYPE
`<!DOCTYPE html>` tells the browser that what follows is a HTML document.

## The `<html>` tag
Again, just put it in there. No need to understand this for a long time if ever. It contains our `<head></head>` and `<body></body>` tags. 

## The `<head>` tag
The `<head></head>` tags are empty for now but in a section coming up, we'll put something in there.

Whatever is in the `<head>` gets fully loaded before the browser displays the `<body>`.

## The `<body>` tag
The `<body>` is where the real action happens and it's where the bulk of the HTML content lives. 

|||important
##Closing the tags
It is **really, really important** to match your opening tags with closing tags. If you don't close them ten you may experience unexpected results or your page may not work at all. There are exceptions (`<br>`) but most tags require closing.

## In summary
What we have talked about here does not need to be memorized right now. You will see it on every page we use and you will get used to using things the right way.


---
title: Your first HTML hack
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 03-task1/index.html
    panel: 0
  - action: open
    path: "#preview: 03-task1/index.html"
    panel: 1
layout: ""
step: 03-task1;img;audio

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

<iframe src="//player.vimeo.com/video/120383889" width="500" height="350" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

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
    path: 04-js-intro/index.html
    panel: 0
    index: 0
    type: file
    arg: 04-js-intro/index.html
  - action: open
    path: 04-js-intro/main.js
    panel: 0
    index: 1
    type: file
    arg: 04-js-intro/main.js
  - action: open
    path: "#preview: 04-js-intro/index.html"
    panel: 1
    index: 2
    type: preview
    arg: 04-js-intro/index.html
layout: ""
step: 04-js-intro;img;audio;my-play

---
Now we get to a really exciting part. We are going to add a tiny bit of intelligence to the page.

We will make our cow moo! All you need to do is click on the cow and it will moo at you. Try it out now in the preview window.

## Changes to the HTML

### Referencing our Javascript file
Although it is actually possible to put Javascript code in the HTML file, the correct way to do it is to use another file.

|||important
## The File Tree
The file tree is the panel on the extreme left hand side. It is a folder structure for our project. You can see that `index.html` and `main.js` both live in the folder called `04-js-intro`. You can also see the `audio` and `img` folders where our images and sound clips live.
|||

Check out the file tree and you will find a file called `main.js`. This should be open already in the top panel on the left. You will need to click on the tab labeled `main.js` at the top to see the file.

In the `<head>` tag in the `index.html` file, we tell the browser to load `main.js`.

```html
<head>
  <script src="main.js" type="text/javascript"></script>	
</head>
```

Just as with the `<img>` tag, we tell the browser where to find this file using the `src` attribute. It will look in the same location as `index.html` came from. You could also tell it to load from another folder location, but we'll cover this another time.

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
If you would rather watch a video than read, then here is a video overview. Expand it to full screen once it is running.

<iframe src="//player.vimeo.com/video/120596684" width="500" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Accessing an HTML element from Javascript
Whenever we want to do something with an HTML element, we have to get it from the *DOM*, which means **D**ocument **O**bject **M**odel. Don't worry about this name for the time being.

```html
<audio id="cowsound" src="/audio/moo.mp3"></audio>
```

When we created the `<audio>` element in `index.html`, we gave it a unique  `cowsound` by specifying `id="cowsound"`. In this case, we did this so Javascript can get this element quickly and easily.

```javascript
var cowAudio = document.getElementById("cowsound");
```

What we are doing here is 

- creating a new variable called `cowAudio`
- searching the *DOM* for our HTML element using `document.getElementById("cowsound");`

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
    path: 05-css-intro/index.html
    panel: 0
    index: 0
    type: file
    arg: 05-css-intro/index.html
  - action: open
    path: 05-css-intro/main.css
    panel: 0
    index: 1
    type: file
    arg: 05-css-intro/main.css
  - action: open
    path: "#preview: 05-css-intro/index.html"
    panel: 1
    index: 2
    type: preview
    arg: 05-css-intro/index.html
layout: ""
step: 05-css-intro;img;audio;my-play

---
We're now going to introduce you to the missing piece of the jigsaw - CSS. 

CSS (**C**ascading **S**tyle **S**heet) is a way of styling your HTML elements. 

## Loading our CSS file
In the same way we loaded our Javascript file `main.js`, we use load a CSS file within the `<head>` tag. Look at `index.html` on the left and you'll see how we load this.

```html
<link rel="stylesheet" type="text/css" href="main.css">
```

The key attribute that is specified here is `href="main.css"`. This tells the browser to load `main.css` from the same location`index.html`.

|||important
Although you can style your HTML directly within your HTML page, it is good to see how we use a separate file for our CSS. The main reason for this is that any number of HTML files (and bit sites and applications can have hundreds or thousands) can all use that one CSS file.
|||




---
title: Explaining the CSS
files: []

---
On the left hand side, you will see a file called `main.css`. What this does is apply *styles* to the different HTML elements. If we don't specify a style for an element, then it uses the default styles that the browser decides.

Here are some things to note about a CSS *rule*. Don't worry about remembering it all.

```css
h1 {
  color: blue;
  font-size: 20px;
}
```

- the whole thing is called a CSS *rule*
- the `h1` part is called a *selector* and it matches the HTML tag you use in your HTML file
- the keyword `color` is called a *property*
- to the right of the `:` is the *value* (blue)
- after the value is a `;` to separate it from the next *keyword*


## Preview
Take a look at the preview window. You will see that our page looks different. It's not exactly a work of art but it is a bit more interesting. Now take a look at `main.css` and look at the tag selectors.

- **body** : the body styling is saying "for the entire body of the page and everything on it, a) set the background color to light-gray and b) use the font called Open Sans. We'll explain fonts more in a later section. The important thing to note here is that the font will now change for all other elements that are contained within the `<body>` tag of our HTML, so the `<h1>` and `<p>` elements are changed.
- **h1** : here we are saying that wherever the browser sees an `<h1>` element on the page, we should a) set the color to blue and b) set the font-size to be 20 pixels high. You can play with these values if you like and see what happens.
- **img** : we are doing something nice here. We are saying that for all `<img>` elements on the page, we should a) provide a solid border around the edge b) make the border 3 pixels thick and c) provide rounded corners to the border with a *radius* of 3 pixels. Again, feel free to change this value and see what happens.



---
title: Available CSS Selectors
files: []

---
Each html element has its own set of associated CSS keywords. You'd be amazed at how many possibilities there are. You can control everything you can think of and many you can't think of.

So how do you know what CSS keywords are available for any given HTML element?

## Mozilla Reference
Rather than list out everything here, this is a great place to introduce the Mozilla CSS reference page by [clicking here](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

When you visit the page, you may be overwhelmed by the number of keyword properties available. **Don't be!**

What you should do is the following

- Think of what it is you want to change. For example, if you want to change the color, chances are, the property you are after is called `color`. So look for it and then click on it.
- When you have clicked on it you will find an explanation and some examples. Where it says `element` this means the HTML element you want to change, so it might be `h1` or `p` or `img`. 
- Try it out and see what happens. If it doesn't work then try again.
- You can and should also use Google to search for something, for example `change line height CSS`. You will find your way pretty quickly to some examples.

Experimentation is a good way to learn, so don't be afraid and be patient until you get it right.

On the next page, we'll set you a challenge and give you some hints so you can learn by doing.
---
title: Your own CSS experiment
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 06-css-play/index.html
    panel: 0
  - action: open
    path: 06-css-play/main.css
    panel: 0
  - action: open
    path: "#preview: 06-css-play/index.html"
    panel: 1
layout: ""
step: 06-css-play;img;audio;my-play

---
On the left, you'll find some ready made HTML and a starter CSS file. What we want you to do is to style your page so it looks something like the image below. 

Click on it to enlarge it if you like. You don't have to make it exactly the same and you can use your imagination however you want. You can probably make it look a lot nicer than we have.

![](.guides/img/css-play-1.png)


## Basic Tasks
The following list summarises what you might want to do first

- Give the page (body) a background color
- Create an `h1` style with any font-size and color you choose
- Create an `h2` style that is smaller that the `h1` style but bigger than the normal text
- Choose appropriate properties for the regular text for the `p` elements
- Do something interesting to style the `strong` (red and a larger font size), `i` (green) and `u` (pink) elements (bold, italic and underlined)
- Anything else that takes your fancy.

## Advanced Tasks
You can also try these ...

- Put a dotted border around the image, specify the line thickness and make the corners rounded. Not sure about the dotted line? Try looking on MDN by [clicking here](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) and search for `border-style`, then look at the examples.
- Put a border around the `h1` tag - yes, it works with all sorts of different elements.
- Try making the cow image only 150 pixels wide. [Look here](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) again and have a go.

---
title: Classes
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 07-classid/index.html
    panel: 0
  - action: open
    path: 07-classid/main.css
    panel: 0
  - action: open
    path: "#preview: 07-classid/index.html"
    panel: 1
layout: ""
step: 07-classid;img;audio;my-play

---
Take a look at the HTML, CSS and the preview. We now have a different setup. 

We have some images of cows and some images of sheep. We want to style the cows in one way and the sheep in another.

If we just style the `img` element, then we will be styling all the images, so both cows and sheep. Not what we want.

Take a look at the HTML.

```html
<img class="cows" src="/img/cow-1.jpg">
<img class="cows" src="/img/cow-2.jpg">
<img class="sheep" id="color-sheep" src="/img/sheep-1.jpg">
<img class="sheep"  src="/img/sheep-2.jpg">
```

The `class` attribute lets us specify a class name for each `img` element. Look at this carefully and make sure you get it.

Now look at the CSS. Here you can see how we provide specific styling for cows and for sheep. We simple start the CSS rule with a `.` followed by the class name we used in our HTML.

```css
.cows {
  width: 100px;
  border-style: solid;
  border-width: 3px;
  border-radius: 5px;
}

.sheep {
  width: 100px;  
  border-radius: 20px;
}
```


---
title: IDs
files: []

---
## IDs
An ID is similar to a class but rather than styling many elements, it lets us style one specific element.

Again, take a look at the HTML. 

```html
<img class="sheep" id="color-sheep" src="/img/sheep-1.jpg">
```

Here, we have given an ID to this specific element by incuding `id="color-sheep"`. Now look at the CSS and you will see we can style this individual element. 

```css
#color-sheep {
  box-shadow: 8px 8px 5px gray;    
}
```

See how the CSS selector start with the `#` character?

Your HTML should only include one element with this ID.

In a moment, we'll see how to play with this using the browser's 'Developer Tools' utility.

---
title: Important CSS observation
files: []
layout: ""
step: 08-coolcss

---
There is one important observation to make about the way CSS works. Take a look at `main.css`. You'll notice we have this CSS rule ...

```css
img {
  margin-left: 40px;
}
```

This adds a margin of 40 pixels to the left of ALL images. It does not matter whether it is a cow image or a sheep image. It will add it to them all (so they are not so cramped together).

## Overriding
However, if you wanted to have a different left margin for the sheep, you could still add in a `margin-left` property and it would then override the `margin-left` property of the `img` selector.

Go ahead and override the left margin for a sheep to something like `100px`. 

## Shadow effect
You can also see that for the special sheep with the ID of `color-sheep`, we have added a shadow effect. If you want to read up on how this works, [click here](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow).

You can use this effect on different HTML elements. Try it on the `h1` selector, for example.

Or you could try something that works better with `h1` and other text elements...

```css
  text-shadow: 3px 3px 5px #595959;  
```

- play with the values and see what happens
- change the color by hovering over the `#595959` value then clicking inside the color popup; you can click in the color area to select a new color
---
title: Cool CSS Example
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 08-coolcss/index.html
    panel: 0
  - action: open
    path: 08-coolcss/main.css
    panel: 0
  - action: open
    path: "#preview: 08-coolcss/index.html"
    panel: 1
layout: ""
step: 08-coolcss;my-play

---
We just want to give you an idea of how powerful the combination of HTML and CSS can be.

Click (multiple times) on the sections in the preview to see what happens.

Don't worry in the slightest about understanding how the CSS actually works. All you need to take on board is the following

- Notice how simple the HTML is. HTML should show only the structure of the document. The heavy-lifting should be done by CSS (and Javascript). If you one day decide you want to completely change the style, you only need change the CSS.
- If you look at the HTML, you will see that you are familiar with all the elements except `<ul>` and `<li>`, which are 'list' elements, which we'll use ourselves in a later module.
- Notice that there are all sorts of effects that can be created using CSS. Play with the preview and you will see some animations and transitions. This is all done with CSS.
- If you want to achieve this sort of thing, all you need to do is gradually improve your CSS knowledge.
---
title: "Developer Tools - HTML & CSS"
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 09-devtools/index.html
    panel: 0
  - action: open
    path: 09-devtools/main.css
    panel: 0
  - action: open
    path: 09-devtools/main.js
    panel: 0
  - action: open
    path: "#preview: 09-devtools/index.html"
    panel: 1
layout: ""
step: 09-devtools;img;audio;my-play

---
Now we are going to play with something that may seem scary at first, but believe us - it will make your life **much easier** as a web developer.

We are going to assume that you are using the Chrome browser for these instructions but other browsers have similar tools. Firefox is a good alternative.

>Developer tools let's you see what's going on behind the scenes. You can view and play with your HTML, CSS and even your Javascript.

## Seeing what's going on with your HTML & CSS
The first thing we are going to look at is how Developer Tools lets you see how the browser sees your HTML and CSS.

Watch this video for an overview.

<iframe src="//player.vimeo.com/video/120383889" width="500" height="350" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

>If you make changes in your code, you will need to refresh the preview so the browswer loads those changes. If your dev tools window is already open, close it and reopen it so it also gets the new changes.
---
title: Developer Tools - Javascript
files: []

---
The developer tools let you do some very powerful things to help you out with your Javascript, too. 

- Watch your code execute line by line
- Have your code stop automatically if a variable gets changed
- Change variable values while the program is running
- Inspect variables and *objects*
- Write values and comments to the *console*
- If your code is generating errors, dev tools will show errors in the console

The video below explains how this works.

<iframe src="//player.vimeo.com/video/120383889" width="500" height="350" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Using the debugger in Codio
When you use the developer tools debugger in Javascript, we strongly recommend that you debug the preview in a separate, dedicated browser tab, not in an in-Codio panel. The reason for this is that Codio itself is a web application and so your application is a web app within another web app, which makes things little more complex.

It's easy to do this, just press the top left button as shown circled in the image below.

![](.guides/img/open-tab.png)


---
title: Experiment with Dev Tools
files: []

---
Now that we have introduced you to devloper tools, play around with the the HTML, CSS and Javascript and use dev tools in teh following ways

## HTML and CSS inspection
- Inspect an HTML element starting with your preview
- Inspect a random element within dev tools
- Change a CSS value and see it take effect in the preview window
- Add a new CSS value in dev tools and see the effect in the preview

## Javscript and the debugger
- Set breakpoints in the
- Step through the code
- Check the console for any errors generated by the browser

As long as you are reasonaby comfortable with these things, that's enough for now. We'll come back to the debugger later when we move on to more advanced examples.
---
title: Event listeners
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 10-morejs/index.html
    panel: 0
  - action: open
    path: 10-morejs/main.js
    panel: 0
  - action: open
    path: "#preview: 10-morejs/index.html"
    panel: 1
layout: ""
step: 10-morejs;img;audio;my-play

---
This is the last major thing we will cover in this module. Events and event listeners are incredibly important in web development.

>What are Events?
>
> When _______ happens, do ______
>
> When **a user clicks on the page**, do **display a cow where they clicked**
> When **the space bar is pressed**, do **fire a bullet**
> When **the mouse button is released**, do **throw a bird**

### Using HTML to create an event listener
In an earlier section, we created an event listener from within the HTML like this

```html
<img src="/img/cow.jpg" onclick="moo();">
```

Whenever that particular image is clicked, the `moo()` function is called, which triggers the moo sound.

In this example, we are creating an event listener from HTML like this

```html
<body onload="main();"></body>
```

This is listening for the `onload` event that triggers once the page is fully loaded by the browser.

### Using Javascript to listen for events
However, in our example on the left, we want to create the cow only when the user clicks the mouse button and we want to create it at the location the user clicked.

To achieve this, we need to use Javascript. Take a look at the function `main()` in `main.js`, itself an event listener as described above.

```html
document.addEventListener("click", createAnimal, false);
```

Let's explain this in more detail

- `document.addEventListener` means "add an event listener to the document (the whole web page)".
- The `"click"` part specifies the name of the event we are listening out for.
- `createAnimal` is the name of the function that should be called whenever the `click` event happens.







---
title: Event handlers
files: []

---
The event handler is the function that gets called when the event *fires*.

In our example, `createAnimal()` is the event handler. In this case, our event handler function needs to create a new cow at the location the user clicked with the mouse.

This introduces some new concepts, so let's take a look.

## 1. Prepare a new HTML element

```javascript
var animal = document.createElement("img");
```

We want to add a new image to the web page. The whole page page is referred to as the 'document'. Javascript gives us access to a special *object* called `document` which contains properties (more about this later) and functions.

One such function is `createElement()`. This function creates a brand new element within the document, which is exactly what we need.

What we end up with is a new element variable. This variable holds all the information about the image element but it has not yet added it to the page, which happens later.

## 2. Set the 'src' attribute
Look at the following HTML, which creates an image element in the HTML with a source (src) attribute of "/img/cow.jpg".

```html
<img src="/img/cow.jpg" />
```

In Javascript, we can make the same settings using our `animal` variable.

```javascript
animal.src="/img/cow-1.jpg"; 
```

## 3. Setting the 'style' attributes
The style attribute covers the same properties we use in a CSS file. Look at this CSS. We don't have a CSS file in this example, but if we did, this is what it would look like.

```css
img {
  position: fixed;
  top: 100px;
  left: 100px;
}
```

We can achieve the same thing using Javascript as follows

```javascript
animal.style.width = "100px";
animal.style.position = "fixed";
animal.style.top = event.y + "px";
animal.style.left = event.x + "px";
```

The `position: fixed` property tells the browser that our image should have be fixed at an x, y coordinate location on the page. We then use `top` and `left` to specify those coordinates.

Try removing them from your Javascript and see what happens when you refresh and preview it.

## 4. The event parameter
If you look at our event handler function, you will notice it contains an `event` parameter.

```javascript
function createAnimal(event) {
```

The event parameter is an *object* that contains all the information we could possibly want to know about the event that has been triggered. This includes `event.x` and `event.y`, which contain the x and y coordinates of the place where the mouse was clicked within the web page.

We use those to set the `animal.style.top` (y) and `aninal.style.left` (x) coordinates.

```javascript
animal.style.width = "100px";
animal.style.position = "fixed";
animal.style.top = event.y + "px";
animal.style.left = event.x + "px";
```

So, if you click about 200 pixels in from the left of the page, `event.x` would contain 200. We can now set the `left` position 

```javascript
animal.style.left = "200px";
```

Which would be this in CSS

```css
left: 200px;
```


## 5. Adding the new element to the page
Finally, once we have got everything configured properly, we are ready to add the element to our page. This is done using

```javascript
document.body.appendChild(animal);
```

It is saying "add the animal variable to the body section of our document (web page)".

In the next full module on Javascript, we'll explain all this fully, so don't worry if it seems a bit weird at this stage.






---
title: Advanced example
files:
  - action: close
    path: "#tabs"
  - action: open
    path: 11-advanced-js/index.html
    panel: 0
  - action: open
    path: 11-advanced-js/main.css
    panel: 0
  - action: open
    path: 11-advanced-js/main.js
    panel: 0
  - action: open
    path: "#preview: 11-advanced-js/index.html"
    panel: 1
layout: ""
step: 11-advanced-js;img;audio;my-play

---
This advanced example is the last thing we'll deal with in this module. Although this looks like a real mouthful, we are only introducing one new concept, which we'll explain in the next section. 

But really this is nothing more than a bigger, more interesting application.

## Instructions
This little web application lets you do the following ...

- Create a cow or a sheep in the web page by clicking on the preview page. Go ahead and click a couple of times.
- Delete the animal from the page by clicking on it.
- If you want to create a cow, press the 'c' key before clicking.
- If you want to create a sheep, press the 's' key before clicking.
- If you want to toggle between a colored animal or a black and white one, press the 't' key.
- You can press the 1, 2 or 3 keys to create 1, 2 or 3 animals.
- Try different key combinations to get different effects.

## Video
Watch the video to see how the application works.

<iframe src="//player.vimeo.com/video/121087326" width="500" height="350" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


---
title: How it works
files: []

---
Now let's see how our code actually works. We'll leave you to look at the code an figure it out what is going on in details. In summary, though

- We create an empty HTML page and call `main()`
- In `main()` We add an event listener for the `click` and `keypress` events
- We create event handlers for a) creating new image elements and b) monitoring key presses for our user settings
- We also create event handlers for each new image so it can be deleted by clicking on it

## Flow chart
Here is a flow chart that describes the process visually. Click on it to enlarge.

![](.guides/img/flow-event-handlers.png)


---
title: Objects
files: []

---
We have introduced an important concept in this example - *objects*. Objects are incredibly important in Javascript and we have a really easy *use case* here to introduce them to you.

>An object is simply a variable that contains information and performs functions. Think of a smartphone as an object. 
>
>It has **properties** (screen width, screen height, CPU speed, memory size, weight, color etc.)
>
>It also performs **functions** (make a call, play a game, get current location)
>

If we represent the smartphone as an object in Javascript, it could look like this.

```javascript
var smartPhone = {
  screen {
    width: 2.5,
    height: 4
  }
  cpuSpeed: 2.1,
  memory: 2,
  weight: 300,
  color: "gold",
  call: makeCall,
  currentLocation: getGPSLocation
}
```

### Reading object properties
This is really easy. The following code reads values from our object. Here we are reading the values into variables so it makes sense.

```javscript
mem = smartPhone.memory;
weight = smartPhone.weight;
width = smartPhone.screen.width;
```

Notice that the last one is really interesting. Here we have a *nested* object, an object within an object. 

## Writing to object properties
Let's say we want to set an object property. You reference the object property in exactly the same way.

```javscript
smartPhone.memory = mem;
smartPhone.weight = 255;
smartPhone.screen.width = width;
```

## Calling functions
We have already called object functions. Look at the way we create a new HTML element in `main.js`

```javascript
var animal = document.createElement("img");
```

The object here is `document` (the object that contains all information about the browser's web page) and the function is `createElement()`.

## Our object
Now when you look at the object in `main.js` you can see it is pretty clear.

```javascript
var userChoices = {
  isCow: true,
  isColor: true,
  number: 1
}
```
The `userChoices` object variable holds information about the selections the user has made for our animal creation.

We have initialized the object to contain the starting values and after that, these get 

- written to by the `getKeyPress()` event handler
- read from by our `createAnmial()` event handler

Take a good look at the code and all should become clear.



---
title: Global variables
files: []

---
When you create a variable inside a function, the variable is

- created when encountered within the function
- destroyed when the function terminates (finishes)

Take a a look at the `createAnimal()` function inside `main.js`. 

```javascript
function createAnimal(event) {
  
  var ctr;
```

The `ctr` variable is created when `var ctr;` is executed. It then can be used within the `createAnimal()` function while it is executing. 

However, as soon as the function terminates, it is detroyed. 

- the next time the function is entered it has to be created again
- no other function can access `ctr`.

In our application, we need to make sure that the `userChoices` object variable can be accessed from 
---
title: "That's all folks"
files: []

---
We're done with this introduction to web development. We want to take you deeper into Javascript next, but before we do, you'll learn

- how to create and manage your own coding project
- how to create your own files and folders
- how to reference files in your project from your code
- how to upload images and soundtracks
- how to some of the Codio IDE features


<iframe width="420" height="315" src="https://www.youtube.com/embed/Q3bbsDJWlXQ?autoplay=1" frameborder="0" allowfullscreen></iframe>

outube.com/embed/Q3bbsDJWlXQ?autoplay=1" frameborder="0" allowfullscreen></iframe>

