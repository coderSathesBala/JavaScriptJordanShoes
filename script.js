import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// function appear() {
//     document.getElementById("test").style.opacity = "1";
// }

window.onload=function(){
var myP = document.getElementById('test');

myP.addEventListener('mouseover', function(){ myP.style.opacity = "1"})
}

