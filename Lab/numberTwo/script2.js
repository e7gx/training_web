// //! تعريف متغيرات الحقول الي موجود عندي في ملف ال html
// const form = document.getElementById("form");
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// // const select = document.getElementById("select");
// // const Zip = document.getElementById("Zip");

// //! الزر اذا ضغط يشيك على اليثودز وملحقاتها ليتاكد من صحت النص المقدم وايضا ان الحقول ممتلئه
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   validateInputs();
// });

// //! ميثود خاصة برفض الحقل
// const setError = (element, message) => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector(".error");

//   errorDisplay.innerText = message;
//   inputControl.classList.add("error");
//   inputControl.classList.remove("success");
// };
// //!ميثود الخاصة بقبول الحقل
// const setSuccess = (element) => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector(".error");

//   errorDisplay.innerText = "";
//   inputControl.classList.add("success");
//   inputControl.classList.remove("error");
// };
// //! التحقق من الايميل و صحته من ناحية النصوص والعلامات
// const isValidEmail = (email) => {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// };

// //! التعامل مع النصوص بالشروط طبعا ميثود كامله خاصة بهذه الخاصية
// const validateInputs = () => {
//   const usernameValue = username.value.trim();
//   const emailValue = email.value.trim();
// //   const selectValue = select.value.trim();
// //   const Zip2Value = Zip.value.trim();

//   if (usernameValue === "") {
//     setError(username, "اسم المستخدم حقل  مطلوب");
//   } else {
//     setSuccess(username);
//   }

//   if (emailValue === "") {
//     setError(email, "");
//   } else if (!isValidEmail(emailValue)) {
//     setError(email, "ادخل حساب ايميل صحيح");
//   } else {
//     setSuccess(email);
//   }

// //   if (selectValue === "") {
// //     setError(select, "كامة السر حقل الزامي");
// //   } else if (select.length < 5) {
// //     setError(select, "ضع رمز مكون من خمسة خانات");
// //   } else {
// //     setSuccess(select);
// //   }

// //   if (Zip2Value === " ") {
// //     setError(Zip, "قم بتاكيد كلمة المرور ");
// //   } else if (Zip2Value !== passwordValue) {
// //     setError(Zip, "كلمة المرور لاتطابق ماسبق");
// //   } else {
// //     setSuccess(password2);
// //   }
// };
