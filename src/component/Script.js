
    function configureBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        const { method, headers } = opts;
        const body = opts.body && JSON.parse(opts.body);

        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(handleRoute, 500);

            function handleRoute() {
                switch (true) {
                    case url.endsWith('/users/authenticate') && method === 'POST':
                        return authenticate();
                    case url.endsWith('/register') && method === 'POST':
                        return register();
                    case url.endsWith('/') && method === 'GET':
                        return getUsers();
                    case url.match(/\/users\/\d+$/) && method === 'DELETE':
                        return deleteUser();
                    default:
                        // pass through any requests not handled above
                        return realFetch(url, opts)
                            .then(response => resolve(response))
                            .catch(error => reject(error));
                }
            }

            // route functions

            function authenticate() {
                const { username, password } = body;
                const user = users.find(x => x.username === username && x.password === password);
                if (!user) return error('Username or password is incorrect');
                return ok({
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                   
                });
            }

            function register() {
                const user = body;
    
                if (users.find(x => x.username === user.username)) {
                    return error(`Username  ${user.username} is already taken`);
                }
    
                // assign user id and a few other properties then save
                user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));

                return ok();
            }
    
            function getUsers() {
                if (!isLoggedIn()) return unauthorized();

                return ok(users);
            }
    
            function deleteUser() {
                if (!isLoggedIn()) return unauthorized();
    
                users = users.filter(x => x.id !== idFromUrl());
                localStorage.setItem('users', JSON.stringify(users));
                return ok();
            }

            // helper functions

            function ok(body) {
                resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) });
            }

            function unauthorized() {
                resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' })) });
            }

            function error(message) {
                resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) });
            }

            function isLoggedIn() {
                return headers['Authorization'] === 'Bearer fake-jwt-token';
            }
    
            function idFromUrl() {
                const urlParts = url.split('/');
                return parseInt(urlParts[urlParts.length - 1]);
            }
        });
    }
}


































var emailArray=[];
var passwordArray=[];

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");




   
    function register(){
       
        var email = document.getElementById("re").value;
        var password = document.getElementById("rp").value;
        var passwordRetype = document.getElementById("rrp").value;

            if (email == ""){
                alert("Email required.");
                return ;
            }
            else if (password == ""){
                alert("Password required.");
                return ;
            }
            else if (passwordRetype == ""){
                alert("Password required.");
                return ;
            }
            else if ( password != passwordRetype ){
                alert("Password don't match retype your Password.");
                return;
            }
            else if(emailArray.indexOf(email) == -1){
                emailArray.push(email);
                passwordArray.push(password);

                alert(email + "  Thanks for registration. \nTry to login Now");

                document.getElementById("re").value ="";
                document.getElementById("rp").value="";
                document.getElementById("rrp").value="";
            }
            else{
                alert(email + " is already register.");
                return ;
            }
    }

    function login(){
        
        
        var email = document.getElementById("se");
        var password = document.getElementById("sp");
        var i = emailArray.indexOf(email);

        

            if(emailArray.indexOf(email) == -1){
                if (email == ""){
                    alert("Email required.");
                    return ;
                }
                alert("Email does not exist.");
                return ;
            }
            else if(passwordArray[i] != password){
                if (password == ""){
                    alert("Password required.");
                    return ;
                }
                alert("Password does not match.");
                return ;
            }
            else {
                alert(email + " yor are login Now \n welcome to our website.");

                document.getElementById("se").value ="";
                document.getElementById("sp").value="";
                return ;
            }

    }

export {login}
export {register}
export {configureBackend}
