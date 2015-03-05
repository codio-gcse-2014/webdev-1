Attributes provide the browser with additional information about an HTML element. Let's look again at our `index.html` file.

## Attributes of the image tag
```html
<img src="/img/cow.jpg" />
```

The `<img>` tag has one attribute

- `src="/img/cow.jpg"` which tells the browser where to load the actual image from. We'll explain how this works in the next section.
- `src` is the attribute and `"/img/cow.jpg"` is the attribute value.

## Attributes of the audio tag
```html
<audio src="/audio/moo.mp3" controls></audio>
```

Here we have 2 attributes

- `src="/audio/moo.mp3"` which tells the browser where to load the actual image from, just like for the image. We'll explain how this works in the next section.
- `controls` which tells the browser that it should display simple audio play controls so we can play the moo sound. Take a look at the preview window and you'll see them at the bottom. Try replacing this with `autoplay` and refresh the preview (at the top left of the preview window). See what happens now? You could also have both `controls` and `autoplay`. Try it out.
- Notice that the `controls` attribute doesn't have a value. That's because they don't need them as just having the attribute tells the browser to display the controls.

## Attributes of `<p>` and `<h1>`
Look at `index.html` and you'll see that we have not used any attributes for these.

## Other elements
Different HTML elements have their own set of attributes. We'll cover them when we need them. Later on, you'll just Google them.


