document.getElementById('btconfirm').addEventListener('click', function(){
    enviarPedido('Confirm');
})

function enviarPedido(resposta){
    const name = document.getElementById('name').value;
    const message = document.getElementById('message');

    if(name.trim() === ''){
        message.innerHTML = 'Por favor, preencha o seu nome';
        return;
    }

    if(resposta === 'Confirm'){
        message.innerHTML = `Welcome to my blog ${name}! <br> I hope you like all my cats S2`;
    }

    document.getElementById('btconfirm').disabled = true;
}
document.getElementById('btsend').addEventListener('click', function(){
    sendAnswer('Send');
})

function sendAnswer(answer){
    const incredible = document.getElementById('incredible');
    const informarea = document.getElementById('informarea').value;

    if(informarea.trim() === ''){
        incredible.innerHTML = 'Please share with me...';
        return;
    }

    if(answer === 'Send'){
        incredible.innerHTML = `OMG! I would love to know more!! <br> Thank you for sharing with me!`;
    }

    document.getElementById('btsend').disabled = true;
}