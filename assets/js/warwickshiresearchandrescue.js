// Global Variables
var jsfileversion="0041";

function showMenuComponent(sect) {
var elements = document.getElementsByClassName('MenuComponent');

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = 'none';
    }

var w = document.getElementById('imgbground');
w.style.display = 'none';

var w = document.getElementById('imgbground-blur');
w.style.display = 'none';

var x = document.getElementById(sect);
x.style.display = 'block';

var elements2 = document.getElementsByClassName(sect + '-display');

    for (var i = 0; i < elements2.length; i++){
        elements2[i].style.display = 'block';
    }

document.getElementById('JSSerNo').textContent='.'+jsfileversion;

document.getElementById('navbarNavDropdown').className='navbar-collapse show';
window.history.pushState("","Warksar Home","#"+sect+"-Top");
}


function formSubmit(formid){

var form=document.getElementById(formid);
var namefull=form.elements.fullname.value;
var addrfrom=form.elements.email.value;


emailjs.init("user_KA2KaFXQUejP5h83rWQcg");
emailjs.send("service_00lxi2c", "template_zjxvz73", {
to_name: namefull,
send_to: addrfrom,
}
);

document.getElementById("donationmodal-button").value="Details Submitted";
}


function signupSubmit(formid){

//Variables for future extension
//var form=document.getElementById(formid);
//var namefull=form.elements.fullname.value;
//var addrfrom=form.elements.email.value;

document.getElementById("signupmodal-button").style.display="none";
}


