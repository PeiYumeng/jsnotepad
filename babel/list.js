'use strict';

function List() {
    var html = '' + '<div class="list-box">' + '  <span class="list-title"></span>' + '  <div class="list">' + '      <input type="text" class="list-input">' + '      <br>' + '     <ul class="list-ul"></ul>' + '  </div>' + '  </div>',
        cfg;
    this.styles = '';
    this.show = function show(conf) {
        cfg = {
            container: 'body',
            boxs: [],
            title: '',
            $div: '',
            $input: $('<input />'),
            $list: $('<li></li>'),
            $listBox: $('<box></box>')
        };
        $.extend(cfg, conf);
        var $dlg = $(html);
        cfg.$list = $dlg.find('.list-ul');
        cfg.$listBox = $dlg.find('.list-title');
        cfg.$input = $dlg.find('.list-input');
        cfg.$div = $dlg.find('.list');
        $(cfg.container).append($dlg);
        addtitle();
        addli();
    };
    function addtitle() {
        cfg.$listBox.append(cfg.title);
    }
    function style(i, $item) {
        switch (cfg.title) {
            case '字体':
                cfg.$div.addClass('list1');
                $item.css({ 'font-family': cfg.boxs[i] });
                break;
            case '字号':
                cfg.$div.addClass('list3');
                $item.css({ 'font-size': cfg.boxs[i] });
                break;
            case '样式':
                cfg.$div.addClass('list2');
                if (cfg.boxs[i] === '斜体') {
                    $item.css({ 'font-style': 'italic' });
                }
                if (cfg.boxs[i] === '粗体') {
                    $item.css({ 'font-weight': 'bold' });
                }
                if (cfg.boxs[i] === '粗偏斜体') {
                    $item.css({ 'font-weight': 'bold', 'font-style': 'italic' });
                }
                break;
        }
    }
    function addli() {
        for (var i = 0; i < cfg.boxs.length; i++) {
            var $item = $('<li class="list-li"></li>');
            style(i, $item);
            cfg.$list.append($item.html(cfg.boxs[i]));
            (function (i) {
                $item.click(function () {
                    selectLi(i);
                });
            })(i);
        }
    }
    function selectLi(n) {
        cfg.$list.children().removeClass('selected');
        cfg.$list.children().eq(n).addClass('selected');
        cfg.$input.val(cfg.$list.children().eq(n).html());
        cfg.$input.select();
        console.log(cfg.$list.children().eq(n).html());
        example(n);
    }
    function example(i) {
        switch (cfg.title) {
            case '字体':
                $('.shili').css({ 'font-family': cfg.boxs[i] });
                break;
            case '字号':
                $('.shili').css({ 'font-size': cfg.boxs[i] + 'px' });
                break;
            case '样式':
                cfg.$div.addClass('list2');
                if (cfg.boxs[i] === '斜体') {
                    $('.shili').css({ 'font-style': 'italic' });
                }
                if (cfg.boxs[i] === '粗体') {
                    $('.shili').css({ 'font-weight': 'bold' });
                }
                if (cfg.boxs[i] === '粗偏斜体') {
                    $('.shili').css({ 'font-weight': 'bold', 'font-style': 'italic' });
                }
                break;
        }
    }
}
