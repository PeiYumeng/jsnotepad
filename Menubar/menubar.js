function Menu(){
    var html =''
                +'<div class="menu-box">'
                +'    <ul class="menu-name">'
                +'  </ul>'
                +'</div>',
            cfg;
    var index = -1;
    var active = false;
    var active_num = 0;
    var s = -1;
    var hr = ['',''];
    this.show = function show(conf){
        cfg = {
            container:'body',
        };
        $.extend(cfg,conf);
        var $dlg = $(html);
        $(cfg.container).append($dlg);
        adddata();
        console.log(hr)
    }
    function adddata(){
        var len = menuData.length;
        for(var i=0;i<len;i++){
            var $liT = $('<li class="menu-title"></li>');
            $('.menu-name').append($liT.html(menuData[i].title));
            var $ul = $('<ul class="menu-context"></ul>');
            $ul.css('left',70*i+'px')
            $('.menu-box').append($ul)
            for(var a=0;a<menuData[i].menuItems.length;a++){
                if(menuData[i].menuItems[a].title =='hr'){
                    var $liC = $('<li class="menu-item"></li>');
                    var $hr = $('<hr/>')
                    $ul.append($liC)
                    $liC.append($hr)
                    hr[i] += a+',';
                }else{
                    var $liC = $('<li class="menu-item"></li>');
                    var $sp1 = $('<span class="menu-item-left"></span>')
                    var $sp2 = $('<span class="menu-item-right"></span>')
                    var $br = $('<br/>')
                    $liC.attr('attr',i)
                    $ul.append($liC)
                    $liC.append($sp1.html(menuData[i].menuItems[a].title))
                    $liC.append($sp2.html(menuData[i].menuItems[a].shortcut));
                    // $ul.append($br);
                    (function(a){
                        $liC.mouseover(()=>{showSpan(a)})
                    }(a))
                }
            }
            (function(i){
                $liT.click(()=>{titleClick(i)})
                $ul.mouseleave(()=>{titleout(i)})
                $ul.mouseover(()=>{ulOver(i)})
                $liT.mouseover(()=>{titleStyle(i)})
                $liT.mouseout(()=>{
                    $('.menu-title').css('background','white')
                })
            }(i))
        }
    }
    function titleStyle(i){//滑过菜单
        index = i;
        $('.menu-title').css('background','white')
        $('.menu-title').eq(i).css('background','#87CEFA')
        if(active){
            $('.menu-context').css('display','none')
            $('.menu-context').eq(i).css('display','block')
        }
    }
    function titleClick(i){//点击每项
        active_num++;
        if(active_num!=2){
            active = true;
            index = i;
            $('.menu-context').eq(i).css('display','block')
            $('.menu-title').eq(i).css('background','#87CEFA')
        }else{//点了俩下关闭子菜单
            active_num = 0;
            active = false;
            index = -1;
            $('.menu-context').css('display','none')
        }
    }
    function ulOver(i){//划过子菜单
        $('.menu-title').eq(i).css('background','#87CEFA')
    }
    function titleout(i){//划出子菜单
        $('.menu-title').css('background','white')
        $('.menu-context').eq(i).css('display','none')
    }
    function showSpan(a){
        // var aa = $('.menu-context').eq(index).children().eq(a);
        // console.log( $('.menu-context').eq(index).children())
        console.log($('.1'))
    }
}