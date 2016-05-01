.. image:: https://img.shields.io/badge/license-AGPL--3-blue.svg
   :target: http://www.gnu.org/licenses/agpl-3.0-standalone.html
   :alt: License: AGPL-3

====================
Odoo FabricJS Widget
====================

This module provides a `FabricJS`_ web widget for use with image fields.

.. _FabricJS: http://fabricjs.com/

This widget will provide an editable canvas in Odoo backend, applied on any
One2many image field type.
 

Usage
=====

To use this module, you need to:

* Install web_widget_fabricjs
* Add the to any One2many image relation by using the `fabricjs` widget. Options can be passed through to FabricJS using the `options` key:

.. highlight:: html
<field name="image_id" widget="fabricjs"
                        options="{'minWidth': 100}" />
.. highlight:: none

The Odoo FabricJS widget passes options directly through to FabricJS, which are copied from the source below:

.. highlight:: javascript
  // Default options
  defaults: {
    // @TODO: Canvas options
  },
.. highlight:: none

An example implementation can be found [[https://repo.laslabs.com/projects/ODOO/repos/web/browse/web_widget_fabricjs_example|in the LasLabs repo]]
or [[https://github.com/laslabs/odoo-web/tree/release/9.0/web_widget_fabricjs_example|on our GitHub mirror]].


.. _Example: https://repo.laslabs.com/projects/ODOO/repos/web/browse/web_widget_fabricjs_example


Known Issues/Roadmap
====================

* Plugins are not able to be added without inheriting, then redefining the widget in the registry due to JS inheritance.
  ** This is not scalable because there would need to be an explicit dependency chain in order to avoid registry overwrite.


Credits
=======

Images
------

* LasLabs: `Icon <https://repo.laslabs.com/projects/TEM/repos/odoo-module_template/browse/module_name/static/description/icon.svg?raw>`_.

Contributors
------------

* Dave Lasley <dave@laslabs.com>

Maintainer
----------

.. image:: https://laslabs.com/logo.png
   :alt: LasLabs Inc.
   :target: https://laslabs.com

This module is maintained by LasLabs Inc.
