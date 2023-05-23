

import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';

let editObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    value: 'Andrew',
    enableRtl: true
});
editObj.appendTo('#element');


