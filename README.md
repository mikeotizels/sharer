Mikeotizels Sharer Widget
=========================

Version 2.0.0 - December 2024

## Overview

The Sharer widget enables website visitors to share a web page with others. 
They can copy the link to clipboard, or directly share it via email, WhatsApp, 
or social media platforms like Facebook, X (Twitter), LinkedIn, and others.

## Features

- Customized share modal dialog with a range of sharing options.
- Native Web Share API support.

## Share Options

- Clipboard (Copy Link)
- Mail      
- WhatsApp  
- Facebook
- X|Twitter 
- LinkedIn
- Reddit 
- Pinterest
- WebShare  (More Options) 

## Data API

### Options

Below are the required options and their default values.

 - url   = PAGE_URL
 - title = PAGE_TITLE
 - text  = Hi, please check out this link: {url}

The PAGE_URL and PAGE_TITLE defaults to the URL and title of the current page
respectively, if not defined in the respective data attributes.

### Attributes

#### Clipboard

```html
data-toggle="clipboard" 
data-clipboard-action="copy"
data-clipboard-text="{url}"
``` 

#### Mail     

```html
data-toggle="share"
data-channel="mail"
data-subject="{title}"
data-body="{text}"
```

#### WhatsApp  

```html
data-toggle="share"
data-channel="whatsapp"
data-text="{text}"
```

#### Facebook  

```html
data-toggle="share"
data-channel="facebook"
data-url="{url}"
```

#### X (Twitter)   

```html
data-toggle="share"
data-channel="x|twitter"
data-url="{url}"
data-text="{text}"
```

#### LinkedIn  

```html
data-toggle="share"
data-channel="linkedin"
data-url="{url}"
data-title="{title}"
```

#### Reddit 

```html
data-toggle="share"
data-channel="reddit"
data-url="{url}"
data-title="{title}"
```

#### Pinterest 

```html
data-toggle="share"
data-channel="pinterest"
data-url="{url}"
```

### WebShare

```html
data-toggle="webshare" 
data-url="{url}" 
data-title="{title}" 
data-text="{text}"
```