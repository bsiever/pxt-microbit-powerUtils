# Power Utilities

```package
pins=github:bsiever/microbit-pxt-powerUtils
```

This extension can be used to detect the source of power (battery vs. USB)

**Micro:bit v2 only!!!**

# USB Power Supply

```sig
powerUtils.usbPower() : boolean
```

True if USB power is available.  False otherwise (only battery power).

# Power Consumption

```sig
powerUtils.powerConsumption() : number
```

Estimated instantaneous power consumption

# Acknowledgements 

Icon based on [Font Awesome icon 0xF1E6](https://fontawesome.com/v4/icon/plug) SVG.

<script src="https://makecode.com/gh-pages-embed.js"></script>
<script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
