// handleblur
var formEng = document.getElementById("contact-form");
var formMm = document.getElementById("contact-form-mm");
var formJp = document.getElementById("contact-form-jp");
formEng &&
  formEng.subject.addEventListener("blur", function (event) {
    validateField(this,'eng');
  });
formEng &&
  formEng.message.addEventListener("blur", function (event) {
    validateField(this,'eng');
  });
formMm &&
  formMm.subject.addEventListener("blur", function (event) {
    validateField(this,'mm');
  });
formMm &&
  formMm.message.addEventListener("blur", function (event) {
    validateField(this,'mm');
  });
formJp &&
  formJp.subject.addEventListener("blur", function (event) {
    validateField(this,'jp');
  });
formJp &&
  formJp.message.addEventListener("blur", function (event) {
    validateField(this,'jp');
  });

function validateField(field, lang) {
  var isOk = false;
  if (lang === "mm") {
    if (field.type === "text") {
      if (field.value.length < 3) {
        onInvalid(field, "ခေါင်းစဉ်အတွက် အနည်းဆုံး စာလုံး ၃ လုံး ရိုက်ထည့်ပေးပါ။");
      } else if (field.value.length > 60) {
        onInvalid(field, "ခေါင်းစဉ် သည် စားလုံးရေ ၆၀ ထက်မကျော်သင့်ပါ။");
      } else {
        onValid(field);
        isOk = true;
      }
    } else {
      if (field.value === "") {
        onInvalid(field, "ပို့ချင်သော စာ ကို ရိုက်ထည့်ပေးပါ။");
      } else {
        onValid(field);
        isOk = true;
      }
    }
  } else if (lang === "jp") {
    if (field.type === "text") {
      if (field.value.length < 3) {
        onInvalid(field, "件名には３文字以上必要です");
      } else if (field.value.length > 60) {
        onInvalid(field, "件名は最大60文字までです");
      } else {
        onValid(field);
        isOk = true;
      }
    } else {
      if (field.value === "") {
        onInvalid(field, "内容を入力してください");
      } else {
        onValid(field);
        isOk = true;
      }
    }
  } else {
    if (field.type === "text") {
      if (field.value.length < 3) {
        onInvalid(field, "Subject should contain at least 3 characters");
      } else if (field.value.length > 60) {
        onInvalid(field, "Subject should be at most 60 characters");
      } else {
        onValid(field);
        isOk = true;
      }
    } else {
      if (field.value === "") {
        onInvalid(field, "Please enter a message");
      } else {
        onValid(field);
        isOk = true;
      }
    }
  }

  return isOk;
}

function onInvalid(field, feedback) {
  field.style.border = "1px solid tomato";
  field.nextElementSibling.innerHTML = feedback;
  field.nextElementSibling.style.display = "block";
}

function onValid(field) {
  field.style.border = "1px solid rgb(61, 164, 233)";
  field.nextElementSibling.style.display = "none";
}

function validateAll(form) {
  validateField(form.subject) &&
    validateField(form.message) &&
    gotoMail({
      subject: form.subject.value,
      message: form.message.value,
    });
}

// function submit(e) {
//   e.preventDefault();
//   // console.log(e.form)
// }

// submitForm
function submitForm(btn) {
  var form = btn.previousElementSibling;
  var values = {
    subject: form.subject.value,
    message: form.message.value,
  };
  console.log(form);
  validateAll(form);
}
// reset form

function resetForm() {
  document.getElementById("contact-form").reset();
}

// go to mail
function gotoMail(values) {
  resetForm();
  window.open(
    `mailto:jkt.mm.int@gmail.com?subject=${values.subject}&body=${values.message}`
  );
}
