var $dlgReplace = (function(){
    var html =''
                 + '<div class="replace-mask">'
                 + '<div class="replace-box">'
                    + '<div class="replace-titlebar">'
                    + '<p class="title">替换</p>'
                    + '<span class="close-btn" title="关闭">✖</span>'
                    + '</div>'
                    + '<div class="replace-main">'
                    + '<label>查找内容(N):<input class="txt-search" type="text" autofocus><br></label>'
                    + '<label id="tihuan">替换为(P):<input class="txt-replace" type="text"><br></label>'
                    + '<label id="daxiaoxie"><input type="checkbox" value="capital-sense">区分大小写(C)</label>'
                    + '<input class="btn-search btn" type="button" value="查找下一个(F)">'
                    + '<input class="btn-replace btn" type="button" value="替换(R)">'
                    + '<input class="btn-replace-all btn" type="button" value="全部替换(A)">'
                    + '<input class="btn-cancel btn" type="button" value="取消">'
                    + '</div>'
                + '</div>'
                + '</div>'
            $dlg = $(html),
            cfg = {
                container:'body',
            };
    function show(conf){
        $(cfg.container).append($dlg);
        $.extend(cfg,conf);
        $('.close-btn').click(()=>{
            $dlg.remove();
        })
        $('.btn-cancel').click(()=>{
            $dlg.remove();
        })
        $('.btn-replace').click(()=>{
          console.log($('.txt-search').val())
          console.log($('.txt-replace').val())
        })
    }
    return {
        show:show
    }
}())