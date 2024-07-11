
var input_msj = document.getElementById("msj");
var input_submit = document.getElementById("enviar");



if (input_submit) {
    input_submit.addEventListener("click", enviarForm);
}

function enviarForm(event) {
    event.preventDefault();
    localStorage.setItem("msj", input_msj.value);

    var valor_msj = localStorage.getItem("msj");
    var placeholder_msj = document.getElementById("msj-placeholder");
    placeholder_msj.innerHTML = valor_msj;

    elemento_feedback = document.getElementById("feedback");
    elemento_feedback.classList.remove("oculto");
    elemento_feedback.scrollIntoView({ behavior: 'smooth' });
}

var input_msj_responder = document.getElementById("msj-responder");
var input_enviar_responder = document.getElementById("enviar-responder");
var input_responder_inicial = document.getElementById("responder");

if(input_responder_inicial){
    input_responder_inicial.addEventListener("click", enviarFormResponderInicial);
}

function enviarFormResponderInicial(event){
    event.preventDefault();
    elemento_formulario_responder = document.getElementById("formulario-responder");
    elemento_formulario_responder.classList.remove("oculto-responder-contenedor");
    elemento_formulario_responder.scrollIntoView({ behavior: 'smooth' });
}

if(input_enviar_responder){
    input_enviar_responder.addEventListener("click", enviarFormResponder);
}

function enviarFormResponder(event){
    event.preventDefault();
    localStorage.setItem("msj-responder", input_msj_responder.value);

    var valor_msj_responder = localStorage.getItem("msj-responder");
    var placeholder_msj_responder = document.getElementById("msj-placeholder-responder");
    placeholder_msj_responder.innerHTML = valor_msj_responder;

    elemento_feedback = document.getElementById("feedback-responder");
    elemento_feedback.classList.remove("oculto-responder");
    elemento_feedback.scrollIntoView({ behavior: 'smooth' });
}


document.addEventListener('DOMContentLoaded', function () {
    const heartToggle = document.getElementById('heart-toggle');
    const likeCount = document.getElementById('like-count');
    
    heartToggle.addEventListener('change', function () {
        if (heartToggle.checked) {
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        } else {
            likeCount.textContent = parseInt(likeCount.textContent) - 1;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const likeImagen = document.getElementById('like-imagen');
    const CuentasLikes = document.getElementById('like-count-imagen');
    
    likeImagen.addEventListener('change', function () {
        if (likeImagen.checked) {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) + 1;
        } else {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) - 1;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const likeImagen = document.getElementById('dislike-imagen');
    const CuentasLikes = document.getElementById('dislike-count-imagen');
    
    likeImagen.addEventListener('change', function () {
        if (likeImagen.checked) {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) + 1;
        } else {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) - 1;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const likeImagen = document.getElementById('like-imagen2');
    const CuentasLikes = document.getElementById('like-count-imagen2');
    
    likeImagen.addEventListener('change', function () {
        if (likeImagen.checked) {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) + 1;
        } else {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) - 1;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const likeImagen = document.getElementById('dislike-imagen2');
    const CuentasLikes = document.getElementById('dislike-count-imagen2');
    
    likeImagen.addEventListener('change', function () {
        if (likeImagen.checked) {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) + 1;
        } else {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) - 1;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const likeImagen = document.getElementById('like-imagen3');
    const CuentasLikes = document.getElementById('like-count-imagen3');
    
    likeImagen.addEventListener('change', function () {
        if (likeImagen.checked) {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) + 1;
            console.log("se presiono")
        } else {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) - 1;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const likeImagen = document.getElementById('dislike-imagen3');
    const CuentasLikes = document.getElementById('dislike-count-imagen3');
    
    likeImagen.addEventListener('change', function () {
        if (likeImagen.checked) {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) + 1;
        } else {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) - 1;
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const likeImagen = document.getElementById('like-imagen4');
    const CuentasLikes = document.getElementById('like-count-imagen4');
    
    likeImagen.addEventListener('change', function () {
        if (likeImagen.checked) {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) + 1;
        } else {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) - 1;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const likeImagen = document.getElementById('dislike-imagen4');
    const CuentasLikes = document.getElementById('dislike-count-imagen4');
    
    likeImagen.addEventListener('change', function () {
        if (likeImagen.checked) {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) + 1;
        } else {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) - 1;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const likeImagen = document.getElementById('like-imagen5');
    const CuentasLikes = document.getElementById('like-count-imagen5');
    
    likeImagen.addEventListener('change', function () {
        if (likeImagen.checked) {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) + 1;
        } else {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) - 1;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const likeImagen = document.getElementById('dislike-imagen5');
    const CuentasLikes = document.getElementById('dislike-count-imagen5');
    
    likeImagen.addEventListener('change', function () {
        if (likeImagen.checked) {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) + 1;
        } else {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) - 1;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const likeImagen = document.getElementById('like-imagen6');
    const CuentasLikes = document.getElementById('like-count-imagen6');
    
    likeImagen.addEventListener('change', function () {
        if (likeImagen.checked) {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) + 1;
        } else {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) - 1;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const likeImagen = document.getElementById('dislike-imagen6');
    const CuentasLikes = document.getElementById('dislike-count-imagen6');
    
    likeImagen.addEventListener('change', function () {
        if (likeImagen.checked) {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) + 1;
        } else {
            CuentasLikes.textContent = parseInt(CuentasLikes.textContent) - 1;
        }
    });
});

