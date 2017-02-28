/**
 * DoList view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.DoList', {
    extend: 'Ext.List',
    store: 'DoList',
    xtype: 'dolist',
    autoScroll: true,
    hideHeaders: true,
    cls: 'dolist-cls',
    itemTpl: [
        '<span class="{[this.getIconData(values)]}"></span> {name} <div class="done-status {[this.getDoneCls(values)]}"></div>', {
            getIconData: function(values) {
                return Utility.getTodoIcons(values.name);
            },
            getDoneCls: function(values) {
                if (values.done) {
                    return "done-cls";
                } else {
                    return "notdone-cls";
                }
            }
        }
    ],
    listeners: {
        itemtap: function(me, index, target, record, e, eOpts) {
            var donevalue = !record.data.done;
            record.set('done', donevalue);
        }
    }
});