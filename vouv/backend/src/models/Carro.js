// 1.
class Carro {
    constructor(idCarro, nome, cor, disponivel, anoFabricacao) {
        this.idCarro = idCarro;       
        this.nome = nome;             
        this.cor = cor;               
        this.disponivel = disponivel; 
        this.anoFabricacao = anoFabricacao; 
    }
}

// 2. 
const carro1 = new Carro(1, "Onix", "Preto", true, 2023);
const carro2 = new Carro(2, "Corolla", "Prata", false, 2024);
const carro3 = new Carro(3, "Compass", "Branco", true, 2025);

// 3. 
console.log("--- 3. Carros Criados Inicialmente --");
console.log("Carro 1:", carro1);
console.log("Carro 2:", carro2);
console.log("Carro 3:", carro3);

// 4. 
carro1.disponivel = false; 
carro2.cor = "Azul";       

// 
console.log("\n-- 4. Objetos Após as Modificações ---");
console.log("Carro 1 (Atualizado)", carro1);
console.log("Carro 2 (Atualizado):", carro2);
