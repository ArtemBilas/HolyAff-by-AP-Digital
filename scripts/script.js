const activeButtons = document.querySelectorAll('.content__group-btns__btn');
const inputs = document.querySelectorAll('input');


activeButtons.forEach(btn => {

    btn.addEventListener('click', e => {
        e.preventDefault();

        for (let item = 0; item < activeButtons.length; item++) {
            const element = activeButtons[item];
            const isActiveStyle = element.classList.contains('active-btn');

            if (isActiveStyle) {
                element.classList.remove('active-btn');
                break;
            }
        }

        btn.classList.add('active-btn');

    });
});


function currentLabel(labelName){
    const span = document.querySelector(`span[data-name='label-${labelName}']`);

    console.log(span)
    // if(eventInAction === 'blur'){
    //     span.style.transform =  `scale(1)`;
    // }else{
    //     span.style.transform = 'scale(.7)';
    // }
}



function inputValidate(input) {
    const inputDataName = input.getAttribute('data-name');
    const emailRegEx = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    if (inputDataName === 'email') {
        const parentDiv = document.querySelector('.content-group-inputs__email');
        const span = document.createElement('span');
        const colorRed = 'c71414';

        span.classList.add('display-off');
        span.textContent = `completa correttamente il campo: ${inputDataName}`;
        span.style.color = 'red';
        span.style.fontSize = '12px';
        parentDiv.appendChild(span);

        input.addEventListener('input', e => {
            const value = e.target.value.trim();

            if (emailRegEx.test(value)) {
                input.style.borderBottomColor = '#8d8489';
            } else {
                input.style.borderBottomColor = 'red';
            }
        });

        input.addEventListener('blur', () => {
            const value = input.value;

            if (emailRegEx.test(value)) {
                input.style.borderBottomColor = '#8d8489';
                span.classList.remove('dispay-on');
                span.classList.add('display-off');
            } else {
                input.style.borderBottomColor = 'red';
                span.classList.remove('display-off');
                span.classList.add('display-on');
            }
            currentLabel(inputDataName, 'blur');
        });

        input.addEventListener('focus', () => {
            span.classList.add('display-off');
            span.classList.remove('display-on');

            currentLabel(inputDataName, 'focus');
        });
    }

    if (inputDataName === 'nome' || inputDataName === 'cognome') {
        const parentDiv = inputDataName === 'nome' ? document.querySelector('.content-group-inputs__name') : document.querySelector('.content-group-inputs__so-name');
        const span = document.createElement('span');

        span.classList.add('display-off');
        span.textContent = `completa correttamente il campo: ${inputDataName}`;
        span.style.color = 'red';
        span.style.fontSize = '12px';
        parentDiv.appendChild(span);


        input.addEventListener('input', e => {
            const value = e.target.value.trim();

            if (value.length === 0) {
                input.style.borderBottomColor = 'red';
            } else {
                input.style.borderBottomColor = '#8d8489';
            }
        });

        input.addEventListener('blur', () => {
            const value = input.value;

            if (value.length === 0 ) {
                input.style.borderBottomColor = 'red';
                span.classList.remove('display-off');
                span.classList.add('display-on');
            } else {
                input.style.borderBottomColor = '#8d8489';
                span.classList.remove('dispay-on');
                span.classList.add('display-off');
            }

        });

        input.addEventListener('focus', () => {
            span.classList.add('display-off');
            span.classList.remove('display-on');
        });
    }
}

inputs.forEach(input => {
    inputValidate(input);
});
