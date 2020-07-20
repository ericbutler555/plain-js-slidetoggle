/* plain JS slideToggle https://github.com/ericbutler555/plain-js-slidetoggle */

function slideToggle(el, duration) {
	if (el.clientHeight === 0) {
		_s(el, duration, true);
	} else {
		_s(el, duration);
	}
}

function slideUp(el, duration) {
	_s(el, duration);
}

function slideDown(el, duration) {
	_s(el, duration, true);
}

function _s(el, duration, isDown) {

	if (typeof duration === 'undefined') duration = 400;
	if (typeof isDown === 'undefined') isDown = false;

	el.style.overflow = "hidden";
	if (isDown) el.style.display = "block";

	var elStyles        = window.getComputedStyle(el);
	var elMarginTop     = parseFloat(elStyles.getPropertyValue('margin-top'));
	var elMarginBottom  = parseFloat(elStyles.getPropertyValue('margin-bottom'));
	var elPaddingTop    = parseFloat(elStyles.getPropertyValue('padding-top'));
	var elPaddingBottom = parseFloat(elStyles.getPropertyValue('padding-bottom'));
	var elHeight        = parseFloat(elStyles.getPropertyValue('height'));

	var stepMarginTop     = elMarginTop / duration;
	var stepMarginBottom  = elMarginBottom / duration;
	var stepPaddingTop    = elPaddingTop / duration;
	var stepPaddingBottom = elPaddingBottom / duration;
	var stepHeight        = elHeight / duration;

	var start;

	function step(timestamp) {

		if (start === undefined) start = timestamp;

		var elapsed = timestamp - start;

		if (isDown) {
			el.style.marginTop     = (stepMarginTop * elapsed) + "px";
			el.style.marginBottom  = (stepMarginBottom * elapsed) + "px";
			el.style.paddingTop    = (stepPaddingTop * elapsed) + "px";
			el.style.paddingBottom = (stepPaddingBottom * elapsed) + "px";
			el.style.height        = (stepHeight * elapsed) + "px";
		} else {
			el.style.marginTop     = elMarginTop - (stepMarginTop * elapsed) + "px";
			el.style.marginBottom  = elMarginBottom - (stepMarginBottom * elapsed) + "px";
			el.style.paddingTop    = elPaddingTop - (stepPaddingTop * elapsed) + "px";
			el.style.paddingBottom = elPaddingBottom - (stepPaddingBottom * elapsed) + "px";
			el.style.height        = elHeight - (stepHeight * elapsed) + "px";
		}

		if (elapsed >= duration) {
			el.style.marginTop = "";
			el.style.marginBottom = "";
			el.style.paddingTop = "";
			el.style.paddingBottom = "";
			el.style.height = "";
			el.style.overflow = "";
			if (!isDown) el.style.display = "none";
		} else {
			window.requestAnimationFrame(step);
		}
	}

	window.requestAnimationFrame(step);
}
