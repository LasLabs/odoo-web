/* © 2016-TODAY LasLabs Inc.
 * License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).
 */

odoo.define('web_widget_fabricjs.fabric_widget', function(require){
  "use strict";
  
  var core = require('web.core');
  var common = require('web.form_common');
  var session = require('web.session');
  var utils = require('web.utils');
  var framework = require('web.framework');
  var crash_manager = require('web.crash_manager');
  
  var QWeb = core.qweb;
  var _t = core._t;
  
  var FieldDarkroomImage = common.AbstractField.extend(common.ReinitializeFieldMixin, {
    className: 'fabricjs-widget',
    template: 'FieldFabricJsImage',
    placeholder: "/web/static/src/img/placeholder.png",
    no_rerender: false,
    fabric: null,
    
    defaults: {
      
    },
    
    init: function(field_manager, node) {
      this._super(field_manager, node);
      this.options = _.defaults(this.options, this.defaults);
    },
    
    _init_fabric_icons: function() {
      
    },
    
    _init_fabric_plugins: function(){
      
    },

    _init_darkroom: function() {
      if (!this.fabric) {
        this._init_fabric_icons();
        this._init_fabric_ui();
        this._init_fabric_plugins();
      }
    },
    
    _init_fabric_ui: function() {
      
    },
    
    destroy_content: function() {
      if (this.fabric) {
        // Kill fabric
        this.fabric = null;
      }
    },
    
    set_value: function(value){
      this.destroy_content();
      return this._super(value);
    },
    
    render_value: function() {
      this._init_fabric();
      var url;
      if (this.get('value') && !utils.is_bin_size(this.get('value'))) {
        url = 'data:image/png;base64,' + this.get('value');
      } else if (this.get('value')) {
        var id = JSON.stringify(this.view.datarecord.id || null);
        var field = this.name;
        if (this.options.preview_image)
            field = this.options.preview_image;
        url = session.url('/web/image', {
          model: this.view.dataset.model,
          id: id,
          field: field,
          unique: (this.view.datarecord.__last_update || '').replace(/[^0-9]/g, ''),
        });
      } else {
        url = this.placeholder;
      }
      
      var $img = $(QWeb.render("FieldBinaryImage-img", { widget: this, url: url }));
      this.$el.find('> img').remove();
      this.$el.append($img);
      this.darkroom = new Darkroom($img.get(0), this.options);
      this.darkroom.widget = this;
    },
    
    commit_value: function(callback) {
      this.set_value(
        this.darkroom.sourceImage.toDataURL().split(',')[1]
      );
    },
    
  });
  
  core.form_widget_registry.add("darkroom", FieldDarkroomImage);
  
  return {
    FieldDarkroomImage: FieldDarkroomImage,
  }
  
});
