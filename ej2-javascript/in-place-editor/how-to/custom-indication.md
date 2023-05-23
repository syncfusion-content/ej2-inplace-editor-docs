---
layout: post
title: Custom indication in ##Platform_Name## In place editor control | Syncfusion
description: Learn here all about Custom indication in Syncfusion ##Platform_Name## In place editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Custom indication 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Custom indication in ##Platform_Name## In place editor control

You can add custom indication to unsaved input value by using the [actionSuccess](../../api/inplace-editor/#actionsuccess) event, when data not submitted to the server.

In this sample, the `actionSuccess` event configured and the [URL](../../api/inplace-editor/#url) property not included. Then submit button clicked, the current editor value saved into input and data sending to server action prevented due to the `URL` property not configured.

But `actionSuccess` event will trigger the handler function with `null` argument values. In handler function data property [primaryKey](../../api/inplace-editor/#primarykey) value checked, whether it empty or not. If it is empty custom class, added in the `e-value-wrapper` element to customize its styles.

> To send input value to local, set the `URL` property as empty.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/in-place-editor/custom-indication-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/custom-indication-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/custom-indication-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/in-place-editor/custom-indication-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/custom-indication-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/in-place-editor/custom-indication-cs1" %}
{% endif %}