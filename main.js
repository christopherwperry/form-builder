// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------
let fieldContent = document.getElementById('fields');

for (let i = 0; i < 4; i++) {
  let inputs = document.createElement("input");
  inputs.setAttribute("type", formData[i].type);
  inputs.setAttribute("id", formData[i].id);
  inputs.setAttribute("placeholder", formData[i].label);
  inputs.setAttribute("icon", formData[i].icon);
  fieldContent.appendChild(inputs);
}

for (let i = 4; i < 5; i++) {
  let selects = document.createElement("select");
  let selectsText = document.createTextNode(formData[i].label)
  selects.setAttribute("type", formData[i].type);
  selects.setAttribute("id", formData[i].id);
  selects.setAttribute("name", formData[i].label);
  selects.setAttribute("icon", formData[i].icon);
  selects.appendChild(selectsText)
  fieldContent.appendChild(selects);
}

for (let i = 5; i < 6; i++) {
  let textAreas = document.createElement("textarea");
  textAreas.setAttribute("type", formData[i].type);
  textAreas.setAttribute("id", formData[i].id);
  textAreas.setAttribute("placeholder", formData[i].label);
  textAreas.setAttribute("icon", formData[i].icon);
  fieldContent.appendChild(textAreas);
}

for (let i = 6; i < formData.length; i++) {
  let inputs = document.createElement("input");
  inputs.setAttribute("type", formData[i].type);
  inputs.setAttribute("id", formData[i].id);
  inputs.setAttribute("placeholder", formData[i].label);
  inputs.setAttribute("icon", formData[i].icon);
  fieldContent.appendChild(inputs);
}

let selectGrab = document.getElementById('user-language');
let firstOption = document.createElement("option");
let firstOptionText = document.createTextNode("Select language...");
firstOption.appendChild(firstOptionText);
selectGrab.appendChild(firstOption);

for (let j = 0; j < formData[4].options.length; j++){
  let optionsObj = document.createElement("option");
  let optionsText = document.createTextNode(formData[4].options[j].label);
  optionsObj.setAttribute("value",formData[4].options[j].value);
  optionsObj.appendChild(optionsText);
  selectGrab.appendChild(optionsObj);
}
