

import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';
import { CheckBox, ChangeEventArgs } from '@syncfusion/ej2-buttons';

let CheckBoxObj: CheckBox = new CheckBox({ label: 'Disable', checked: false, change: onChange });
CheckBoxObj.appendTo('#enable');

let editObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    value: 'Andrew',
    model: {
        placeholder: 'Enter some text'
    }
});
editObj.appendTo('#element');

function onChange(e: ChangeEventArgs): void {
    editObj.disabled = e.checked;
    editObj.dataBind();
}


