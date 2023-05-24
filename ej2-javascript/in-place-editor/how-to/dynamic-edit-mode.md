---
layout: post
title: Dynamic edit mode in ##Platform_Name## In place editor control | Syncfusion
description: Learn here all about Dynamic edit mode in Syncfusion ##Platform_Name## In place editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Dynamic edit mode 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Dynamic edit mode in ##Platform_Name## In place editor control

At control initial load, if you want to open editor state without interacting In-place Editor input element, it can be achieved by configuring the [enableEditMode](../../api/inplace-editor/#enableeditmode) property to `true`.

In the following sample, editor opened at initial load and when toggling a checkbox, it will remove or open the editor.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/in-place-editor/dynamic-edit-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/dynamic-edit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/dynamic-edit-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/in-place-editor/dynamic-edit-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/dynamic-edit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/in-place-editor/dynamic-edit-cs1" %}
{% endif %}