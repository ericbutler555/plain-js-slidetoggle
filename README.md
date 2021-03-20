# slideToggle in plain JavaScript

Plain vanilla JavaScript version of jQuery's `slideToggle()`, `slideUp()`, and `slideDown()` functions. No dependencies!

Check out [the demo page](https://ericbutler555.github.io/plain-js-slidetoggle/demo.html).

## How To Use

    slideToggle(element, duration, callback);

    slideUp(element, duration, callback);

    slideDown(element, duration, callback);

- element: *HTMLElement*. Required.
- duration: *Number*. Optional. In milliseconds. Default 400.
- callback: *Function*. Optional. Called once animation completes.

That's it.

## Example Usage

    <button class="btn">Click me</button>
    <div class="div-to-toggle">
      ...content...
    </div>

    <script src="slideToggle.min.js"></script>
    <script>
      // when you click the button, slide the div up and down:
      const divToToggle = document.querySelector('.div-to-toggle');
      document.querySelector('.btn').addEventListener('click', () => {
        slideToggle(divToToggle, 500, () => {
          console.log('This is the callback, the slide has finished!');
        });
      });
    </script>
