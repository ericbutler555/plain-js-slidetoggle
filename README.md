# slideToggle in plain JavaScript

Plain vanilla JavaScript version of jQuery's `slideToggle()`, `slideUp()`, and `slideDown()` functions. No dependencies!

Check out the demo page: [https://ericbutler555.github.io/plain-js-slidetoggle/demo.html](https://ericbutler555.github.io/plain-js-slidetoggle/demo.html)

## How To Use

    slideToggle(element, duration);

    slideUp(element, duration);

    slideDown(element, duration);

- element: *HTMLElement*. Required.
- duration: *Number*. Optional. In milliseconds, default 400.

That's it.

## Example Usage

    <script src="slideToggle.min.js"></script>
    <script>
      const myDiv = document.querySelector('.div-to-toggle');
      document.querySelector('.btn').addEventListener('click', () => slideToggle(myDiv, 300));
    </script>
