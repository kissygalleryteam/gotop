## 综述

Gotop是一个简单的基于KISSY MINI的回到顶部组件。

* 版本：1.0
* 作者：自寒
* demo：[http://gallery.kissyui.com/gotop/1.0/demo/mini.html](http://gallery.kissyui.com/gotop/1.0/demo/mini.html)

## 初始化组件

    S.use('gallery/gotop/1.0/mini', function (S, Gotop) {
        var gotop = new Gotop({
            trigger: '#gotop'
        });
    })

## API说明

* Class: Gotop
    * trigger[String]: 触发元素（必选）
    * offset[Number]: 屏幕滚动多少距离后显示元素，默认50
    * useAnim[Boolean]: 是否动画滚动，默认false
    * easing[String]: 动画效果，默认'easeBoth'
    * duration[Number]: 动画时长，默认1
    * afterScroll[Function]: 回调函数，默认无
* Method:
    * init(): 初始化
    * destroy(): 销毁组件