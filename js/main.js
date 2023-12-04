function switchSmileColorHandler(event) {
    event.target.classList.toggle('fa-regular');
    event.target.classList.toggle('fa-solid');
}

function counterIncrementHandler(event) {
    const counter = event.target.nextElementSibling;

    counter.textContent = String(+counter.textContent + 1);
}

document.querySelectorAll('.smile > i').forEach(s => {
    s.addEventListener('mouseenter', switchSmileColorHandler);
    s.addEventListener('mouseleave', switchSmileColorHandler);
    s.addEventListener('click', counterIncrementHandler);
});
