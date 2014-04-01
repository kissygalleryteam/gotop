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
            offset: 50,
            useAnim: false,
            afterScroll: null
        };
        self.config = S.mix(defaultConfig, config);
        self.init();
    }

    S.augment(Gotop, EventTarget, /** @lends Gotop.prototype*/{
        init: function() {
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
            self.scrollEvent = function() {
                self._update.call(self, null);
            };
            $(win).on('scroll', self.scrollEvent);
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
        destroy: function() {
            var self = this;
            var config = self.config;
            var trigger = $(config.trigger);
            trigger.detach('click');
            $(win).detach('scroll', self.scrollEvent);
        }
    });

    return Gotop;

}, {requires:['node', 'lang']});



