

import { DataManager, WebApiAdaptor, Query } from '@syncfusion/ej2-data';
import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';

new DataManager({
    url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Customers/',
    adaptor: new WebApiAdaptor
}).executeQuery(new Query().take(8)).then((e: any) => {
    let editObj: InPlaceEditor = new InPlaceEditor({
        mode: 'Inline',
        type: 'DropDownList',
        value: 'Maria Anders',
        model: {
            dataSource: e.result.d,
            placeholder:"Select a customer",
            fields: { text: 'ContactName', value: 'CustomerID' }
        }
    });
    editObj.appendTo('#element');
});


