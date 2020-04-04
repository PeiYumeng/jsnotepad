var $dlgGoto = (function(){
    var html = ''
            +'<div class="notepad-dlg-goto">'
            +'<div class="dialogbox">'
            +' <div class="titlebar">'
            +'      <p class="title">跳转到指定行</p>'
            +'      <span class="closs-btn">×</span>'
            +'  </div>'
            +'  <div class="main">'
            +'      <label for="">行号(L):</label>'
            +'      <br>'
            +'      <input type="text" class="text-ine-num">'
            +'      <br>'
            +'      <input type="button" value="转到" class="btn-goto">'
            +'      <input type="button" value="取消" class=btn-cancel>'
            +'   </div>'
            +' </div>'
            +' </div>',
            $dlg = $(html),
            cfg = {
                container:'body',
                maxnum:6,
            };
    function show(conf){
        $(cfg.container).append($dlg);
        $.extend(cfg,conf);
        $('.btn-goto').click(()=>{
            console.log($('.text-ine-num').val());
        })
        $('.btn-cancel').click(()=>{
            $dlg.remove();
        })
        $('.closs-btn').click(()=>{
            $dlg.remove();
        })
    }
    return {
        show:show
    }
}())