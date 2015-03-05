A web page is made up of HTML elements. Our page has the following elements.

- **`<h1>`** is a header. `<h1>` is larger than `<h2>`, which is larger than `<h3>` etc. It is used for headers and titles usually.
- **`<p>`** is a paragraph element (we usually call it a p tag). This is once common place where you put regular paragraphs of text. New lines within the text will not show up as new lines when the page displays.
- **`<img>`** is an image tag, which displays an image. In the next section we will discuss where it gets the image from.
- **`<img>`** is an audio element and is used for playing sound. In the next section we will discuss where it gets the sound from.

Here are the key things you need to know about elements.

- For most (but not all) elements, for every opening tag, you need a closing tag. Look at `index.html` on the left. You will see `<p>` followed by `</p>` at the end of the block. Look at the `<img>` and `<audio>` tags.
- Some tags do not require formal closing. Look at the `<br>` tag in the second paragraph element. This forces a new line and as there is never additional information associated with it, we don't need one.
- If you don't have content between the tags, then you can close the tag by putting a `/` before the closing `>` as you can see with the `<img>` tag.

The first point in the above list is the one you **must** remember.

Feel free to change the HTML to see what happens if you leave out closing tags. Play a little.
