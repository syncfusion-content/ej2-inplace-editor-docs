


import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';

let editObj: InPlaceEditor = new InPlaceEditor({
    type: 'Date',
    value: new Date('11/23/2018'),
    model: {
        placeholder: 'Select date',
        format: 'yyyy-MM-dd'
    }
});
editObj.appendTo('#element');


