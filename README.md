# TipBox
Add a tip box to the jQuery element. The tip box will show on mouse hover.  
The tip is always point to the center of the element, and will be resized to fit the content.    

![preview](https://raw.githubusercontent.com/Rendxx/TipBox/master/preview.png "Preview")

*Sample: [http://www.rendxx.com/Lib/Sample/2](http://www.rendxx.com/Lib/Sample/2 "Sample")*  
*Download: [TipBox v0.2.2](https://github.com/Rendxx/TipBox/releases/tag/0.2.2 "Download")*

## Install
Download the package from bower
```
bower install TipBox --save
```

Including the file in your webpage
```HTML
<script type="text/javascript" src="/node_modules/TipBox/js/TipBox.js"></script>
```

See **Code Sample** below for more details.

## API
[API Document](https://github.com/Rendxx/TipBox/blob/master/API%20Document.md)

## Dependency
- [jQuery][]

## Code Sample
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

## Compatibility
```Chrome``` ```Fire Fox``` ```Safari``` ```Edge``` ```IE 9-11``` ```IE 7,8```

## License
Copyright &copy; 2015, Rendxx. (MIT License)  
See [LICENSE][] for more info.

[jQuery]: https://jquery.com/ "jQuery Home Page"
[LICENSE]: https://github.com/Rendxx/TipBox/blob/master/LICENSE