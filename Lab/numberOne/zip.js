document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('form'); 
  const zipInput = document.querySelector('input[name="Zip"]'); 
  const countrySelect = document.getElementById('select'); 

  form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const zipCode = zipInput.value; // قيمة الزيب كود
    const selectedCountry = countrySelect.options[countrySelect.selectedIndex].text; // الدولة المختارة

    if (verifyZipCode(zipCode, selectedCountry)) {
      form.submit();
    } else {
 
      alert('الزيب كود غير صحيح للدولة المختارة.');
    }
  });
});

// دالة للتحقق من الزيب كود
function verifyZipCode(zipCode, country) {

  const zipRules = {
    'KSA': /^[0-9]{5}$/, 
    'OMAN': /^[0-9]{3}$/, 
    'UK': /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/ 
  };

  if (zipRules[country] && zipRules[country].test(zipCode)) {
    return true;
  } else {
    return false;
  }
}
