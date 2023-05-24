ej.base.enableRipple(true);

new ej.data.DataManager({
    url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Customers/',
    adaptor: new ej.data.WebApiAdaptor
}).executeQuery(new ej.data.Query().take(8)).then((e) => {
    //Initialize In-place Editor control
    var editObj = new ej.inplaceeditor.InPlaceEditor({
        mode: 'Inline',
        type: 'DropDownList',
        value: 'Maria Anders',
        model: {
            dataSource: e.result.d,
            placeholder:"Select a customer",
            fields: { text: 'ContactName', value: 'CustomerID' }
        }
    });

    //Render initialized In-place Editor control
    editObj.appendTo('#element');
});

