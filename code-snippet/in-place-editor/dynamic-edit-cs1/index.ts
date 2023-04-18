

import { InPlaceEditor, ActionBlur } from '@syncfusion/ej2-inplace-editor';
import { CheckBox, ChangeEventArgs } from '@syncfusion/ej2-buttons';

let CheckBoxObj: CheckBox = new CheckBox({ label: 'Enable', checked: true, change: onChange });
CheckBoxObj.appendTo('#enable');

let editObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    value: 'Andrew',
    enableEditMode: true,
    actionOnBlur: 'Ignore'
    model: {
        placeholder: 'Enter some text'
    }
});
editObj.appendTo('#element');

function onChange(e: ChangeEventArgs): void {
    editObj.enableEditMode = e.checked;
    editObj.dataBind();
}


