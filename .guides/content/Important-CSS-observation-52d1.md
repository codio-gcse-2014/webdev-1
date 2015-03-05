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
  text-shadow: 3px 3px 5px # 595959;  
```

- play with the values and see what happens
- change the color by hovering over the `# 595959` value then clicking inside the color popup; you can click in the color area to select a new color