## Text Fragment Example

- Open with live server.
- Make sure you have this scudo class:

  ```css
  ::target-text {
  background-color: yellow;
  color: black;
  }
  ```

- Add to the front: ```#:~:text=quick brown fox jumps over the lazy```
- Use the format like this: ```http://127.0.0.1:5500/with-html-only/text-fragment/index.html#:~:text=quick brown fox jumps over the lazy```
- The browser will scroll to the text "quick brown fox jumps over the lazy" and highlight it (depending on browser support).
- Reference link: [Link to article](https://alfy.blog/2024/10/19/linking-directly-to-web-page-content.html)
