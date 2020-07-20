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

    <script src="slideToggle.min.js"></script>
    <script>
      const myDiv = document.querySelector('.div-to-toggle');
      const myCallback = () => console.log('Slide finished!');
      document.querySelector('.btn').addEventListener('click', () => slideToggle(myDiv, 1000, myCallback));
    </script>
