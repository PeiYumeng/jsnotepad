var $dlgSearch = (function(){
    var html =''
                + '<div class="search-mask">'
                + '<div class="search-box">'
                + '<div class="search-titlebar">'
                + '<p class="title">查找</p>'
                + '<span class="close-btn" title="关闭">✖</span>'
                + '</div>'
                + '<div class="search-main">'
                + '<label>查找内容(N): <input class="txt-content" type="text" autofocus></label><br>'
                + '<label><input type="checkbox" id="daixaoxie" value="capital-sense">区分大小写(C)</label>'
                + '<fieldset class="search-direction">'
                + '<legend>方向</legend>'
                + '<label><input type="radio" name="direction" value="up">向上(U)</label>'
                + '<label><input type="radio" name="direction" value="down" checked>向下(D)</label>'
                + '</fieldset>'
                + '<input class="btn-search btn" type="button" value="查找(F)">'
                + '<input class="btn-cancel btn" type="button" value="取消">'
                + '</div>'
                + '</div>'
                + '</div>'
            $dlg = $(html),
            cfg = {
                container:'body',
            };
    function show2(conf){
        $(cfg.container).append($dlg);
        $.extend(cfg,conf);
        $('.close-btn').click(()=>{
            $dlg.remove();
        })
        $('.btn-cancel').click(()=>{
            $dlg.remove();
        })
        $('.btn-search').click(()=>{
          console.log($('.txt-content').val())
          if($('.txt-content').val()){
            $('.btn-search').removeAttr('disabled')
          }
        })
    }
    return {
        show2:show2
    }
}())