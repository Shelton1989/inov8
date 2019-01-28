                window.addEventListener('onload', setHeight())
                window.addEventListener('onresize', setHeight());
                document.getElementById('home-menu').addEventListener('onclick', function(event){
                    event.preventDefault();
                });
                document.getElementById('about-menu').addEventListener('onclick', function(event){
                    event.preventDefault();
                });
                document.getElementById('services-menu').addEventListener('onclick', function(event){
                    event.preventDefault();
                });
                document.getElementById('contact-menu').addEventListener('onclick', function(event){
                    event.preventDefault();
                });

                let number = 1;
                let x = document.getElementsByClassName('slide').length;
                setInterval(function(){
                    if(number < x) {
                        number = number + 1;
                        let prevNumber = number - 1;
                        document.getElementById('slide-'+number).style.opacity = 1;
                        document.getElementById('slide-'+prevNumber).style.opacity = 0;
                    } else {
                        number = 1;
                        document.getElementById('slide-'+number).style.opacity = 1;
                        document.getElementById('slide-5').style.opacity = 0;
                    }
                    return number;
                },10000);

                function handleNext() {
                    if (number < x) {
                        number = number + 1;
                        let prevNumber = number - 1;
                        document.getElementById('slide-'+number).style.opacity = 1;
                        document.getElementById('slide-'+prevNumber).style.opacity = 0;
                    } else {
                        number = 1;
                        document.getElementById('slide-'+number).style.opacity = 1;
                        document.getElementById('slide-5').style.opacity = 0;
                    }
                }

                function handleBack() {
                    if (number <= x && number != 1) {
                        number = number - 1;
                        let prevNumber = number + 1;
                        document.getElementById('slide-'+number).style.opacity = 1;
                        document.getElementById('slide-'+prevNumber).style.opacity = 0;
                    } else {
                        number = 5
                        document.getElementById('slide-'+number).style.opacity = 1;
                        document.getElementById('slide-1').style.opacity = 0;
                    }
                }
                function setHeight() {
                    let height = window.innerHeight.toString() + 'px';
                    document.getElementById('slider-wrapper').style.height = height;
                    let y = document.getElementsByClassName('content-wrapper')
                    for (let i = 0; i < y.length; i++) {
                        y[i].style.height = height;
                    }
                }
                function scrollAbout() {
                    let element = document.getElementById('about')
                    element.scrollIntoView({block: 'start', behavior: 'smooth'});
                }
                function scrollServices() {
                    let element = document.getElementById('services')
                    element.scrollIntoView({block: 'start', behavior: 'smooth'});
                }
                function scrollContact() {
                    let element = document.getElementById('contact')
                    element.scrollIntoView({block: 'start', behavior: 'smooth'});
                }
                function scrollToTop() {
                    let element = document.getElementById('slider-wrapper');
                    element.scrollIntoView({block: 'start', behavior: 'smooth'});
                    let navItems = document.getElementsByClassName('navlink');
                    for (let i=0; i < navItems.length; i++){
                        if (navItems[i].classList.contains('active')){
                            navItems[i].classList.remove('active');
                        }
                    }
                    document.getElementById('home-menu').parentElement.classList.add('active');
                }
                function setActive(e) {
                    let navItems = document.getElementsByClassName('navlink');
                    for (let i=0; i < navItems.length; i++){
                        if (navItems[i].classList.contains('active')){
                            navItems[i].classList.remove('active');
                        }
                    }
                    e.parentElement.classList.add('active')
                }
                (function(){
                    emailjs.init("user_PHzhXFbNTsbtIPNO0QHxX");
                })();
                document.getElementById('contact-form').addEventListener('submit', function(event) {
                    event.preventDefault();
                    let templateParameters = {
                        name: document.getElementById('First_name').value,
                        lastName: document.getElementById('Last_name').value,
                        email: document.getElementById('Email').value,
                        message: document.getElementById('Message').value
                    }
                    emailjs.send('sendgrid', 'template_wC3FlAvk', templateParameters)
                    .then(function(response){
                        document.getElementById('success-div').innerHTML = 'Success'
                    }, function(error){
                        document.getElementById('success-div').innerHTML = 'Error, please refresh the page and resubmit.'
                    });
                });
                function navColor() {
                    let z = parseInt(document.getElementById('slider-wrapper').style.height, 10);
                    let a = window.scrollY;
                    if (a >= (z * 0.5)) {
                        document.getElementById('navbar').style.background = 'black';
                    }
                    else {
                        document.getElementById('navbar').style.background = 'transparent'
                    }
                }