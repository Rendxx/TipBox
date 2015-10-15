
# API Document

#### $(jQuery Element).tip(options);

Create a customized tip box and bind to the jQuery element. 

- **options** ```object```  
  An object contains all parameters

  + **content** ```string``` ```jQuery object```    
    Content of the tip, the old tip box(if exist) will be clear if content is empty

  + **orientation** ```string```  
    Available value: ```"top"``` *(default)* / ```"left"``` / ```"bottom"``` / ```"right "``` 

  + **margin** ```number```  
    Distance between the tip box and the object element

  + **offset** ```number```  
    Offset the tipbox left / right from center position

  + **cssClass** ```string```  
    Name of css class, this css class will apply to the tip box

  + **css** ```object```  
    The css apply to the tip box, rule is the same as ```$.css()```

<h1></h1>

#### $(jQuery Element).tip(content [, orientation [, options]]);

Create a customized tip box and bind to the jQuery element. 

- **content** ```string``` ```jQuery object```   
  *[same as above]*    

- **orientation** ```string```  
  *[same as above]*  

- **options** ```object```    
  *[same as above]* 

<h1></h1>

#### $(jQuery Element).tip()

Clear the tip on the jQuery element

