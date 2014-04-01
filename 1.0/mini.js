/**
 * @fileoverview
 * @author 自寒<zihan.yx@taobao.com>
 * @module gotop
 **/
KISSY.add(function (S, Node, Lang) {
    var $ = Node.all;
    var EventTarget = S.Event.Target;
    var win = window;
    /**
     *
     * @class Gotop
     * @constructor
     */
    function Gotop(config) {
        if(!config.trigger) {
            S.error('未指定元素');
        }
        var self = this;
        var defaultConfig = {
            trigger: '',
            offset: 500,
            useAnim: false,
            afterScroll: null
        };
        self.config = S.mix(defaultConfig, config);
        self._init();
    }

    S.augment(Gotop, EventTarget, /** @lends Gotop.prototype*/{
        _init: function() {
            var self = this;
            self._bindEvent();
            self._bindScroll();
        },
        _bindEvent: function() {
            var self = this;
            var config = self.config;
            var trigger = $(config.trigger);
            var callback = config.afterScroll;
            if(!trigger.length) {
                S.error('元素不存在');
            }
            trigger.on('click', function() {
                win.scrollTo(0, 1);
                if(typeof callback === 'function'){
                   callback();
                }
            });
        },
        _bindScroll: function() {
            var self = this;
            $(win).on('scroll', self._update);
        },
        _update: function() {
            var self = this;
            var config = self.config;
            var trigger = $(config.trigger);
            var scrollY = parseInt(win.scrollY, 10);
            var offset = parseInt(config.offset, 10);
            if(scrollY >=offset){
                trigger.show();
            }else {
                trigger.hide();
            }
        },
        _destroy: function() {
            var self = this;
            var config = self.config;
            var trigger = $(config.trigger);
            trigger.detach('click');
            win.detach('scroll', self._update);
        }
    });

    return Gotop;

}, {requires:['node', 'lang']});



