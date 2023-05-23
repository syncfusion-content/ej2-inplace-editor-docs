---
layout: post
title: Integration in ##Platform_Name## In place editor control | Syncfusion
description: Learn here all about Integration in Syncfusion ##Platform_Name## In place editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Integration 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Integration in ##Platform_Name## In place editor control

The In-place Editor supports adding HTML5 input controls using the [template](../api/inplace-editor/#template) property. The Template property can be given as either a `string` or a `query selector`.

## As a string

The HTML element tag can be given as a string for the template property. Here, the input is rendered as an HTML template.

```ts
template: "<div><input type='text' id='name'></input></div>"

```

## As a selector

The template property also allows getting template content through query `selector`. Here, the input wrapper element 'ID' attribute is specified in the template.

```ts
template: "#date"

```

Template mode, the `value` property not handled by the In-place Editor control. So, before sending a value to the server, you need to modify at [actionBegin](../api/inplace-editor/#actionbegin) event, otherwise, an empty string will pass. In the following template sample, before submitting a data to the server, event argument and [value](../api/inplace-editor/#value) property content updated in the `actionBegin` event handler.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/in-place-editor/html-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/html-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/html-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/in-place-editor/html-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/html-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/in-place-editor/html-template-cs1" %}
{% endif %}

## See Also

* [Built-in Controls](./controls/)