
# API Document

## Create TipBox with Options
    $(jQuery Element).tip(options);

Create a customized tip box and bind to the jQuery element. 

- **options**: options
  + **content**: ([jQuery element]/string) content of the tip, the old tip box(if exist) will be clear if content is empty
  + **orientation**: (string) top/left/bottom/right, default:top
  + **margin**: (number) distance between the tip box and the object element
  + **offset**: (number) offset the tipbox left / right from center position
  + **cssClass**: (string) name of css class, this css class will apply to the tip box
  + **css**: (object) the css apply to the tip box, rule is the same as $.css()

<div><br></div>

    $(jQuery Element).tip(content, orientation, options);

Create a customized tip box and bind to the jQuery element. 

- content: *[same as above]*    
- orientation: *[same as above]*  
- options: *[same as above]* 

<div><br></div>

## Create TipBox with Content
    $(jQuery Element).tip(content, orientation);

- content: *[same as above]*    
- orientation: *[same as above]*  
<div><br></div>

    $(jQuery Element).tip(content);

- content: *[same as above]*    
<div><br></div>

## Clear TipBox

    [jQuery Element].tip()
    [jQuery Element].tip(null)

Clear the tip on the jQuery element

<div><br></div>
