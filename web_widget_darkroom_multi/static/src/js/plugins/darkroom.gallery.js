/* Adapted from https://github.com/MattKetmo/darkroomjs/tree/master/lib/js/plugins
 * License https://github.com/MattKetmo/darkroomjs/blob/master/LICENSE
 */

odoo.define('web_widget_darkroom.darkroom_gallery', function(require){

  'use strict';

  var DarkroomPluginGallery = function(){
    
    Darkroom.plugins['gallery'] = Darkroom.Plugin.extend({

      initialize: function InitDarkroomCropPlugin() {
        var buttonGroup = this.darkroom.toolbar.createButtonGroup();
    
        this.cropButton = buttonGroup.createButton({
          image: 'fa fa-crop',
          editOnly: true,
        });
        this.okButton = buttonGroup.createButton({
          image: 'fa fa-check',
          editOnly: true,
          type: 'success',
          hide: true
        });
        this.cancelButton = buttonGroup.createButton({
          image: 'fa fa-times',
          editOnly: true,
          type: 'danger',
          hide: true
        });
    
        // Buttons click
        this.cropButton.addEventListener('click', this.toggleCrop.bind(this));
        this.okButton.addEventListener('click', this.cropCurrentZone.bind(this));
        this.cancelButton.addEventListener('click', this.releaseFocus.bind(this));
    
        // Canvas events
        this.darkroom.canvas.on('mouse:down', this.onMouseDown.bind(this));
        this.darkroom.canvas.on('mouse:move', this.onMouseMove.bind(this));
        this.darkroom.canvas.on('mouse:up', this.onMouseUp.bind(this));
        this.darkroom.canvas.on('object:moving', this.onObjectMoving.bind(this));
        this.darkroom.canvas.on('object:scaling', this.onObjectScaling.bind(this));
    
        fabric.util.addListener(fabric.document, 'keydown', this.onKeyDown.bind(this));
        fabric.util.addListener(fabric.document, 'keyup', this.onKeyUp.bind(this));
    
        this.darkroom.addEventListener('core:transformation', this.releaseFocus.bind(this));
      },
    
    });
    
  }
  
  return {DarkroomPluginGallery: DarkroomPluginGallery};

});
