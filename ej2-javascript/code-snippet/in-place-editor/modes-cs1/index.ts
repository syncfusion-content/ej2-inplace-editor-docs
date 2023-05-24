

import { InPlaceEditor, RenderMode } from '@syncfusion/ej2-inplace-editor';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

let modeData: string[] = ['Inline', 'Popup'];

let modeObj: DropDownList = new DropDownList({
    dataSource: modeData,
    width: 'auto',
    change: onChange,
    value: 'Inline',
    placeholder: 'Select Mode'
});
modeObj.appendTo('#dropDown');

let editObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    value: 'Andrew',
    model: {
        placeholder: 'Enter some text'
    }
});
editObj.appendTo('#element');

function onChange(e: ChangeEventArgs): void {
    let mode: RenderMode = e.itemData.value as RenderMode;
    /* Switch into another mode */
    editObj.mode = mode;
    editObj.dataBind();
}


