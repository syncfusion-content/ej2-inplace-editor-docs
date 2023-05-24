

import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

let positionData: string[] = ['TopLeft', 'TopCenter', 'TopRight', 'BottomLeft', 'BottomCenter', 'BottomRight', 'LeftTop', 'LeftCenter', 'LeftBottom', 'RightTop', 'RightCenter', 'RightBottom'];

let dropDownObj: DropDownList = new DropDownList({
    value: 'BottomCenter',
    dataSource: positionData,
    placeholder: 'Select a position',
    popupHeight: '150px',
    change: function(e: ChangeEventArgs): void {
        editObj.popupSettings.model.position = e.value;
        editObj.dataBind();
    }
});
dropDownObj.appendTo('#dropDown');

let editObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Popup',
    value: 'Andrew',
    model: {
        placeholder: 'Enter some text'
    },
    popupSettings: {
        title: 'Enter name',
        model: {
            position: 'BottomCenter'
        }
    }
});
editObj.appendTo('#element');


