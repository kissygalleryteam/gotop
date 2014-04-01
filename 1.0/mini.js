/**
 * @fileoverview
 * @author 自寒<zihan.yx@taobao.com>
 * @module gotop
 **/
KISSY.add(function(S, Node, Lang, Anim) {
    var $ = Node.all;
    var EventTarget = S.Event.Target;
    var win = window;
    /**
     *
     * @class Gotop
     * @constructor
     */
    function Gotop(config) {
        if (!config.trigger) {
            S.error('未指定元素');
        }
        var self = this;
        //默认配置
        var defaultConfig = {
            trigger: '', //触发元素
            offset: 50, //偏移量，切换显示隐藏
            useAnim: false, //是否使用动画
            easing: 'easeBoth',//动画效果
            duration: 1,    //动画时间
            afterScroll: null //回调函数
        };
        self.config = S.mix(defaultConfig, config);
        self.init();
    }

    S.augment(Gotop, EventTarget, /** @lends Gotop.prototype*/ {
        /**
         * 初始化组件
         * @return
         */
        init: function() {
            var self = this;
            self._bindEvent();
            self._bindScroll();
        },
        /**
         * 绑定点击事件
         * @return
         */
        _bindEvent: function() {
            var self = this;
            var config = self.config;
            var trigger = $(config.trigger);
            var useAnim = config.useAnim;
            var easing = config.easing;
            var duration = config.duration;
            var callback = config.afterScroll;
            if (!trigger.length) {
                S.error('元素不存在');
            }
            trigger.on('click', function() {
                if (useAnim) {
                    win.scrollTo(0, 1);
                    /*$(win).animate({
                        scrollTop: 1
                    }, duration, easing, callback);*/
                } else {
                    win.scrollTo(0, 1);
                }
                if (typeof callback === 'function') {
                    callback();
                }
            });
        },
        /**
         * 绑定全局滚动事件
         * @return
         */
        _bindScroll: function() {
            var self = this;
            self.scrollEvent = function() {
                self._update.call(self, null);
            };
            $(win).on('scroll', self.scrollEvent);
        },
        /**
         * 切换显示隐藏状态
         * @return
         */
        _update: function() {
            var self = this;
            var config = self.config;
            var trigger = $(config.trigger);
            var scrollY = parseInt(win.scrollY, 10);
            var offset = parseInt(config.offset, 10);
            if (scrollY >= offset) {
                trigger.show();
            } else {
                trigger.hide();
            }
        },
        /**
         * 销毁组件
         * @return
         */
        destroy: function() {
            var self = this;
            var config = self.config;
            var trigger = $(config.trigger);
            trigger.hide().detach('click');
            $(win).detach('scroll', self.scrollEvent);
        }
    });

    return Gotop;

}, {
    requires: ['node', 'lang', 'anim']
});