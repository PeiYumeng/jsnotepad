function List(){
    var html =''
                +'<div class="list-box">'
                +'  <div class="list1">'
                +'      <input type="text" class="list-input">'
                +'      <br>'
                +'     <ul class="list-ul"></ul>'
                +'  </div>'
                +'  </div>',
            cfg;
    this.show = function show(conf){
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
    function style(i){
        switch(cfg.title){
            case '字体':
                $item.css({'font-family': cfg.boxs[i]});
                break
            case '字号':
                $item.css({'font-size': cfg.boxs[i]});
                break;
            case '样式':
                if(cfg.boxs[i] === '斜体') {$item.css({'font-style': 'italic'})}
                if(cfg.boxs[i] === '粗体') {$item.css({'font-weight': 'bold'})}
                if(cfg.boxs[i] === '粗偏斜体') {$item.css({'font-weight': 'bold', 'font-style': 'italic'})}
                break; 
        }
    }
    function addli(){
        for(var i=0;i<cfg.boxs.length;i++){
            $item = $('<li class="list-li"></li>');
            style(i)
            cfg.$list.append($item.html(cfg.boxs[i]));
            (function(i){
                $item.click(()=>{selectLi(i)})
            }(i))
        }
    }
    function selectLi(n) {
        cfg.$list.children().removeClass('selected')
        cfg.$list.children().eq(n).addClass('selected');
        cfg.$input.val(cfg.$list.children().eq(n).html());
        cfg.$input.select();
    }
}