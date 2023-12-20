

import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';

    let editObj: InPlaceEditor = new InPlaceEditor({
        mode: 'Inline',
        type: 'DropDownList',
        value: 'Maria Anders',
        model: {
            dataSource: new DataManager({
                url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
                adaptor: new ODataV4Adaptor,
                }),
            placeholder:"Select a customer",
            fields: { text: 'ContactName', value: 'CustomerID' }
        }
    });
    editObj.appendTo('#element');



