const produtos = [
	{
		nome: "Mouse Gamer",
		preco: 129.9,
		descricao: "Mouse ergonômico com sensor de alta precisão.",
	},
];

function cadastrarProduto(lista, novoProduto) {
	const nome = String(novoProduto?.nome ?? "").trim();
	const descricao = String(novoProduto?.descricao ?? "").trim();
	const preco = Number(novoProduto?.preco);

	if (nome.length < 3) {
		throw new Error("Nome do produto deve ter pelo menos 3 caracteres.");
	}

	if (!Number.isFinite(preco) || preco <= 0) {
		throw new Error("Preco invalido. Informe um numero maior que zero.");
	}

	if (!Number.isInteger(preco * 100)) {
		throw new Error("Preco invalido. Use no maximo duas casas decimais.");
	}

	const jaExiste = lista.some(
		(produto) => produto.nome.toLowerCase() === nome.toLowerCase(),
	);

	if (jaExiste) {
		throw new Error("Ja existe um produto com esse nome.");
	}

	const produtoCadastrado = {
		nome,
		preco,
		descricao,
	};

	lista.push(produtoCadastrado);
	return produtoCadastrado;
}

function exibirProduto(produto) {
	console.log("Novo produto cadastrado:");
	console.log(`Nome: ${produto.nome}`);
	console.log(`Preco: R$ ${produto.preco.toFixed(2)}`);
	console.log(`Descricao: ${produto.descricao}`);
}

// Cadastro de um novo produto com tratamento de erros
try {
	const novo = cadastrarProduto(produtos, {
		nome: "Teclado Mecanico",
		preco: 299.99,
		descricao: "Teclado ABNT2 com switches azuis e iluminacao RGB.",
	});

	exibirProduto(novo);
} catch (erro) {
	console.error("Erro ao cadastrar:", erro.message);
}

module.exports = {
	produtos,
	cadastrarProduto,
	exibirProduto,
};
