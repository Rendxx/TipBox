# TipBox
Add a tip box to the jQuery element. The tip box will show on mouse hover.  
The tip is always point to the center of the element, and will be resized to fit the content.    

![preview](https://raw.githubusercontent.com/Rendxx/TipBox/master/preview.png "Preview")

*Sample: [http://www.rendxx.com/Lib/Sample/2](http://www.rendxx.com/Lib/Sample/2 "Sample")*  
*Download: [TipBox v0.2.2](https://github.com/Rendxx/TipBox/releases/tag/0.2.2 "Download")*

# API
[API Document](https://github.com/Rendxx/TipBox/blob/master/API%20Document.md)

# Dependency
- [jQuery][]

# Code Sample
JavaScript:

```javascript
$(".squ").tip({
    content: "Customize: color / margin / padding / width / font",
    orientation: "left",
    css: {
        "background-color": "#ddd",
        "color": "#333",
        "padding": "20px",
        "width": "200px",
        "font-family": "Raleway"
    }
});
```

# Compatibility
- Chrome
- Fire Fox
- Safari
- Edge
- IE 9-11
- IE 7,8

[jQuery]: https://jquery.com/ "jQuery Home Page"