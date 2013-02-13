## jQuery WheelEvent Plugin

Plugin for cross-browser add mouse `wheel` event handler to any DOM element.
About `wheel` event: [MDN](https://developer.mozilla.org/en-US/docs/Mozilla_event_reference/wheel)

### Usage

You can add handler through jquery `on` methods.
     $('.class').on('wheel', handler)

Or use short plugin methods.
    $('.class').wheel(handler)

Standardized event passed to handler have properties `deltaX`, `deltaY`, `deltaZ`, `deltaMode`.
     $('.class').on('wheel', function(event) {
     // Scroll line or pixel.
     var delta = event.deltaY;
     if (delta > 0) {
     // do something if wheel scroll up
     } else {
      // do something if wheel scroll down
     }
     });


### Compatibility

Tested with jQuery 1.9.1 and next browser on Windows
* IE 7/8/9
* Chrome 24.0
* Opera 12.14
* Safari 5.1.7
* Firefox 17

Please issue about find bug with other browser or platform.


