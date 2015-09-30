# TipBox
Add a tip box to the jQuery element. The tip box will show on mouse hover.  
The tip is always point to the center of the element, and will be resized to fit the content.    

![preview](https://raw.githubusercontent.com/Rendxx/InfoBox/master/preview.png "Preview")
*Sample: [http://www.rendxx.com/Lib/Sample/2](http://www.rendxx.com/Lib/Sample/2 "Sample")*  
*Download: [TipBox v2.1](https://github.com/Rendxx/TipBox/releases/tag/2.1 "Download")*

# Dependency
- [jQuery][]

#API
    [jQuery Element].tip(options)
Create a customized tip box and bind to the jQuery element. 

- **options**: options
  + **content**: ([jQuery element]/string) content of the tip, the old tip box(if exist) will be clear if content is empty
  + **orientation**: (string) top/left/bottom/right, default:top
  + **margin**: (number) distance between the tip box and the object element
  + **offset**: (number) offset the tipbox left / right from center position
  + **cssClass**: (string) name of css class, this css class will apply to the tip box
  + **css**: (object) the css apply to the tip box, rule is the same as $.css()

######  &nbsp;

    [jQuery Element].tip(content, orientation, options)

- content: *[same as above]*    
- orientation: *[same as above]*  
- options: *[same as above]* 

######  &nbsp;

    [jQuery Element].tip(content, orientation,)

- content: *[same as above]*    
- orientation: *[same as above]*  

######  &nbsp;

    [jQuery Element].tip(content)

- content: *[same as above]*    

######  &nbsp;

    [jQuery Element].tip()
    [jQuery Element].tip(null)

Clear the tip on the jQuery element

######  &nbsp;

# Compatibility
- Chrome
- Fire Fox
- Safari
- Edge
- IE 9-11
- IE 7,8

[jQuery]: https://jquery.com/ "jQuery Home Page"