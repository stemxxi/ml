const headerBg = document.querySelector('.nav__content-sub-bg');
const aboutUs = document.querySelector('#about-us');
const nav = document.querySelector('#nav');
const close = document.querySelector('.close');
const services = document.querySelector('#services');
const serviceContent = document.querySelector('.services-content');
const mouse = document.querySelector('.mouse-over');
const skill = document.querySelector('#skills');
const skillContent = document.querySelector('.skills-content');


// ABOUT US

aboutUs.addEventListener('mouseover', () => {
    headerBg.classList.add('active')
    serviceContent.classList.remove('active')
})
aboutUs.addEventListener('mouseout', () => {
    headerBg.classList.remove('active')
})
headerBg.addEventListener('mouseover', () => {
    headerBg.classList.add('active')
})
headerBg.addEventListener('mouseout', () => {
    headerBg.classList.remove('active')
})

// SERVICES

services.addEventListener('mouseover', () => {
    serviceContent.classList.add('active')
    headerBg.classList.remove('active')
})
services.addEventListener('mouseout', () => {
    serviceContent.classList.remove('active')
})
serviceContent.addEventListener('mouseover', () => {
    serviceContent.classList.add('active')
})
serviceContent.addEventListener('mouseout', () => {
    serviceContent.classList.remove('active')
})


// SKILLS

skill.addEventListener('mouseover', () => {
    skillContent.classList.add('active')
})
skill.addEventListener('mouseout', () => {
    skillContent.classList.remove('active')
})
skillContent.addEventListener('mouseover', () => {
    skillContent.classList.add('active')
})
skillContent.addEventListener('mouseout', () => {
    skillContent.classList.remove('active')
})







close.addEventListener('click', () => {
    headerBg.classList.remove('active')
})

