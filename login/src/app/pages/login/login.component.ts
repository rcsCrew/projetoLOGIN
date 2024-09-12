import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    username: 'user1',
    password: 'senha1'
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const headers = { 'Content-Type': 'application/json' };
    this.http.post<any>('https://ramonsenger.com/testes/index.php', this.loginData, { headers })
      .subscribe(response => {
        console.log('Response:', response);
        if (response.status === 'success') {
          // Armazena o token no localStorage
          localStorage.setItem('authToken', response.token);

          // Redireciona para a página hub
          this.router.navigate(['/hub']);

          // Configura a expiração do token para 4 minutos
          setTimeout(() => {
            this.logout();  // Função para deslogar após 4 minutos
          }, 4 * 60 * 1000);  // 4 minutos em milissegundos
        } else {
          alert(response.message);
        }
      }, error => {
        console.log('Erro: ', error);
        alert('Erro ao tentar fazer login. Tente novamente mais tarde.');
      });
  }

  // Função de logout para remover o token e redirecionar para a página de login
  logout() {
    localStorage.removeItem('authToken');
    alert('Sua sessão expirou. Faça login novamente.');
    this.router.navigate(['/login']);
  }

}
