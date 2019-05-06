/*{
    const email = "thiago@gmail.com";

    console.log(email);
    console.log("Seu email é " + email);
    console.log(`Seu email é ${email}`);
}
*/
document.getElementById('btn-submit').addEventListener('click', e => {
    console.log('O botão foi clicado');
});

document.getElementById('email').addEventListener('mousedown', e => {
    console.log('O mouse foi clicado dentro do formulário de email')
});

document.getElementById('password').addEventListener('mousedown', e =>{
    console.log('O mouse foi clicado dentro do formulário de senha')

});

document.querySelector('#form-login').addEventListener('submit', e=>{
    e.preventDefault();

    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value;

        let json =  {
        email,
        password

    };
    console.log(json);

    let stringJSON = JSON.stringify(json); 

    console.log(stringJSON);

    let jsonParse = JSON.parse(stringJSON);

    console.log(jsonParse.password);

});

