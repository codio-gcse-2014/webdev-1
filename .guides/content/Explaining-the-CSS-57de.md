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
- **img** : we are doing something nice here. We are saying that for all `<img>` elements on the page, we should a) provide a solid border around the edge b) make the border 3 pixels thick and c) provide rounded corners to the border with a *radius* of 3 pixels. Feel free to change values, reload the preview and see what effect it has.


