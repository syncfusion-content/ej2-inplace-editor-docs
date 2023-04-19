


import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

var openAnimateData = ['None', 'FadeIn', 'FadeZoomIn', 'ZoomIn'];

let openDropObj: DropDownList = new DropDownList({
    value: 'ZoomIn',
    dataSource: openAnimateData,
    placeholder: 'Select a animate type',
    popupHeight: '150px',
    change: function(e: ChangeEventArgs): void {
        editObj.popupSettings.model.animation.open.effect = e.value;
        editObj.dataBind();
    }
});
openDropObj.appendTo('#openDropDown');

let editObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Popup',
    value: 'Andrew',
    model: {
        placeholder: 'Enter some text'
    },
    popupSettings: {
        model: {
            animation: {
                open: { effect: 'ZoomIn', duration: 1000, delay: 0 }
            }
        }
    }
});
editObj.appendTo('#element');



