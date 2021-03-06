export const templHeader = {
    render: (page) => {

        let menu

        switch (page) {
            case 'login.html':
                menu = `
                    <li><a href="./registro.html">Registro</a></li>
                    <li><a href="./index.html">Inicio</a></li>
                `
                break;
        
            case 'registro.html':
                menu = `
                    <li><a href="./index.html">Inicio</a></li>
                    <li><a href="./login.html">Login</a></li>
                `
                break;

            case 'usuario.html':
                menu = `
                    <li><a href="#">Perfil....</a></li>
                    <li><a href="./index.html">Logout</a></li>
                `
                    break;

            default:
                menu = `
                    <li><a href="./registro.html">Registro</a></li>
                    <li><a href="./login.html">Login</a></li>
                `
                break;
        }
    
        return ` 
        <div class="menu">
            <ul>${menu}</ul>
        </div>
        <h1>Curso JS</h1>
        `
    }
}

