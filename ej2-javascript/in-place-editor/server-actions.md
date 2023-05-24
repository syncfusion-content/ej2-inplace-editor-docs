---
layout: post
title: Server actions in ##Platform_Name## In place editor control | Syncfusion
description: Learn here all about Server actions in Syncfusion ##Platform_Name## In place editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Server actions 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Server actions in ##Platform_Name## In place editor control

By passing In-place Editor control value to the server, the [primaryKey](../api/inplace-editor/#primarykey) property value must require, otherwise action not performed for remote data.

If the [URL](../api/inplace-editor/#url) property value is empty, data passing will handled at local and also the [actionSuccess](../api/inplace-editor/#actionsuccess) event will trigger with `null` as argument value.

> The following arguments are passed to the server when submit actions perform.

| Arguments  | Explanations                                              |
|------------|-----------------------------------------------------------|
| value      | For processing edited value, like DB value updating.      |
| primaryKey | For value mapping to the server, like selecting DB.            |
| name       | For field mapping to the server, like DB column field mapping. |

Find the following sample server codes for defining models and controller functions to configure processing data.

```C#
    public class SubmitModel
        {
            public string Name { get; set; }
            public string PrimaryKey { get; set; }
            public string Value { get; set; }
        }
```

```C#

public IEnumerable<SubmitModel> UpdateData([FromBody]SubmitModel value)
        {
         // User can process data
          return value;
        }

```

* Server actions successfully done, the [actionSuccess](../api/inplace-editor/#actionsuccess) event will be fired with returned server data.

* If the server is not responding, the [actionFailure](../api/inplace-editor/#actionfailure) event will be fired with data, but value not updated in the Editor.

In the following sample, the `actionSuccess` event will trigger once the value submitted successfully into the server. In this sample, both `actionSuccess` and `actionFailure` were configured and resulted value will be converted to chips.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/in-place-editor/server-actions-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/server-actions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/server-actions-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/in-place-editor/server-actions-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/server-actions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/in-place-editor/server-actions-cs1" %}
{% endif %}

## See Also

* [Indicate the server actions in the editor](./how-to/custom-indication)