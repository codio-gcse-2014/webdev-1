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


