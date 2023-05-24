ej.base.enableRipple(true);

var editObj = new ej.inplaceeditor.InPlaceEditor({
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
editObj.appendTo("#numeric");


