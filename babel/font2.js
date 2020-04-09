'use strict';

var $dlgFont = function () {
    var html = '' + ' <div class="font">' + ' <div class="titlebar">' + '     <span class="about-title">字体</span>' + '     <span class="about-close" title="关闭">✖</span>' + ' </div>' + ' <div class="font-main">' + '     <div class="font-box"></div>' + '    <fieldset class="search-direction">' + '         <legend>示例</legend>' + '               <span class="shili">AaBbYyZz</span>' + '     </fieldset>' + '    <span class="font-foot">脚本(R):</span>' + '     <br>' + '     <select class="font-select">' + '        <option value="">西欧语言</option>' + '        <option value="">中文语言</option>' + '    </select>' + '    <input class="btn-ok" type="button" value="确定">' + '     <input class="btn-cancel" type="button" value="取消">' + '   </div>' + '   </div>';
    $dlg = $(html), cfg = {
        container: 'body'
    };
    function show(conf) {
        $(cfg.container).append($dlg);
        $.extend(cfg, conf);

        $('.about-close').click(function () {
            $dlg.remove();
        });
        $('.btn-cancel').click(function () {
            $dlg.remove();
        });
        $('.btn-ok').click(function () {
            $dlg.remove();
        });
    }
    return {
        show: show
    };
}();
