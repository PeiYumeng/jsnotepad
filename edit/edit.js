var $edit = (function() {
    var $html = $('<textarea spellcheck="false" auto-size="none"></textarea>');
    var cfg = {
      container:'#main',
      posHandler: null,
      contentHandler: null,
      wrap: false
    };
    function show(conf){
        $.extend(cfg,conf);
        $(cfg.container).append($html);
        console.log(screen.width)
        $(cfg.container).css('width',screen.width+'px')
        $(cfg.container).css('height',screen.height-130+'px')
    }
    return {
      show: show
    };
  }());
  