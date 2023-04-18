


import { InPlaceEditor, ActionEventArgs, MultiSelect } from '@syncfusion/ej2-inplace-editor';
InPlaceEditor.Inject(MultiSelect);
let serviceUrl: string = 'https://ej2services.syncfusion.com/development/web-services/api/Editor/UpdateData';
let frameWorkList: string[] = ['Andrew Fuller', 'Janet Leverling', 'Laura Callahan', 'Margaret Hamilt', 'Michael Suyama', 'Nancy Davloio', 'Robert King'];
let newEle: HTMLElement = document.getElementById('newValue');
let oldEle: HTMLElement = document.getElementById('oldValue');
let editObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    type: 'DropDownList',
    value: 'Andrew Fuller',
    name: 'Employee',
    url: serviceUrl,
    primaryKey: "Employee",
    adaptor: 'UrlAdaptor',
    actionSuccess: function(e) {
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



