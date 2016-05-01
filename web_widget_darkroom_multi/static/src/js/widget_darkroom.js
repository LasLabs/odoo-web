/* © 2016-TODAY LasLabs Inc.
 * License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).
 */

odoo.define('web_widget_darkroom_multi.darkroom_widget', function(require){
  "use strict";
  
  var FieldDarkroomImage = require('web_widget_darkroom.darkroom_widget').FieldDarkroomImage
  var core = require('web.core');
  
  var FieldDarkroomImageMulti = FieldDarkroomImage.extend({
    
    _init_darkroom_plugins: function(){
      this._super();
      require('web_widget_darkroom.darkroom_gallery').DarkroomPluginGallery();
    },

    render_value: function() {
      this._super();
      
    }
  });
  
  core.form_widget_registry.add("many2many_darkroom", FieldDarkroomImageMulti);
  
  return {
    FieldDarkroomImageMulti: FieldDarkroomImageMulti,
  }
  
});
