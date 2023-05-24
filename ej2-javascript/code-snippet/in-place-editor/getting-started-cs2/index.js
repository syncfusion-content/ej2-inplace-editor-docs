ej.inplaceeditor.InPlaceEditor.Inject(ej.inplaceeditor.MultiSelect);
var serviceUrl = 'https://ej2services.syncfusion.com/development/web-services/api/Editor/UpdateData';
var frameWorkList = ['Andrew Fuller', 'Janet Leverling', 'Laura Callahan', 'Margaret Hamilt', 'Michael Suyama', 'Nancy Davloio', 'Robert King'];
var newEle = document.getElementById('newValue');
var oldEle = document.getElementById('oldValue');
var editObj = new ej.inplaceeditor.InPlaceEditor({
    mode: 'Inline',
    type: 'DropDownList',
    value: 'Andrew Fuller',
    name: 'Employee',
    url: serviceUrl,
    primaryKey: "Employee",
    adaptor: 'UrlAdaptor',
    actionSuccess: function (e) {
        oldEle.textContent = newEle.textContent;
        newEle.textContent = e.value;
    },
    model: {
        dataSource: frameWorkList,
        popupHeight: '200px',
        placeholder: 'Select employee'
    }
});
editObj.appendTo('#element');

