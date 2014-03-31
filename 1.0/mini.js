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

    }

    S.augment(Gotop, EventTarget, /** @lends Gotop.prototype*/{

    });

    return Gotop;

}, {requires:['node', 'lang']});



