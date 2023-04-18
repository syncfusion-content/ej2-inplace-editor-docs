ej.base.enableRipple(true);

//Initialize In-place Editor control
var editObj = new ej.inplaceeditor.InPlaceEditor({
    mode: 'Inline',
    type: 'DropDownList',
    value: 'Maria Anders',
    model: {
        dataSource: new ej.data.DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
            adaptor: new ej.data.ODataV4Adaptor,
            crossDomain: true
        }),
        placeholder:"Select a customer",
        query: new ej.data.Query().from('Customers').select(['ContactName', 'CustomerID']).take(6),
        fields: { text: 'ContactName', value: 'CustomerID' }
    }
});

//Render initialized In-place Editor control
editObj.appendTo('#element');

