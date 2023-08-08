---
layout: post
title: Buttons in ##Platform_Name## In place editor control | Syncfusion
description: Learn here all about Buttons in Syncfusion ##Platform_Name## In place editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Buttons 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Buttons in ##Platform_Name## In place editor control

The In-place Editor had an action for save and cancel using buttons. The [saveButton](../api/inplace-editor/#savebutton) and [cancelButton](../api/inplace-editor/#cancelbutton) properties accept the [ButtonModel](../api/button/buttonModel/) objects for customizing the save and cancel button properties.

Buttons can be show or hide by sets a Boolean value to the [showButtons](../api/inplace-editor/#showbuttons) property.

> Without buttons value will be processed via the following ways.

* **[actionOnBlur](../api/inplace-editor/#actiononblur)**: By clicking out side the editor control get focus out and do action based on this property value.
* **[submitOnEnter](../api/inplace-editor/#submitonenter)**: Pressing `Enter` key it performs the submit action, if this property set to `true`.

In the following sample, the [content](../api/button/#content) and [cssClass](../api/button/#cssclass) properties of `Button` value assigned to the [saveButton](../api/inplace-editor/#savebutton) and [cancelButton](../api/inplace-editor/#cancelbutton) properties to customize its appearance. Also check or uncheck a checkbox buttons render or removed from the editor.

To restrict either save or cancel button rendering into a DOM, simply pass empty object `{}` in the  `saveButton` or `cancelButton` properties.

> For more details about buttons, refer this documentation [section](../button/).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/in-place-editor/show-buttons-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/show-buttons-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/show-buttons-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/in-place-editor/show-buttons-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/show-buttons-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/in-place-editor/show-buttons-cs1" %}
{% endif %}

## See Also

* [In-place Editor buttons](./how-to/dynamic-edit-mode)