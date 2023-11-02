---
layout: post
title: Getting started with ##Platform_Name## In place editor control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## In place editor control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## In place editor control

This section briefly explains about how to create a simple In-place Editor using TypeScript and configure its properties using the Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following is the list of dependencies required to use the In-place Editor control in your application.

```js
|-- @syncfusion/ej2-inplace-editor
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-richtexteditor
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion CSS styles

In-place Editor CSS files are available in the ej2-inplace-editor and its sub-control package folder. This can be referenced in the `~/src/styles/styles.css` file of your application using the following code.

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inplace-editor/styles/material.css';

{% endhighlight %}
{% endtabs %}

* If you want to use the combined CSS files of entire controls, you can avail it from the root folder of Essential JS 2 package and reference it with the following code.

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2/material.css';

{% endhighlight %}
{% endtabs %}

## Add the In-place Editor with Textbox

By default, the Essential JS 2 TextBox control is rendered in In-place Editor with the [`type`](../api/inplace-editor/inputType/) property sets as Text.

* Add the HTML div tag with its ID attribute as `element` in your `index.html` file to initialize the In-place Editor.

`[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2 In-place Editor</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
    <div style="margin: 50px;">
        <!--element which is going to render-->
        <div id="element">
    </div>
</body>
</html>

{% endhighlight %}
{% endtabs %}

* Import the In-place Editor control to your `app.ts` file and initialize it to the `#element` as shown as follows.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';
let editObj: InPlaceEditor = new InPlaceEditor({
    type: 'Text',
    value: 'Andrew',
    model: {
        placeholder: 'Enter employee name'
    }
});
editObj.appendTo('#element');

{% endhighlight %}
{% endtabs %}

> In the above sample code, `#element` is the `id` of the HTML element in a page to which the In-place Editor is initialized.

## Configuring DropDownList

You can render the Essential JS 2 DropDownList by changing the [`type`](../api/inplace-editor/inputType/) property as [`DropDownList`](../api/drop-down-list) and configure its properties and methods using the `model` property.

In the following sample, [`type`](../api/inplace-editor/inputType/) and model values are configured to render the [`DropDownList`](../api/drop-down-list) control.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';
let genderData = ['Male', 'Female']
let editObj: InPlaceEditor = new InPlaceEditor({
    type: 'DropDownList',
    mode: 'Inline',
    model: {
        dataSource: genderData,
        placeholder: 'Select gender'
    }
});
editObj.appendTo('#element');

{% endhighlight %}
{% endtabs %}

## Integrate DatePicker

You can render the Essential JS2 [DatePicker](../api/datepicker) by changing the [`type`](../api/inplace-editor/inputType/) property as [`Date`](../api/inplace-editor/inputType/)  and also configure its properties and methods using the [`model`](../api/inplace-editor/#model) property.

In the following sample, [`type`](../api/inplace-editor/inputType/) and [`model`](../api/inplace-editor/#model) values are configured to render the [DatePicker](../api/datepicker) control.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';
let editObj: InPlaceEditor = new InPlaceEditor({
    type: 'Date',
    value: new Date('04/12/2018'),
    model: {
        showTodayButton: true
    }
});
editObj.appendTo('#element');

{% endhighlight %}
{% endtabs %}

## Run the application

* Run the application in the browser using the following command.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/in-place-editor/getting-started-form-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/getting-started-form-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-form-cs2" %}

## Submitting data to the server (save)

You can submit editor value to the server by configuring the [`url`](../api/inplace-editor/#url), [`adaptor`](../api/inplace-editor/adaptorType/) and [`primaryKey`](../api/inplace-editor/#primarykey) property.

| Property   | Usage                                           |
|------------|---------------------------------------------------------|
| **`url`**        | Gets the URL for server submit action.        |
| **`adaptor`**    | Specifies the adaptor type that is used by DataManager to communicate with DataSource.                |
| **`primaryKey`** | Defines the unique primary key of the editable field which can be used for saving data in the data-base.|

> The [`primaryKey`](../api/inplace-editor/#primarykey) property is mandatory. If it's not set, edited data are not sent to the server.

## Refresh with modified value

The edited data is submitted to the server and you can see the new values getting reflected in the In-place Editor.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/in-place-editor/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/in-place-editor/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs2" %}

## See Also

* [Types of rendering the editor](./integration/)