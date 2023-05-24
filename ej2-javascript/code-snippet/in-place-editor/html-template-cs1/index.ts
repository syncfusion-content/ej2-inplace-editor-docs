

import { InPlaceEditor, ActionBeginEventArgs } from '@syncfusion/ej2-inplace-editor';

let editObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    template: '#date',
    value: '2018-05-23',
    actionBegin: function(e: ActionBeginEventArgs): void {
        let value: string = (<HTMLInputElement>editObj.element.querySelector('#date')).value;
        editObj.value = value;
        e.value = value;
    }
});
editObj.appendTo('#element');


