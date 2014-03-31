/**
 * @fileoverview 
 * @author 自寒<zihan.yx@taobao.com>
 * @module gotop
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 
     * @class Gotop
     * @constructor
     * @extends Base
     */
    function Gotop(comConfig) {
        var self = this;
        //调用父类构造函数
        Gotop.superclass.constructor.call(self, comConfig);
    }
    S.extend(Gotop, Base, /** @lends Gotop.prototype*/{

    }, {ATTRS : /** @lends Gotop*/{

    }});
    return Gotop;
}, {requires:['node', 'base']});



