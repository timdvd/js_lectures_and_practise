# JavaScript defer and async Attributes
## Both defer and async are attributes that can be added to <script> tags in HTML to control how external JavaScript files are loaded and executed in relation to the HTML document. These attributes help improve performance by modifying the order in which scripts are loaded and executed, especially when dealing with scripts that do not rely on each other.

## 1. async Attribute
The async attribute tells the browser to download the script file asynchronously and execute it as soon as it is downloaded, without blocking the rendering of the page. However, with async, the script is executed immediately after it is downloaded, potentially before other elements of the HTML have been parsed.

### Key Points of async:
 - The script is downloaded asynchronously while the page continues to load.
 - The script is executed as soon as it is downloaded, not necessarily in the order it appears in the HTML.
 - It is typically used for scripts that are independent and do not depend on the DOM or other scripts being loaded.
Example:
```
<script src="script1.js" async></script>
<script src="script2.js" async></script>
```
In this case, script1.js and script2.js are loaded asynchronously, and each script will be executed as soon as it finishes downloading, which may not be in the order of the HTML markup.

### When to Use:
For scripts that do not depend on other scripts or on the DOM being fully loaded (e.g., analytics, tracking scripts, or advertisements).
If the order of execution doesn't matter.

## 2. defer Attribute
The defer attribute also causes the script to be loaded asynchronously, but it ensures that the script is executed in the order it appears in the document and only after the HTML has been fully parsed.

### Key Points of defer:
 - The script is downloaded asynchronously.
 - The script is executed in the order it appears in the HTML.
 - The script is executed after the HTML document is parsed, just before the DOMContentLoaded event is fired.
 - It is useful for scripts that need the DOM to be fully available or that depend on other scripts.
Example:
```
<script src="script1.js" defer></script>
<script src="script2.js" defer></script>
```
In this case, script1.js and script2.js are loaded asynchronously, but they will execute in the order they appear in the HTML, and the execution will happen after the DOM has been fully parsed.

### When to Use: 
 - For scripts that need to interact with the DOM or other scripts that are loaded earlier in the document.
 - To avoid blocking the parsing of the HTML while still ensuring that scripts execute after the HTML is ready.

## Conclusion
 - Use async for scripts that do not depend on the DOM or each other, where execution order doesn't matter.
 - Use defer for scripts that need the DOM to be fully parsed or that depend on each other, ensuring the scripts run in the correct order after the document is ready.

Both attributes help improve page loading times by making JavaScript loading non-blocking, but they serve different use cases depending on how the scripts interact with the rest of the HTML document.
