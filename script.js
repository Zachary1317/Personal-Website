// mouse circle
const mouseCircle = document.querySelector('.mouse-circle');
const mouseDot = document.querySelector('.mouse-dot');

const mouseCircleFunc = (x,y)=>{
    // when the mouse begin to move, it should appear so change opacity to 1
    mouseCircle.style.cssText = `top:${y}px;left:${x}px;opacity:1`;
    mouseDot.style.cssText = `top:${y}px;left:${x}px;opacity:1`;
}

document.body.addEventListener("mousemove",(e)=>{
    // console.log(e);
    let x = e.clientX;
    let y = e.clientY;
    mouseCircleFunc(x,y);
    animateCircles(e,x,y);
});

document.body.addEventListener("mouseleave",()=>{
    mouseCircle.style.cssText = `opacity:0`;
    mouseDot.style.opacity = '0';
})
// end of mouse circle

// Animated circles
const circles = document.querySelectorAll('.circle');
const mainImg = document.querySelector('.main-circle img');

let mX = 0;
let mY = 0;

const animateCircles = (e,x,y) =>{
    if(x<mX){
        circles.forEach((circle)=>{
            circle.style.left = `100px`;
        })
        mainImg.style.left = `100px`;
    }else if(x>mX){
        circles.forEach((circle)=>{
            circle.style.left = '-100px';
        })
        mainImg.style.left = '-100px';
    }

    if(y<mY){
        circles.forEach((circle)=>{
            circle.style.top = '100px';
        })
        mainImg.style.top = '100px';
    }else if(y>mY){
        circles.forEach((circle)=>{
            circle.style.top = '-100px';
        })
        mainImg.style.top = '-100px';
    }

    mX = e.clientX;
    mY = e.clientY;
}
// end of Animated circles

// main button
const mainBtns = document.querySelectorAll('.main-btn')
mainBtns.forEach(btn=>{
    let ripple;

    btn.addEventListener('mouseenter',(e)=>{
        const left = e.clientX - e.target.getBoundingClientRect().left;
        const top = e.clientY - e.target.getBoundingClientRect().top;

        ripple = document.createElement('div');
        ripple.classList.add("ripple");
        ripple.style.left = `${left}px`;
        ripple.style.top = `${top}px`;
        btn.prepend(ripple)
    });

    btn.addEventListener('mouseleave',()=>{
        btn.removeChild(ripple);
    })

})


// end of main button

// menu
const navbar = document.querySelector(".navbar")
const menu = document.querySelector(".menu-icon")

document.addEventListener("scroll",()=>{
    navbar.classList.add("hidden-nav");
    menu.classList.add("show-menu");

    if(window.scrollY === 0){
        navbar.classList.remove("hidden-nav");
        menu.classList.remove("show-menu");
    }
})

menu.addEventListener("click",()=>{
    navbar.classList.remove("hidden-nav");
    menu.classList.remove("show-menu");
})
// end of menu

// about me text
const aboutMeText = document.querySelector('.about-me-text');
const aboutMeTextContent = "Hi guys, I am Zachary. Thank you for visiting my personal website. I will share with you guys more about my stories.";
// Array can convert the string into single alphabet
Array.from(aboutMeTextContent).forEach(char=>{
    const span = document.createElement('span');
    span.textContent = char;
    aboutMeText.appendChild(span);

    // span.addEventListener("mouseenter",(e)=>{
    //     e.target.style.animation = `aboutMeTextAnim 10s infinite`;
    // })
});
// end of about me text

// projects
const projects = document.querySelectorAll('.project');
const container = document.querySelector('.container');
const projectHiddenBtn = document.querySelector('.project-hidden-btn');

projects.forEach(project=>{
    project.addEventListener('mouseenter',()=>{
        project.firstElementChild.style.top =`-${project.firstElementChild.offsetHeight - project.offsetHeight+20}px`;
    })

    project.addEventListener("mouseleave",()=>{
        project.firstElementChild.style.top = '2rem';
    })

    // big img
    project.addEventListener("click",()=>{
        const bigImgWrapper = document.createElement("div");



        bigImgWrapper.className = "project-img-wrapper";
        container.appendChild(bigImgWrapper);

        const imgPath = project.firstElementChild.getAttribute("src").split(".")[0];
        console.log(imgPath)
        const bigImg = document.createElement('img');
        bigImg.className = "project-img";
        bigImg.setAttribute("src",`${imgPath}-big.jpg`);
        bigImgWrapper.appendChild(bigImg);
        bigImgWrapper.style.overflowY = "scroll";
        document.body.style.overflowY = "hidden";

        projectHiddenBtn.classList.add("change");
        projectHiddenBtn.onclick = ()=>{
            projectHiddenBtn.classList.remove("change");
            bigImgWrapper.remove();
            document.body.style.overflowY = "scroll";
        }
    });
    // end of big img
})
// end of projects

// section4
document.querySelectorAll('.service-btn').forEach((service)=>{
    service.addEventListener("click",(e)=>{
        e.preventDefault();
        const serviceText = service.nextElementSibling;
        serviceText.classList.toggle("change");
    })
})
// end of section4

// Section5
// Form
const formHeading = document.querySelector(".form-heading");
const formInput = document.querySelectorAll(".contact-form-input");

formInput.forEach((input)=>{
    input.addEventListener("focus",()=>{
        formHeading.style.opacity = "0";
        setTimeout(()=>{
            formHeading.textContent = `Your ${input.placeholder}`;
            formHeading.style.opacity = "1";
        },300);
    })
    input.addEventListener("blur",()=>{
        formHeading.style.opacity = "0";
        setTimeout(()=>{
            formHeading.textContent = `Let's Talk`;
            formHeading.style.opacity = "1";
        },300);
    })
})
// End of Form

// form validation
const form = document.querySelector(".contact-form")
const username = document.getElementById("name")
const email = document.getElementById("email")
const subject = document.getElementById("subject")
const message = document.getElementById("message")

const checkFields = (inputArr)=>{
    inputArr.forEach((input)=>{
        if(input.value.trim()===""){
            error(input,`${input.id} is required.`)
        }else{
            success(input);
        }
    })
}

const success = (input)=>{
    input.nextElementSibling.classList.remove("error");
}

const error = (input,message)=>{
    input.nextElementSibling.classList.add("error");
    input.nextElementSibling.textContent = message;
}

form.addEventListener("submit",e=>{
    e.preventDefault();
    checkFields([username,email,subject,message]);
})
// end of form validation
// End of Section5
