const menus = document.querySelectorAll('.menus')

menus.forEach(menu => {
  const select = menu.querySelector('.select')
  const caret = menu.querySelector('.caret')
  const ul = menu.querySelector('.menu')
  const options = menu.querySelectorAll('.menu li')
  const selected = menu.querySelector('.selected')

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked')
    caret.classList.toggle('caret-rotate')
    ul.classList.toggle('menu-open')
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText
      select.classList.remove('select-clicked')
      caret.classList.remove('caret-rotate')
      ul.classList.remove('menu-open')
      options.forEach(option => {
        option.classList.remove('active')
      });
      option.classList.add('active')
    });
  });
});

const btn = document.querySelector('.btn');
const body = document.querySelector('body')
const nav = document.querySelector('nav')
const footer = document.querySelector('footer')
const container = document.querySelector('.container')

btn.addEventListener('click', () => {
  body.classList.toggle('sunmode')
  nav.classList.toggle('sunmode')
  footer.classList.toggle('sunmode')
  container.classList.toggle('sunmode')
})

const likeButtons = document.querySelectorAll('.like-button')

for (let button of likeButtons) {
  const heartIcon = button.querySelector('.heart-icon')
  const likesAmountLabel = button.querySelector('.likes-amount') // Utilisez le sélecteur correct ici
  let likesAmount = parseInt(button.querySelector('.likes-amount').innerHTML)

  heartIcon.addEventListener('click', () => {
    heartIcon.classList.toggle('liked');
    if (heartIcon.classList.contains('liked')) {
      likesAmount++;
    } else {
      likesAmount--;
    }
    likesAmountLabel.innerHTML = likesAmount;
  });
}

let sign__in = document.querySelector('#sign__in')
let close = document.querySelector('#close1')
let submited = document.querySelector('.submit')

sign__in.addEventListener('click', () => {
  body.classList.add('active1')
})

close.addEventListener('click', () => {
  body.classList.remove('active1')

})

submited.addEventListener('click', () => {
  alert('Thank youuu')
})


const presentations = [
  [
    "Start with an attention-grabbing introduction.",
    "Introduce yourself as a passionate and experienced web developer.",
    "Mention the importance of HTML and CSS in web development.",
    "Explain the structure and content of the course.",
    "Emphasize that the course is designed for absolute beginners.",
    "Describe the step-by-step learning approach.",
    "Briefly explain the basics of HTML, including tags, elements, and attributes.",
    "Introduce CSS and its role in styling web pages.",
    "Highlight the importance of responsive design and mobile-friendly layouts.",
    "Discuss best practices for writing clean and semantic HTML and CSS code.",
    "Mention the use of popular frameworks like Bootstrap.",
    "Emphasize that the course is completely free.",
    "Explain how learning HTML and CSS can open up opportunities in web development.",
    "Discuss the practical exercises and projects that students will work on.",
    "Highlight the importance of hands-on practice and real-world examples.",
    "Recap the course content and benefits.",
    "Encourage interested individuals to sign up for the course.",
    "Provide contact information for any questions or inquiries."
  ],
  [
    "Start with an engaging introduction.",
    "Introduce yourself as a seasoned JavaScript developer.",
    "Explain the significance of JavaScript in modern web development.",
    "Describe the course content and learning objectives.",
    "Emphasize that no prior programming experience is required.",
    "Mention the interactive and practical nature of the course.",
    "Introduce the basics of JavaScript, including variables, data types, and operators.",
    "Explain control flow and decision-making using conditional statements.",
    "Cover loops, arrays, and functions in JavaScript.",
    "Discuss DOM manipulation and event handling.",
    "Highlight the use of JavaScript frameworks like React or Angular.",
    "Highlight that the course is free of charge.",
    "Explain the increasing demand for JavaScript developers.",
    "Discuss the potential career paths and opportunities.",
    "Mention the resources and support available to students.",
    "Recap the key points covered in the presentation.",
    "Encourage interested individuals to enroll in the course.",
    "Provide contact information for further questions or assistance."
  ],
  [
    "Begin with an attention-grabbing introduction.",
    "Introduce yourself as an experienced frontend developer.",
    "Explain the significance of frontend development in modern web applications.",
    "Describe the course structure and learning objectives.",
    "Emphasize that no prior coding experience is necessary.",
    "Mention the hands-on approach and real-world examples.",
    "Explain the basics of HTML, CSS, and JavaScript.",
    "Discuss responsive design principles and mobile optimization.",
    "Introduce popular frontend libraries and frameworks like React or Vue.js.",
    "Cover UI/UX design principles and best practices.",
    "Discuss version control systems and collaboration tools.",
    "Highlight that the course is free to attend.",
    "Discuss the growing demand for frontend developers.",
    "Explain the potential for creative and dynamic web projects.",
    "Mention the supportive learning community and available resources.",
    "Summarize the key points covered in the presentation.",
    "Encourage interested individuals to join the course.",
    "Provide contact information for further inquiries or assistance."
  ],
  [
    "Begin with an engaging introduction.",
    "Introduce yourself as an experienced backend developer.",
    "Explain the importance of backend development in powering web applications.",
    "Describe the course structure and objectives.",
    "Emphasize that no prior coding experience is required.",
    "Mention the hands-on approach and real-world",
  ],
]

let btns = document.querySelectorAll('button');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    let index = parseInt(btn.getAttribute('id'));
    document.querySelector('.more__information').innerHTML = presentations[index];
    body.classList.add('active2')
  });
});

let close1 = document.querySelector('#close2')

close1.addEventListener('click', () => {
  body.classList.remove('active2')
})
