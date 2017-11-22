var trys = '<i class="fa fa-code"></i>';

(function ($) {
  // writes the string
  //
  // @param jQuery $target
  // @param String str
  // @param Numeric cursor
  // @param Numeric delay
  // @param Function cb
  // @return void
  function typeString($target, str, cursor, delay, cb) {
    $target.html(function (_, html) {
      return html + str[cursor];
    });
    
    if (cursor < str.length - 1) {
      setTimeout(function () {
        typeString($target, str, cursor + 1, delay, cb);
      }, delay);
    }
    else {
      cb();
    }
  }
  
  // clears the string
  //
  // @param jQuery $target
  // @param Numeric delay
  // @param Function cb
  // @return void
  function deleteString($target, delay, cb) {
    var length;
    
    $target.html(function (_, html) {
      length = html.length;
      return html.substr(0, length - 1);
    });
    
    if (length > 1) {
      setTimeout(function () {
        deleteString($target, delay, cb);
      }, delay);
    }
    else {
      cb();
    }
  }

  // jQuery hook
  $.fn.extend({
    teletype: function (opts) {
      var settings = $.extend({}, $.teletype.defaults, opts);
      
      return $(this).each(function () {
        (function loop($tar, idx) {
          // type
          typeString($tar, settings.text[idx], 0, settings.delay, function () {
            // delete
            setTimeout(function () {
              deleteString($tar, settings.delay, function () {
                loop($tar, (idx + 1) % settings.text.length);
              });
            }, settings.pause);
          });
        
        }($(this), 0));
      });
    }
  });

  // plugin defaults  
  $.extend({
    teletype: {
      defaults: {
        delay: 100,
        pause: 5000,
        text: []
      }
    }
  });
}(jQuery));

$('#target').teletype({
  text: [
    'Welcome.',
    'こんにちは!',
    'Hello.',
    'Thanks for stopping by...',
    'I will code you something awesome if you pay me...',
    'I will keep learning.',
    'I like learning.',
    '你好。 我会中文了。 英文是我的母语但是我也会说普通话。',
    'My projects are below check them out if you have time',
    '私は日本語を勉強しています.'
  ]
});

$('#cursor').teletype({
  text: [' ', ' '],
  delay: 0,
  pause: 500
});