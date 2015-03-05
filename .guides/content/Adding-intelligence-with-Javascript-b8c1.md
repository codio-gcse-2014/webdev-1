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



