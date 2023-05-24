


import {
  InPlaceEditor,
  ValidateEventArgs
} from "@syncfusion/ej2-inplace-editor";

let textObj: InPlaceEditor = new InPlaceEditor({
  mode: "Inline",
  type: "Numeric",
  name: "Number",
  model: {
    placeholder: "Select Number"
  },
  validationRules: {
    Number: { maxLength: 5 }
  }
});
textObj.appendTo("#numeric");



