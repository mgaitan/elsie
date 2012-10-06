/*
 * jQuery UI Virtual Keyboard Rotator for Keyboard v1.8.14+ only
 *
 * By Martín Gaitá
 * Licensed under the MIT License
 *
 * Use this extension with the Virtual Keyboard to rotate
 *
 *
 * Requires:
 *  jQuery
 *  Keyboard plugin : https://github.com/Mottie/Keyboard
 *
 * Setup:
 *  $('.ui-keyboard-input')
 *   .keyboard(options)
 *   .rotate(rotate-options);
 *
 *  // or if targeting a specific keyboard
 *  $('#keyboard')
 *   .keyboard(options)
 *   .rotate(rotate-options);
 *
 *
 */
// EXAMPLES:
// $('#inter').getkeyboard().reveal().typeIn('\tHello \b\n\tWorld', 500);
// $('#meta').getkeyboard().reveal().typeIn('abCDd11123\u2648\u2649\u264A\u264B', 700, function(){ alert('all done!'); });

(function($){
    $.fn.addRotate = function(options){
        //Set the default values, use comma to separate the settings, example:
        var defaults = {
            delay      : 1000
        };
        return this.each(function(){
            // make sure a keyboard is attached
            var base = $(this).data('keyboard');
            if (!base) { return; }

            // mouseover the key, add the text directly, then mouseout on the key
            base.simulateKey = function(el,txt){
                var e = el.length;
                if (e) { el.filter(':visible').trigger('mouseenter.keyboard'); }
                base.typing_timer = setTimeout(function(){
                    if (e) { setTimeout(function(){ el.trigger('mouseleave.keyboard'); }, 1000); }
                    if (!base.isVisible) { return; }
                    if (!base.typing_event) {
                        base.insertText(txt);
                        base.checkCombos();
                    }
                }, 1000);
            }
        });

        }
    })(jQuery);
