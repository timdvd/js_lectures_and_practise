/*
    The trim() method removes whitespace characters from the beginning and end of a string.
    Whitespace characters in this context include all standard spaces (space, tab, non-breaking space, etc.) 
    and all line terminator characters (LF, CR, etc.).

    Syntax
    str.trim()
*/

let orig = "   foo  ";
console.log(orig.trim()); // 'foo'

// Другой пример, в котором .trim() убирает пробельные символы только с одной стороны.

let orig1 = "foo    ";
console.log(orig1.trim()); // 'foo'

if (!String.prototype.trim) {
    (function () {
      // Вырезаем BOM и неразрывный пробел
      String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      };
    })();
  }