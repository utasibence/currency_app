const EUR_input = document.getElementById('EUR_input');
const action_button = document.getElementById('action_button');
const output = document.querySelector('.output');
const HUF_output = document.getElementById('HUF_output');
const USD_output = document.getElementById('USD_output');
const GBP_output = document.getElementById('GBP_output');
const RSD_output = document.getElementById('RSD_output');
const RON_output = document.getElementById('RON_output');
const HRK_output = document.getElementById('HRK_output');
const CZK_output = document.getElementById('CZK_output');
const UAH_output = document.getElementById('UAH_output');
const DKK_output = document.getElementById('DKK_output');
const CHF_output = document.getElementById('CHF_output');
var HUF = 0;
var USD = 0;
var GBP = 0;
var RSD = 0;
var RON = 0;
var HRK = 0;
var CZK = 0;
var UAH = 0;
var DKK = 0;
var CHF = 0;

function get() {
  axios.get('http://data.fixer.io/api/latest?access_key=30362c9a9349f4b1be5ee8c1e179a398&symbols=HUF,RSD,RON,HRK,CZK,UAH,USD,GBP,DKK,CHF')
    .then(function(response) {
      console.log(response.data.rates);
      HUF = parseFloat(response.data.rates.HUF);
      USD = parseFloat(response.data.rates.USD);
      GBP = parseFloat(response.data.rates.GBP);
      RSD = parseFloat(response.data.rates.RSD);
      RON = parseFloat(response.data.rates.RON);
      HRK = parseFloat(response.data.rates.HRK);
      CZK = parseFloat(response.data.rates.CZK);
      UAH = parseFloat(response.data.rates.UAH);
      DKK = parseFloat(response.data.rates.DKK);
      CHF = parseFloat(response.data.rates.CHF);
    })
    .catch(function(error) {
      console.log(error);
      output.innerHTML = '<h4 class="display-5 text-center text-danger mt-5">ERROR:' + error + '</h4>';
      output.style.visibility = "visible";
    });
}


action_button.addEventListener('click', function() {
  if (isNaN(parseFloat(EUR_input.value))) {
      console.log("Not a Number!");
      output.style.visibility = "hidden";
    } else {
      output.style.visibility = "visible";
    }
  var EUR = parseFloat(EUR_input.value);
  HUF_output.innerHTML = HUF * EUR;
  USD_output.innerHTML = USD * EUR;
  GBP_output.innerHTML = GBP * EUR;
  RSD_output.innerHTML = RSD * EUR;
  RON_output.innerHTML = RON * EUR;
  HRK_output.innerHTML = HRK * EUR;
  CZK_output.innerHTML = CZK * EUR;
  UAH_output.innerHTML = UAH * EUR;
  DKK_output.innerHTML = DKK * EUR;
  CHF_output.innerHTML = CHF * EUR;
})

get();
