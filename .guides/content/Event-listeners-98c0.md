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






