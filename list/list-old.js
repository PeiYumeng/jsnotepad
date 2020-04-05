var $listFont = (function(){
    var html =''
                +'<div class="list-box">'
                +'  <div class="list1">'
                +'      <input type="text" class="list-input">'
                +'      <br>'
                +'     <ul class="list-ul"></ul>'
                +'  </div>'
                +'  </div>',
            cfg;
    function show(conf){
        cfg = {
            container:'body',
            boxs:[],
            title:'',
            $input:$('<input />'),
            $list:$('<li></li>'),
            $listBox:$('<box></box>'),
        };
        $.extend(cfg,conf);
        var $dlg = $(html);
        cfg.$list = $dlg.find('.list-ul');
        cfg.$listBox = $dlg.find('.list-box');
        cfg.$input = $dlg.find('.list-input')
        $(cfg.container).append($dlg);
        addtitle();
        addli();
    }
    function addtitle(){
        $p = $('<span class="list-title"></span>')
        cfg.$listBox.append($p.html(cfg.title))
    }
    function addli(){
        switch(cfg.title){
            case '字体':
                for(var i=0;i<cfg.boxs.length;i++){
                    $item = $('<li class="list-li"></li>');
                    $item.css({'font-family': cfg.boxs[i]});
                    cfg.$list.append($item.html(cfg.boxs[i]));
                    (function(i){
                        $item.click(()=>{selectLi(i)})
                    }(i))
                }
                break
            case '字号':
                for(var i=0;i<cfg.boxs.length;i++){
                    $item = $('<li class="list-li"></li>');
                    $item.css({'font-size': cfg.boxs[i]});
                    cfg.$list.append($item.html(cfg.boxs[i]));
                    (function(i){
                        $item.click(()=>{selectLi(i)})
                    }(i))
                }
                break;
        }
    }
    function selectLi(n) {
        cfg.$list.children().removeClass('selected')
        cfg.$list.children().eq(n).addClass('selected');
        cfg.$input.val(cfg.$list.children().eq(n).html());
        cfg.$input.select();
    }
    return {
        show:show
    }
}())