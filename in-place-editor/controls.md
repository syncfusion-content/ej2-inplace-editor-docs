---
layout: post
title: Controls in ##Platform_Name## In place editor control | Syncfusion
description: Learn here all about Controls in Syncfusion ##Platform_Name## In place editor control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Controls 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Controls in ##Platform_Name## In place editor control

In-place Editor renders various controls based on the [type](../api/inplace-editor/inputType/) property and it have built-in and injectable controls. To use injectable controls, inject the required modules into `In-place Editor`. By default, the `type` property set to `Text` and render the `TextBox`.

The following table explains Injectable components module name and built-in components and their types.

| **Injectable Components** | **Built in Components** |
|-----------------------|---------------------|
| [AutoComplete](../auto-complete/)  (`AutoComplete`)        | [TextBox](../textbox/)  (`Text`)             |
| [ComboBox](../combo-box/)  (`ComboBox`)              | [DatePicker](../datepicker/)  (`Date`)        |
| [MultiSelect](../multi-select/)   (`MultiSelect`)        | [DateTimePicker](../datetimepicker/)   (`DateTime`)     |
| [TimePicker](../timepicker/)   (`Time`)         | [DropDownList](../drop-down-list/)  (`DropDownList`)      |
| [DateRangePicker](../daterangepicker/)   (`DateRange`)       | [MaskedTextBox](../maskedtextbox/)   (`Mask`)      |
| [Slider](../slider/)   (`Slider`)             | [NumericTextBox](../numerictextbox/)   (`Numeric`)    |
| [Rte](../rich-text-editor/)     (`RTE`)              |                     |
| [ColorPicker](../color-picker/)    (`Color`)       |                     |

In the following sample, built-in and injectable based In-place Editor controls are rendered.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/in-place-editor/controls-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/controls-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/controls-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/in-place-editor/controls-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/controls-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/in-place-editor/controls-cs1" %}
{% endif %}

## Model configuration

Control properties and events can be customized using the In-place Editor [model](../api/inplace-editor/#model) property.

In the following code, the [type](../api/inplace-editor/inputType/) defined as the `Date` and `DatePicker` properties are configured through [model](../api/inplace-editor/#model) property to customize the [DatePicker](../api/datepicker) control at In-place Editor.

```ts
    model: {
        showTodayButton: true,
        placeholder: 'Select Date'
    }
```

`[src/app/app.ts]`

```ts

import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';
let editObj: InPlaceEditor = new InPlaceEditor({
    type: 'Date',
    value: new Date('04/12/2018'),
    model: {
        showTodayButton: true,
        placeholder: 'Select Date'
    }
});
editObj.appendTo('#element');

```

## See Also

* [HTML5 components](./integration/)