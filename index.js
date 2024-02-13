var slider = document.getElementById('range')
var display = document.getElementById('display')
var lowercase = document.getElementById('lowercase')
var uppercase = document.getElementById('uppercase')
var number = document.getElementById('number')
var symbol = document.getElementById('symbols')
var btn = document.getElementById('btn')
var slidernumber = document.getElementById('rangenumber')
var copyicon = document.getElementById('copyicon')
slidernumber.innerHTML = slider.value
slider.addEventListener('input',function(){
      slidernumber.innerHTML = slider.value

})
btn.addEventListener('click',function(){
      display.value = generatepassword();
})
var uppercase2 = 'QWERTYUIOPASDFGHJKLZXCVBNM'
var lowercase2 = 'qwertyuiopasdfghjklzxcvbnm'
var number2 =  '1234567890'
var symbols = '!@#$%^&*~+-'
function generatepassword(){
      var genpassword = ''
      var allchar = '' 
      allchar +=  lowercase.checked ? lowercase2 : '';
      allchar +=  uppercase.checked ? uppercase2 : '';
      allchar +=  number.checked ? number2 : '';
      allchar +=  symbol.checked ? symbols : '';
      if(allchar == '' || allchar.length == 0){
            return genpassword
      }
      for(let i=1 ; i<=slider.value ; i++){

            genpassword += allchar.charAt(Math.floor(Math.random()*allchar.length));
      }
      return genpassword;
      // let i=1;
      // while(i<= slider.value){
      //       genpassword += allchar.charAt(Math.floor(Math.random()*allchar.length));
      //       i++;
      // }
      // return genpassword;


}
copyicon.addEventListener('click',function(){
      if(display.value != '' || display.value >= 1){
            navigator.clipboard.writeText(display.value)
            copyicon.title = 'password copied'
            copyicon.classList.replace("uil-copy", "uil-file-check-alt");
            
            setTimeout(() => {
                  copyicon.classList.replace("uil-file-check-alt", "uil-copy");
            }, 2000);
      }
})