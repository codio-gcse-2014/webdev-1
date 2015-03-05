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

