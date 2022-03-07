const LoginPage = document.getElementById(`loginPage`);

const login = LoginPage.querySelector(`#login`);
const password = LoginPage.querySelector(`#password`);
const buttonLog = LoginPage.querySelector(`[log]`);
const buttongReg = LoginPage.querySelector(`[reg]`);
const showPass = LoginPage.querySelector(`#show`);

showPass.addEventListener(`click`, showPassword)
buttonLog.addEventListener(`click`, openPage);
buttongReg.addEventListener(`click`, () => {
    dbAdd(login.value, password.value);
    alert(`Ro'yxatdan o'tdingiz`);
})

let db = {
    users: [
        {
            login: `Login1`,
            pass: `Pass1`,
        },
        {
            login: `Login2`,
            pass: `Pass2`,
        },
        {
            login: `Login3`,
            pass: `Pass2`,
        },
        {
            login: `Login2`,
            pass: `Pass3`,
        }
    ]
}

function openPage() {
    for (let i = 0; i < db.users.length; i++) {
        if ((login.value == db.users[i].login) && (password.value == db.users[i].pass)) {
            alert(`Siz saytga kirdingiz`)
            break;
        } else if((i + 1) === db.users.length) {
            alert(`Siz ro'yxatdan o'tishingiz kerak`)
            window.location.reload();
        }
    }

}
function showPassword(){
    if(showPass.checked){
        password.type = `text`;
    } else{
        password.type = `password`;
    }
}
function dbAdd(loginValue, passValue){
    let userDb = {
        login : loginValue,
        pass: passValue,
    }
    db.users.push(userDb);
}

