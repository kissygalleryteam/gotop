/**
 * @fileoverview
 * @author 自寒<zihan.yx@taobao.com>
 * @module gotop
 **/
KISSY.add(function (S, Node, Lang) {
    var $ = Node.all,
        EventTarget = S.Event.Target;
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
        self.config = S.mix({
            trigger: '',
            useAnim: false
        }, config);
        self._init();
    }

    S.augment(Gotop, EventTarget, /** @lends Gotop.prototype*/{
        _init: function() {
            var self = this;
            self._bindEvent();
        },
        _bindEvent: function() {
            var self = this;
            var config = self.config;
            var trigger = $(config.trigger);
            if(!trigger.length) {
                S.error('元素不存在');
            }
            trigger.on('click', function() {
                window.scrollTo(0, 1);
            })
        }
    });

    return Gotop;

}, {requires:['node', 'lang']});



