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
