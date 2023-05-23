

import { isNullOrUndefined as isNOU } from '@syncfusion/ej2-base';
import { InPlaceEditor, ActionEventArgs } from '@syncfusion/ej2-inplace-editor';

let editObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    value: 'Andrew',
    model: {
        placeholder: 'Enter some text'
    },
    actionSuccess: function(e: ActionEventArgs): void {
        let pk: string = e.data['PrimaryKey'];
        if (isNOU(pk) || pk === '') {
            document.querySelector('.e-editable-value').classList.add('e-send-error');
        }
    }
});
editObj.appendTo('#element');


