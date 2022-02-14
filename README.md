# slideToggle in plain JavaScript

Plain vanilla JavaScript version of jQuery's `slideToggle()`, `slideUp()`, and `slideDown()` functions. No dependencies!

Check out [the demo page](https://ericbutler555.github.io/plain-js-slidetoggle/demo.html).

## How To Use

    element.slideToggle(duration, callback); // opens and closes an element

    element.slideUp(duration, callback); // closes/collapses an element

    element.slideDown(duration, callback); // opens/expands an element

- element: *HTMLElement*. Required.
- duration: *Number*. Optional. In milliseconds. Default 400.
- callback: *Function*. Optional. Called once slide animation completes.

That's it.

## Example Usage

    <button class="myBtn">Click me</button>
    <div class="myDiv">blah blah blah</div>

    <script src="slideToggle.min.js"></script>
    <script>
      // when you click the button, open and close the div:
      document.querySelector('.myBtn').addEventListener('click', () => {
        document.querySelector('.myDiv').slideToggle();
      });
    </script>
