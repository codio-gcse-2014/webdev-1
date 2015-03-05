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

- searching the *DOM* for our HTML element using `document.getElementById("cowsound");`
- assigning the element to a new variable called `cowAudio`

`getElementByID` is a function that the browser 'document' supplies us, which is why we have `document.` before it. Don't worry about this yet, just be happy to use it.

## Making it Moo
At this point, our variable `cowAudio` contains everything about  our moo audio clip that we could possibly want to know or use.

This variable is actually called an *object* variable as is contains a lot more information that just a single value. Again, don't worry about this for now.

Our Javascript variable also contains functions! And yes, `play()` is one of those functions.

So, to play our audio clip, we simply use

```javascript
cowAudio.play(); 
```

That's it! What you have now learned is actually the basis for an awful lot of web development. Make sure it all makes 100% sense and then you can have a quick challenge.







