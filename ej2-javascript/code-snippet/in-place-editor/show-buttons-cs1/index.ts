

import { InPlaceEditor, ActionBlur } from '@syncfusion/ej2-inplace-editor';
import { CheckBox, ChangeEventArgs } from '@syncfusion/ej2-buttons';

let CheckBoxObj: CheckBox = new CheckBox({ label: 'Show', checked: true, change: onChange });
CheckBoxObj.appendTo('#enableBtn');

let editObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    value: 'Andrew',
    model: {
        placeholder: 'Enter some text'
    },
    saveButton: {
        content: 'Ok',
        cssClass: 'e-outline'
    },
    cancelButton: {
        content: 'Cancel',
        cssClass: 'e-outline'
    }
});
editObj.appendTo('#element');

function onChange(e: ChangeEventArgs): void {
    editObj.showButtons = e.checked;
    editObj.dataBind();
}


