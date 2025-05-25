/*! Mikeotizels Sharer JS v2.0.0 | Copyright 2022-2024 Michael Otieno | Licensed under MIT */

(function($, window, document, undefined) {
    "use strict";

    $(document).ready(function() {
        /**
         * --------------------------------------------------------------------
         * Share API
         * 
         * Handles sharing data such as text and links to an arbitrary share 
         * target selected by the user. The currently supported share channels 
         * include email, WhatsApp and social media platforms like Facebook,
         * X (Twitter), LinkedIn, Reddit, and Pinterest. 
         * 
         * DATA-API:
         * 
         *  - data-toggle="share"
         *  - data-channel="mail|whatsapp|facebook|x|twitter|linkedin|reddit|pinterest"
         *  - data-url
         *  - data-title
         *  - data-text   
         *  - data-subject (for mail only)
         *  - data-body (for mail only)
         *  
         * --------------------------------------------------------------------
         * 
         * @since 2.0.0 (2024-12-10)
         */
        var share = function() {
            var toggler = $('[data-toggle="share"]'),
                endpoint;

            if (!toggler.length) {
                return;
            }

            toggler.click(function(event) { 
                event.preventDefault();

                // TODO: Consider alternative invocation for Clipboard API
                //       Currently, default setup is to include the core
                //       clipboard.js and the mo.clipboard.min.js on the 
                //       page to enable invoking the Clipboard API.
                //

                // TODO: Consider alternative invocation for Native Web Share  
                //       API. Currently, default setup is to include the  
                //       mo.webshare.min.js on the page to enable invoking 
                //       the Native Web Share API.

                var target  = $(this),
                    channel = target.data('channel');

                if (!channel.length) {
                    console.error('Share API could not be executed. The channel is undefined in the current target:', target);
                    return;
                }

                // TODO: Check optional attributes to avoid errors
                var url     = target.data('url'),
                    title   = target.data('title'),
                    text    = target.data('text'),
                    subject = target.data('subject'),
                    body    = target.data('body');

                switch (channel) {
                    case 'mail':
                        endpoint = 'mailto:?subject=' + subject + '&body=' + body;
                        break;

                    case 'whatsapp':
                        endpoint = 'https://api.whatsapp.com/send?text=' + text;
                        break;

                    case 'facebook':
                        endpoint = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
                        break;

                    case 'x':       // new Twitter 
                    case 'twitter': // old Twitter
                        endpoint = 'https://www.x.com/intent/tweet?text=' + title + '&url=' + url;
                        break;

                    case 'linkedin':
                        endpoint = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
                        break;

                    case 'reddit':
                        endpoint = 'https://www.reddit.com/submit?url=' + url + '&title=' + title;
                        break;

                    case 'pinterest':
                        endpoint = 'https://www.pinterest.com/pin/create/button/?url=' + url;
                        break;

                    default:
                        console.error('Share API could not be executed. Unsupported channel:', channel);
                        return;
                }

                openPopup(endpoint);
            });

            /**
             * Opens a minimal popup window at the center of the screen.
             * 
             * @since 2.0.0 (2024-12-10)
             */
            var openPopup = function(url) {
                var screenWidth    = screen.width,
                    screenHeight   = screen.height,
                    windowWidth    = window.width  || window.innerWidth  || document.documentElement.clientWidth  || document.body.clientWidth,
                    windowHeight   = window.height || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                    width          = windowWidth / 2,
                    height         = windowHeight / 2,
                    top            = (screenHeight - height) / 2,
                    left           = (screenWidth  - width)  / 2,
                    windowFeatures = 'popup=true,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;

                window.open(url, '', windowFeatures);
            }
        }();
    });

})(jQuery, window, document);