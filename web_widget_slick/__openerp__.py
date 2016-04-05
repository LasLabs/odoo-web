# -*- coding: utf-8 -*-
# © 2016-TODAY LasLabs Inc.
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).

{
    "name": "Web Slick Widget",
    "summary": "Adds Slick JavaScript slider widget",
    "version": "9.0.1.0.0",
    "category": "Web",
    "website": "https://laslabs.com/",
    "author": "LasLabs",
    "license": "AGPL-3",
    "application": False,
    "installable": True,
    "depends": [
        "web",
    ],
    "data": [
        'views/assets.xml',
    ],
    'qweb': [
        "static/src/xml/*.xml",
    ],
}
