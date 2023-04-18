

import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';

let editObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    type: 'DropDownList',
    value: 'Maria Anders',
    model: {
        dataSource: new DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
        }),
        placeholder:"Select a customer",
        query: new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6),
        fields: { text: 'ContactName', value: 'CustomerID' }
    }
});
editObj.appendTo('#element');


