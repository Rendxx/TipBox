/************************************************ 
Tip Box
Copyright (c) 2014-2015 Dongxu Ren  http://www.rendxx.com/

License: MIT (http://www.opensource.org/licenses/mit-license.php)
Version: 0.2.5
Update: 2016-01-08

Description:
    Add a tip box to the jQuery element. The tip box will show on mouse hover.
    The tip is always point to the center of the element, and will be resized to fit the content.
    
Compatibility:
    Chrome; Fire Fox; Safari; Edge; IE 9-11; *IE 7,8;
 
Dependency:
    jQuery

API:
    [jQuery Element].tip(options)
        - options:
            content: ([jQuery element]/string) content of the tip, the old tip box(if exist) will be clear if content is empty
            orientation: (string) top/left/bottom/right, default:top
            margin: (number) distance between the tip box and the object element
            offset: (number) offset the tipbox left / right from center position
            cssClass: (string) name of css class, this css class will apply to the tip box
            css: (object) the css apply to the tip box, rule is the same as $.css()

    [jQuery Element].tip(content, orientation, options)
        - content:  same as above
        - orientation: same as above
        - options:
            margin: (number) distance between the tip box and the object element
            offset: (number) offset the tipbox left / right from center position
            cssClass: (string) name of css class, this css class will apply to the tip box
            css: (object) the css apply to the tip box, rule is the same as $.css()

    [jQuery Element].tip(content, orientation)
        - content: same as above 
        - orientation: same as above 

    [jQuery Element].tip(content)
        - content: same as above

    [jQuery Element].tip()
        clear tip

************************************************/


(function ($) {
    "use strict";
    // Setup
    var keyName = "Rtip";
    var fakeSpan = null;
    var container = null;
    // -------------------------------------------------------------------------
    
    // tip control -------------------------------------------------------------
    var _showTip = function (e) {
        var $this = $(this);
        var tipData = $this.data(keyName);
        if (tipData == null) return;
        var offset = $this.offset();
        if (tipData.ele == null) {
            tipData.ele = _createTip(tipData.opts);
            $this.bind('mouseleave', _hideTip);
            tipData.orientation = tipData.opts.orientation;
            delete tipData["opts"];
        }

        var top = 0;
        var left = 0;
        var orientation = tipData.orientation;
        if (orientation == "top") {
            top = offset.top;
            left = offset.left + $this.width() / 2;
        } else if (orientation == "bottom") {
            top = offset.top + $this.height();
            left = offset.left + $this.width() / 2;
        } else if (orientation == "right") {
            top = offset.top + $this.height() / 2;
            left = offset.left + $this.width();
        } else if (orientation == "left") {
            top = offset.top + $this.height() / 2;
            left = offset.left;
        }

        tipData.ele.css({
            top: top + "px",
            left: left + "px"
        });
        tipData.ele.stop(true, true).fadeIn(100);
    };

    var _hideTip = function (e) {
        var $this = $(this);
        var tipData = $this.data(keyName);
        if (tipData == null) return;
        tipData.ele.stop(true, true).fadeOut(100);
    };
    // -------------------------------------------------------------------------
    var _checkAuto = function (attr) {
        if (attr == null || $.trim(attr).toLowerCase() == "auto") return true;
        return false;
    };

    var _findContentSize = function (content, cssClass, css) {
        var fakeSpan = null;
        fakeSpan = $("<div>").appendTo($(document.body)).hide();
        if (css != null) fakeSpan.css(css);
        if (cssClass != null) fakeSpan.addClass(cssClass);

        fakeSpan.css({
            "position": "absolute",
            "display": "none",
            "border": "0",
            "padding": "0",
            "margin": "0",
            "width": _checkAuto(css.width)?"auto":null,
            "height": "auto"
        });
        fakeSpan.html(content);

        var wid = fakeSpan.width();
        var hgt = fakeSpan.height();
        fakeSpan.remove();
        return [wid+1, hgt];
    };

    // tip html create --------------------------------------------------------------
    var _createPointer = function (size, orientation, color) {
        var container = $(_htmlData.pointer);
        var pointer = $(_htmlData.pointer_in)
            .css( 'border-width', size/2+'px')
            .appendTo(container);

        if (orientation == "top") {
            container.width(size).height(size / 2);
            pointer.css({
                'border-top-color': color,
                'left': 0,
                'top': 0
            });
        } else if (orientation == "left") {
            container.width(size / 2).height(size);
            pointer.css({
                'border-left-color': color,
                'left': 0,
                'top': 0
            });
        } else if (orientation == "bottom") {
            container.width(size).height(size / 2);
            pointer.css({
                'border-bottom-color': color,
                'left': 0,
                'bottom': 0
            });
        } else if (orientation == "right") {
            container.width(size / 2).height(size);
            pointer.css({
                'border-right-color': color,
                'right': 0,
                'top': 0
            });
        }

        return container;
    };
    
    // create tip element
    var _createTip = function (options) {
        /*
         *      .----------------------------------.
         *      |               wrap               |
         *      | .------------------------------. |
         *      | |             box              | |
         *      | | .--------------------------. | |
         *      | | |                          | | |
         *      | | |         content          | | |
         *      | | |                          | | |
         *      | | '--------------------------' | |
         *      | '------------------------------' |
         *      |       pointer  \/                |
         *      '----------------------------------'
         */

        // create container for 1st time
        if (container == null) container = $(_htmlData.container).appendTo($(document.body));

        // create tip html
        var wrap = $(_htmlData.wrap).appendTo(container);
        var box = $(_htmlData.box).appendTo(wrap);
        var content = $(_htmlData.content).appendTo(box);
        var pointer = _createPointer(10, options.orientation, options.css["background-color"]).appendTo(wrap);

        // set content
        var rawSize = _findContentSize(options.content, options.cssClass, options.css);
        content.html(options.content).width(rawSize[0]).height(rawSize[1]);
        content.css({
            "margin-top": -rawSize[1]/2 + "px",
            "margin-left": -rawSize[0]/2 + "px"
        });

        // set css
        box.addClass(options.cssClass).css(options.css);
        if (_checkAuto(options.css.width)) box.width(rawSize[0]);
        if (_checkAuto(options.css.height)) box.height(rawSize[1]);

        // adjust layout
        var pointer_wid = pointer.width();
        var pointer_hgt = pointer.height();
        var wid_wrap = wrap.width();
        var hgt_wrap = wrap.height();

        box.css({
            "position": "absolute"
        });
        wrap.width(1).height(1);

        if (options.orientation == "top") {
            pointer.css({
                "bottom": "0",
                "left": -pointer_wid / 2 + "px"
            });
            box.css({
                "left": -wid_wrap / 2 + options["offset"] + "px",
                "bottom": pointer_hgt + "px"
            });
            wrap.css({
                "margin-top": -options.margin + "px"
            });
        } else if (options.orientation == "bottom") {
            pointer.css({
                "top": "0",
                "left": -pointer_wid / 2 + "px"
            });
            box.css({
                "top": pointer_hgt + "px",
                "left": -wid_wrap / 2 + options["offset"] + "px"
            });
            wrap.css({
                "margin-top": options.margin + "px"
            });
        } else if (options.orientation == "left") {
            pointer.css({
                "top": -pointer_hgt / 2 + "px",
                "right":"0"
            });
            box.css({
                "top": -hgt_wrap / 2 + options["offset"] + "px",
                "right": pointer_wid + "px"
            });
            wrap.css({
                "margin-left": -options.margin + "px"
            });
        } else if (options.orientation == "right") {
            pointer.css({
                "top": -pointer_hgt / 2 + "px",
                "left": "0"
            });
            box.css({
                "top": "0px",
                "left": "0px",
                "margin-top": -hgt_wrap / 2 + options["offset"] + "px",
                "margin-left": pointer_wid + "px"
            });
            wrap.css({
                "margin-left": options.margin + "px"
            });
        }

        // final setup
        wrap.hide();
        wrap.css({
            "visibility": "visible"
        });

        return wrap;
    };

    // html element
    var _htmlData = {
        'container': '<div style="width:1px; height:1px; position:absolute; top:0; left:0; overflow:visible; z-index: 999999;"></div>',
        'wrap': '<div style="width:auto; height:auto; position:absolute; top:0; left:0; overflow:visible;"></div>',
        'box': '<div style="width:auto; height:auto; position:relative; overflow:visible; margin:0; border:0;"></div>',
        'content': '<div style="width:auto; height:auto; position:absolute; top:50%; left:50%; overflow:visible; display: block;"></div>',
        'pointer': '<div style="width:auto; height:auto; position:absolute; overflow:hidden;"></div>',
        'pointer_in': '<div style="width:0; height:0; border:10px solid transparent; position:absolute;"></div>'
    };
    // -------------------------------------------------------------------------
    
    $.fn.tip = function () {
        // handle arguements
        var options = $.extend(true, {}, $.fn.tip.defaults);
        if (arguments.length == 0) {   // No argument: clear tip
            options = null;
        } else if (arguments.length == 1) {
            if (arguments[0] == null) {
                options = null;
            } else if (typeof arguments[0] == 'string' || (typeof arguments[0] == 'object' && arguments[0] instanceof $)) { // [content]
                options.content = arguments[0];
            } else if (typeof arguments[0] == 'object') { // [opts]
                $.extend(true, options, arguments[0]);
            } else { // error
                return; 
            }
        } else if (arguments.length == 2) { // [content, orientation]
            options.content = arguments[0];
            options.orientation = arguments[1];
        } else if (arguments.length == 3) { // [content, orientation, opts]
            options.content = arguments[0];
            options.orientation = arguments[1];
            $.extend(true, options, arguments[2]);
        } else { // illegal arguments          
            return;
        }

        this.each(function () {
            var $this = $(this);
            // remove old tip & hover function
            var oldTip = $this.data(keyName);
            if (oldTip != null && oldTip.ele != null) oldTip.ele.remove();
            $this.unbind('mouseenter', _showTip).unbind('mouseleave', _hideTip);
            if (options == null || options.content == null || options.content == "") return;
            if (typeof options.content == 'object' && options.content instanceof $) options.content = options.content.clone(true);
            // create new tip & hover function
            $this.data(keyName, {ele:null, opts:options});
            $this.bind('mouseenter',  _showTip);
            //if (window.event && $this.contains(window.event.srcElement)) $this.mouseenter()
        });

        return this;
    };

    $.fn.tip.defaults = {
        "content": "",
        "orientation": "top",
        "margin": 10,
        "offset": 0,
        "cssClass": null,
        "css": {
            "width": null,
            "height": null,
            "max-width": "600px",
            "max-height": "600px",
            "border-radius": "3px",
            "color": "#eee",
            "font-family": "Arail",
            "font-size": "12px",
            "line-height": "16px",
            "text-align": "center",
            "background-color": "#333",
            "overflow": "hidden",
            "padding": "10px"
        }
    };
})(jQuery);