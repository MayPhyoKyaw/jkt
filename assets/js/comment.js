// handleblur
var form = document.getElementById("comment-form");
var mmform = document.getElementById("comment-form-mm");
var jpform = document.getElementById("comment-form-jp");
form && form.comment.addEventListener("blur", function (event) {
  event.preventDefault();
  validateField(this, 'eng');
});
mmform && mmform.comment.addEventListener("blur", function (event) {
  event.preventDefault();
  validateField(this, 'mm');
});
jpform && jpform.comment.addEventListener("blur", function (event) {
  event.preventDefault();
  validateField(this, 'jp');
});

function validateField(field, lang) {
  var isOk = false;
  if(lang === "mm") {
    if (field.value === "") {
      onInvalid(field, "ကျေးဇူးပြု၍ မှတ်ချက်ပေးပို့ရန် စာသားအချို့ ရိုက်ထည့်ပေးပါ။");
    } else {
      onValid(field);
      isOk = true;
    }
  }else if(lang === "jp") {
    if (field.value === "") {
      onInvalid(field, "送信するテキストを入力してください");
    } else {
      onValid(field);
      isOk = true;
    }
  } else {
    if (field.value === "") {
      onInvalid(field, "Please enter some text to send.");
    } else {
      onValid(field);
      isOk = true;
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

function validateCommentForJPSchool(form) {
  validateField(form.comment) &&
    gotoMail({
      subject: "Feedback for JKT Japanese School Services",
      comment: form.comment.value,
    });
}

// submitForm
function submitCommentForJPSchool(btn) {
    btn.preventDefault();
  form = btn.previousElementSibling;
  var values = {
    comment: form.comment.value,
  };
  validateCommentForJPSchool(form);
}

// reset form
function resetForm() {
  document.getElementById("comment-form").reset();
}

// go to mail
function gotoMail(values) {
  resetForm();
  window.open(
    `mailto:jkt.mm.int@gmail.com?subject=${values.subject}&body=${values.comment}`
  );
}
