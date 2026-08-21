
const Genero = Object.freeze({
    M: "M",
    F: "F",
    OUTRO: "Outro"
});

class Usuario {
    id;
    nome;
    senha;
    dataNascimento;
    genero;
    isAdmin;

    constructor(id, nome, senha, dataNascimento, genero) {
        this.id = id;
        this.nome = nome;
        this.senha = senha;
        this.dataNascimento = new Date(dataNascimento);
        this.genero = genero;
        this.isAdmin = false;
    }

    perfil() {
        return "Nome: " + this.nome + " | Data de Nascimento: " + this.dataNascimento.toLocaleDateString();
    }
}

const user1 = new Usuario(1, "Vander Martins", "123", "2000-04-14T00:00:00", Genero.M);

console.log("--- Usuário Criado ---");
console.log(user1);
console.log(user1.perfil());

user1.nome = "Vander Alves";

console.log("\n--- Usuário Após Alterar Nome ---");
console.log(user1);
