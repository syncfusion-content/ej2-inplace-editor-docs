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

This section briefly explains about how to create a simple In-place Editor using TypeScript and configure its properties using the Essential JS 2 [quickstart](https://github.com/syncfusion/ej2-quickstart.git) seed repository.

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

## Set up your development environment

* Clone the Essential JS 2 quickstart application project from [GitHub](https://github.com/syncfusion/ej2-quickstart) and install necessary npm packages using the following command.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

> By default, the project is configured with all the Essential JS 2 dependencies. For better understanding, remove all the dependencies from `src/system.config.js` to get started with the In-place Editor control.

* Refer to the [In-place Editor control dependencies](./getting-started#dependencies) in `system.config.js` configuration file.

`[src/system.config.js]`

```js
System.config({
    paths: {
        'syncfusion:': './node_modules/@syncfusion/',
    },
    map: {
        app: 'app',
        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-dropdowns": "syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js",
        "@syncfusion/ej2-calendars": "syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-richtexteditor": "syncfusion:ej2-richtexteditor/dist/ej2-richtexteditor.umd.min.js",
        "@syncfusion/ej2-inplace-editor": "syncfusion:ej2-inplace-editor/dist/ej2-inplace-editor.umd.min.js"
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');
```

* In-place Editor CSS files are available in the `ej2-inplace-editor` and its sub-control package folder. This can be referenced in your application using the following code.

`[src/styles/styles.css]`

```
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
```

* If you want to use the combined CSS files of entire controls, you can avail it from the root folder of Essential JS 2 package and reference it with the following code.

```
@import '../../node_modules/ej2/material.css';
```

## Add the In-place Editor with Textbox

By default, the Essential JS 2 TextBox control is rendered in In-place Editor with the [`type`](../api/inplace-editor/inputType/) property sets as Text.

* Add the HTML div tag with its ID attribute as `element` in your `index.html` file to initialize the In-place Editor.

`[src/index.html]`

```
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
    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />
    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>
<body>
    <div style="margin: 50px;">
        <!--element which is going to render-->
        <div id="element">
    </div>
</body>
</html>
```

* Import the In-place Editor control to your `app.ts` file and initialize it to the `#element` as shown as follows.

`[src/app/app.ts]`

```ts

import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';
let editObj: InPlaceEditor = new InPlaceEditor({
    type: 'Text',
    value: 'Andrew',
    model: {
        placeholder: 'Enter employee name'
    }
});
editObj.appendTo('#element');

```

> In the above sample code, `#element` is the `id` of the HTML element in a page to which the In-place Editor is initialized.

## Configuring DropDownList

You can render the Essential JS 2 DropDownList by changing the [`type`](../api/inplace-editor/inputType/) property as [`DropDownList`](../api/drop-down-list) and configure its properties and methods using the `model` property.

In the following sample, [`type`](../api/inplace-editor/inputType/) and model values are configured to render the [`DropDownList`](../api/drop-down-list) control.

`[src/app/app.ts]`

```ts

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

```

## Integrate DatePicker

You can render the Essential JS2 [DatePicker](../api/datepicker) by changing the [`type`](../api/inplace-editor/inputType/) property as [`Date`](../api/inplace-editor/inputType/)  and also configure its properties and methods using the [`model`](../api/inplace-editor/#model) property.

In the following sample, [`type`](../api/inplace-editor/inputType/) and [`model`](../api/inplace-editor/#model) values are configured to render the [DatePicker](../api/datepicker) control.

`[src/app/app.ts]`

```ts

import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';
let editObj: InPlaceEditor = new InPlaceEditor({
    type: 'Date',
    value: new Date('04/12/2018'),
    model: {
        showTodayButton: true
    }
});
editObj.appendTo('#element');

```

## Run the application

* Run the application in the browser using the following command.

```
npm start
```

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