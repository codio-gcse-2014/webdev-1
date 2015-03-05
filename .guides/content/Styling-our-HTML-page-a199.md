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



