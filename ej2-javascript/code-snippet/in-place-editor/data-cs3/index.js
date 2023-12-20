ej.base.enableRipple(true);


    //Initialize In-place Editor control
    var editObj = new ej.inplaceeditor.InPlaceEditor({
        mode: 'Inline',
        type: 'DropDownList',
        value: 'Maria Anders',
        model: {
            dataSource: new ej.data.DataManager({
                url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
                adaptor: new ej.data.ODataV4Adaptor,
                }),
            placeholder:"Select a customer",
            fields: { text: 'ContactName', value: 'CustomerID' }
        }
    });

    //Render initialized In-place Editor control
    editObj.appendTo('#element');

