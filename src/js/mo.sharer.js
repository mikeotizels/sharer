/*! Mikeotizels Sharer JS v1.0.0 | Copyright 2022 Michael Otieno | Licensed under MIT */

(function($) {
    "use strict";

    $(document).ready(function() {
        /**
         * --------------------------------------------------------------------
         * Clipboard JS Setup
         * --------------------------------------------------------------------
         * 
         * Handles copying text to clipboard.
         * 
         * DATA-API:
         * 
         *  - {string} data-toggle="clipboard" 
         *  - {string} data-clipboard-action="copy|cut"
         *  - {string} data-clipboard-text="TEXT_CONTENT" OR data-clipboard-target="#ELEMENT_ID"  
         *
         * @since    1.0.0 
         * @requires clipboard.js (v2.0.11)
         */
        var clipboardSetup = function() {
            // Instantiate object
            var clipboard = new ClipboardJS('[data-toggle="clipboard"', {
                container: document.querySelector('.modal')
            });
            
            // Success event
            clipboard.on('success', function(e) {
                e.clearSelection();
                showTooltip();
            });
            
            // Error event
            clipboard.on('error', function (e) {
                console.error('Failed to copy content to clipboard.');
            });
            
            // ClipboardJS does not include any CSS or built-in tooltip 
            // solution, that's why we need a custom implementation.
            var showTooltip = function() {
                var tooltip = document.createElement('div');
                tooltip.setAttribute('style', 'position:fixed;top:100px;left:50%;z-index:9999;width:225px;text-align:center;color:#ffffff;background-color:#343a40;border:1px solid #1d2124;padding:10px 15px;border-radius:4px;margin-left:-100px;box-shadow:0 0 10px rgba(0,0,0,0.2);');
                tooltip.appendChild(document.createTextNode('Copied to clipboard'));
                document.body.appendChild(tooltip);
                setTimeout(function() {
                    document.body.removeChild(tooltip);
                }, 2500);
            }
        }();

        // TODO: Write code to handle opening pop-ups for social share options
    });

}(jQuery));