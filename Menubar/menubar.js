function Menu(){
    var html =''
                +'<div class="menu-box">'
                +'    <ul class="menu-name">'
                +'       <li class="menu-title">文件(F)</li>'
                +'  </ul>'
                +'  <ul class="menu-context">'
                +'      <li class="menu-item">'
                +'          <span class="menu-item-left">新建(N)</span>'
                +'          <span class="menu-item-right">Ctrl+N</span>'
                +'      </li>'
                +'      <hr>'
                +'  </ul>'
                +'</div>',
            cfg;
    this.styles='';
    this.show = function show(conf){
        cfg = {
            container:'body',
            boxs:[],
            title:'',
            $div:'',
            $input:$('<input />'),
            $list:$('<li></li>'),
            $listBox:$('<box></box>'),
        };
        $.extend(cfg,conf);
        var $dlg = $(html);
        cfg.$list = $dlg.find('.list-ul');
        cfg.$listBox = $dlg.find('.list-title');
        cfg.$input = $dlg.find('.list-input');
        cfg.$div = $dlg.find('.list')
        $(cfg.container).append($dlg);
        addtitle();
        addli();
    }
    function addtitle(){
        cfg.$listBox.append(cfg.title)
    }
    function style(i){
        switch(cfg.title){
            case '字体':
                cfg.$div.addClass('list1')
                $item.css({'font-family': cfg.boxs[i]});
                break
            case '字号':
                cfg.$div.addClass('list3')
                $item.css({'font-size': cfg.boxs[i]});
                break;
            case '样式':
                cfg.$div.addClass('list2')
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
}