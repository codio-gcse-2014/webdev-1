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
  width: 100px;
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





