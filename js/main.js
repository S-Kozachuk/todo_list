const body = document.querySelector('body'),
	menuToggle = document.querySelector('.toggle-menu'),
	mobMenu = document.querySelector('.header-nav'),
	overlayEl = document.querySelector('#overlay'),
	modalWindow = document.querySelector('.modal-window'),
	modalClose = document.querySelector('.modal__close'),
	modalBtn = document.querySelectorAll('.modal__btn'),
	formElem = document.querySelector('.form-window__elements'),
	submitBtn = document.getElementById('btn-submit'),
	timeout = 800;

let errorLabel,
	fieldClear,
	removeErrorsMessages;

// Класс, отвечающий за создание нового эл. списка
class ListManage {
	constructor(name) {
		this.text = name;
	}
	/*
	newElem() {
		let div = document.createElement('div');
		return div.innerHTML = '<p>Новый элемент списка</p>';
	}
	*/
	// При вызове экз. класса List manage в HTML должен создаваться новый блок
}

// Создание нового элемента списка (вызов экз. класса)
let createNewElem = new ListManage('Test class');
// console.log(createNewElem)

// let createElement = new ListManage
// console.log(createnElement)
createNewElem = {
	newElem() {
		let div = document.createElement('div');
		return div.innerHTML = '<p>Новый элемент списка</p>';
	}
}

console.log(createNewElem.newElem())

let testFunction = (msg) => {
	console.log(msg)
}

modalBtn.addEventListener('click', createNewElem.newElem());

/*
function openCloseMobileMenu() {
	function openMobileMenu() {
		menuToggle.classList.toggle('active');
		mobMenu.classList.toggle('active');
		overlayEl.classList.toggle('active');
		body.classList.toggle('noscroll');
	}
 
	function closeMobileMenu() {
		overlayEl.classList.remove('active');
		mobMenu.classList.remove('active');
		menuToggle.classList.remove('active');
		body.classList.remove('noscroll');
	}

	menuToggle.addEventListener('click', openMobileMenu);

	mobMenu.addEventListener('click',closeMobileMenu);

	window.addEventListener('resize', closeMobileMenu);

	overlayEl.addEventListener('click', closeMobileMenu);
}
openCloseMobileMenu();

function scrollUpArrow() {
	const scrollBtn = document.querySelector('.scroll_arrow');
	window.onscroll = () => {
		if(window.scrollY > 400) {
			scrollBtn.classList.remove('scroll__btn-hide');
		}
		else if (window.scrollY < 400) {
			scrollBtn.classList.add('scroll__btn-hide');
		}
	};
	scrollBtn.onclick = () => {
		window.scrollTo(0, 0);
	};
}
scrollUpArrow();

function modalWindowOpenClose() {
	function modalWindowOpen(){
		modalBtn.forEach(item=> {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				addScrollIndent();
				modalWindow.classList.add('open');
				body.classList.add('noscroll');
				fieldClear();
			});
		});
	}
	modalWindowOpen();

	function closeOutlineModalWindow() {
		modalWindow.addEventListener('click', (e) => {
		const isModal = e.target.closest('.modal-window__content');
			if(!isModal) {
				modalWindow.classList.remove('open');
				removeScrollIndent();
				removeErrorsMessages();
			}
		});
	}
	closeOutlineModalWindow();
	

	function closeCrossModalWindow() {
		modalClose.addEventListener('click', () => {
			modalWindow.classList.remove('open');
			removeScrollIndent();
			removeErrorsMessages();
		});
	}
	closeCrossModalWindow();

	function closeEcsModalWindow() {
		document.addEventListener ('keydown', function (e) {
			if (e.code == 'Escape') {
				modalWindow.classList.remove('open');
				removeScrollIndent();
				removeErrorsMessages();
			}
		});
	}
	closeEcsModalWindow();

	function addScrollIndent() {
		const lockPaddingValue = window.innerWidth - body.offsetWidth + 'px';
		body.style.paddingRight = lockPaddingValue;
	}

	function removeScrollIndent() {  
		setTimeout(function() {
			body.style.paddingRight = '0px';
			body.classList.remove('noscroll');
		}, timeout);
	}
}
modalWindowOpenClose();

function formCheck() {
	function setJQueryValidate() {
		$('#contacts-form').validate ({
			// focusCleanup: true,
			rules: {
				name: {
					required: true,
					minlength: 3,
					lettersOnly: true
				},
				phone: {
					required: true,
					digits: true,
					rangelength: [6, 10]
				},
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: 'Введите имя',
					minlength: 'Не меньше 3-х букв'
				},
				phone: {
					required: 'Введите номер телефона',
					digits: 'Вводите только цифры',
					rangelength: jQuery.validator.format('От {0} до {1} цифр')
				},
				email: {
					required: 'Введите email',
					email: 'Отсутствует символ @'
				}
			},
			submitHandler: function (form) {
				ajaxFormSubmit();
			}
		});
	}
	setJQueryValidate();

	fieldClear = (()=>{
		const mainForm = document.querySelectorAll('.form__input');
		mainForm.forEach(elem =>{
			elem.value = "";
		})
	});

	let getFieldsError = (()=> {
		submitBtn.addEventListener('click', ()=> {
			setTimeout(()=> {
				errorLabel = formElem.querySelectorAll('label.error');
				console.log(errorLabel);
			}, 100);
		});
	});
	getFieldsError();

	removeErrorsMessages = (()=> {
		if (errorLabel) {
			for (let label of errorLabel) {
				label.remove();
				console.log('Removed error message');
			}
		}
	});

	function checkingForLetters() {
		$.validator.addMethod('lettersOnly', function(value, element) {
			return this.optional(element) || /^[a-zа-я]+$/i.test(value);
		}, "Вводите только буквы");
	}
	checkingForLetters();
}
formCheck()


function ajaxFormSubmit() {
    let string = $('#contacts-form').serialize(); // Сохраняем данные введенные в форму в строку.
    // AJAX query
    $.ajax({
        type: 'POST',
        url: 'php/mail.php',
        data: string,
        // Close the modal window (JQuery method slideUP)
        success: function (html) {
            $('#contacts-form').slideUp(800);
            $('#answer').html(html);
        }
    });
    // Block action if click to submit
    return false;
}
*/