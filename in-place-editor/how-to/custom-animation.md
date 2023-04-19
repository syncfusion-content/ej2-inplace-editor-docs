---
layout: post
title: Custom animation in ##Platform_Name## In place editor control | Syncfusion
description: Learn here all about Custom animation in Syncfusion ##Platform_Name## In place editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Custom animation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Custom animation in ##Platform_Name## In place editor control

In popup mode, the In-place Editor rendered with the Essential JS 2 `Tooltip` control. You can use tooltip properties and events to customize the popup by configure properties into the [model](../../api/inplace-editor/popupSettings/#model) property inside the [popupSettings](../../api/inplace-editor/popupSettings/) API.

In the following sample, popup animation can be customized by passing animation effect using the `model` property and the dynamic animation effect changes configured from the Essential JS 2 `DropDownList` control `change` event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/in-place-editor/custom-animation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/custom-animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/custom-animation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/in-place-editor/custom-animation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/custom-animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/in-place-editor/custom-animation-cs1" %}
{% endif %}