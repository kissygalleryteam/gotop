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
        var self = this;
        self.config = config;
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
            trigger.on('click', function() {
                alert('1');
            })
        }
    });

    return Gotop;

}, {requires:['node', 'lang']});



