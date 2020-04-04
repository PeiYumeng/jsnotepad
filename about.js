var $dlgAbout = (function(){
    var html =''
        + '<div class="about-mask">'
        + '<div class="about-box">'
            + '<div class="about-titlebar">'
            + '<p class="about-title">关于“记事本”</p>'
            + '<span class="about-close" title="关闭">✖</span>'
            + '</div>'
            + '<div class="about-main">'
            + '<h1 class="about-slogan">JSNotepad</h1>'
            + '<hr>'
            + '<img class="about-logo" src="./notepad-icon-32.png" alt="JSNotepad">'
            + '<div class="about-info">'
                + '<p>作者：嘻嘻嘻</p>'
                + '<p>QQ：787878787878</p>'
                + '<p>仓库地址：<a href="https://github.com/PeiYumeng" target="_blank">https://github.com/PeiYumeng</a></p>'
            + '</div>'
            + '<input class="about-ok" type="button" value="确定" autofocus>'
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
        $('.about-close').click(()=>{
            $dlg.remove();
        })
        $('.about-ok').click(()=>{
            $dlg.remove();
        })
    }
    return {
        show:show
    }
}())