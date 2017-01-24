# readingTime.js

A simple Javascript plugin for generating the estimated reading time of a body of text.

## Usage

Start by including the file in your page:

```xml
<script src='path/to/readingTime.js'></script>
```

...and the `readingTime()` method can be called on any DOM element, like so:

```javascript
var myEl = document.getElementById('myId');

myEl.readingTime({

    // Options
    
});
```

If no options are included, it will simply return the rounded number of estimated minutes. When rounding, if less than one minute, it will output `'<1'` rather than `0`.

### Options

1. **wordsPerMin** (int)
    *Default: 200*
    The number of words per minute to use when calculating time.

2. **outputString** (string)
    *Default: null*
    If you'd like the function to return a formatted text string instead of a simple integer, then enter the string here. Use `'#M#'` where you'd like the minute count to be placed. Use `'#S#'` for seconds without leading zeroes, and `'#s#'` for seconds with leading zeroes. For example:
    
    ```
    var myString = 'This blog takes #M# minutes and #S# seconds to read.';
    ```
    
    If seconds are not included, the minute count will automatically be rounded.

3. **outputElement** (object - DOM element)
    *Default: null*
    If you'd like the result inserted as the `innerHTML` of a DOM element, pass it in here.

4. **returnSeconds** (bool)
    *Default: false*
    If you'd like the method to return a count in seconds instead of rounded minutes, set this to `true`. Will be ignored if `outputString` is used.