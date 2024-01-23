document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('form'); // الحصول على النموذج
  const zipInput = document.querySelector('input[name="Zip"]'); // الحصول على حقل الزيب كود
  const countrySelect = document.getElementById('select'); // الحصول على الـ select box

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // منع الإرسال الافتراضي

    const zipCode = zipInput.value; // قيمة الزيب كود
    const selectedCountry = countrySelect.options[countrySelect.selectedIndex].text; // الدولة المختارة

    // دالة للتحقق من الزيب كود (يجب أن تكتب الدالة المناسبة)
    if (verifyZipCode(zipCode, selectedCountry)) {
      // إذا كان الزيب كود صحيح
      // يمكنك هنا إرسال النموذج أو القيام بالعمل المطلوب
      form.submit();
    } else {
      // إذا كان الزيب كود غير صحيح
      // يمكنك عرض رسالة خطأ
      alert('الزيب كود غير صحيح للدولة المختارة.');
    }
  });
});

// دالة للتحقق من الزيب كود
function verifyZipCode(zipCode, country) {
  // هنا يجب عليك تعريف القواعد أو استخدام API للتحقق من صحة الزيب كود
  // الكود التالي هو مثال وهمي ويجب أن تقوم بتعديله حسب الحاجة
  const zipRules = {
    'KSA': /^[0-9]{5}$/, // مثال على قاعدة للسعودية: 5 أرقام
    'OMAN': /^[0-9]{3}$/, // مثال على قاعدة لعمان: 3 أرقام
    'UK': /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/ // مثال على قاعدة للمملكة المتحدة
  };

  if (zipRules[country] && zipRules[country].test(zipCode)) {
    return true;
  } else {
    return false;
  }
}
