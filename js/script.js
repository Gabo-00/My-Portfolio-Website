window.addEventListener('scroll', function(){
    var navigation = document.getElementById('navigation');
    if (this.window.scrollY > 1){
        navigation.classList.add('scrolled');
    }else{
        navigation.classList.remove('scrolled');
    }
})
function openNav() {
    document.getElementById("mySidebar").style.marginLeft = "0%";
    // document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mySidebar").style.marginLeft = "-100%";
}


   window.addEventListener('scroll',reveal);
   window.addEventListener('scroll',revealAbout);

    function revealAbout(){
        var reveals = document.querySelectorAll('.revealAbout');
        for(var i = 0; reveals.length;i++){
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 150;
    
            if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add('showAbout')
            }else{
                reveals[i].classList.remove('showAbout');
            }
        }
    }

   function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; reveals.length;i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 148;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('show')
        }else{
            reveals[i].classList.remove('show');
        }
    }
   }

   function showBtn(className){
    
    var show = document.getElementById(className)
    show.style.display= "block";
  
   }
   function hideBtn(className){
    var show = document.getElementById(className)
    show.style.display= "none";
  
   }

//    function mouseLeave(id){
//     var works = document.getElementById(id);
//     var workCont = document.getElementById('workCont')

//     workCont.style.boxShadow = " 2px 2px 12px rgba(0, 0, 0, 0.3)"
//     works.style.boxShadow = "none";
//    }
//    function mouseEnter(id){
//     var works = document.getElementById(id);
//     var workCont = document.getElementById('workCont');
//     var workCont2 = document.getElementById('workCont2');

//     works.style.boxShadow = " 2px 2px 12px rgba(0, 0, 0, 0.3)";
//     workCont.style.boxShadow = "none";
  

//    }
function downloadResume() {
   
    var url = '../Resume/Adrian_JosephLauresta_CV.pdf';
    var filename = 'Adrian_Joseph_Lauresta-Cv.pdf'; 

    var link = document.createElement('a');
    link.href = url;
    link.download = filename;

    document.body.appendChild(link);

    link.click();

    // Clean up
    document.body.removeChild(link);
}

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");
  
    window.addEventListener("scroll", function() {
      let current = "";
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute("id");
  
        if (window.scrollY >= sectionTop) {
          current = sectionId;
        }
      });
  
      navLinks.forEach(link => {
        const href = link.getAttribute("href").substring(1);
  
        if (href === current) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
  });
  
