const { cadastrarProduto, exibirProduto } = require("./index");

describe("cadastrarProduto", () => {
	test("deve cadastrar um produto valido e adicionar na lista", () => {
		const lista = [];
		const novoProduto = {
			nome: "Monitor 24",
			preco: 899.9,
			descricao: "Monitor Full HD de 24 polegadas com HDMI.",
		};

		const resultado = cadastrarProduto(lista, novoProduto);

		expect(resultado).toEqual(novoProduto);
		expect(lista).toHaveLength(1);
		expect(lista[0].nome).toBe("Monitor 24");
	});

	test("deve falhar quando o nome tiver menos de 3 caracteres", () => {
		const lista = [];

		expect(() =>
			cadastrarProduto(lista, {
				nome: "TV",
				preco: 1200,
				descricao: "Televisao com boa definicao de imagem.",
			}),
		).toThrow("Nome do produto deve ter pelo menos 3 caracteres.");
	});

	test("deve falhar quando o preco for menor ou igual a zero", () => {
		const lista = [];

		expect(() =>
			cadastrarProduto(lista, {
				nome: "Cadeira",
				preco: 0,
				descricao: "Cadeira ergonomica para escritorio.",
			}),
		).toThrow("Preco invalido. Informe um numero maior que zero.");
	});

	test("deve falhar quando o preco tiver mais de duas casas decimais", () => {
		const lista = [];

		expect(() =>
			cadastrarProduto(lista, {
				nome: "Fone Bluetooth",
				preco: 199.999,
				descricao: "Fone sem fio com cancelamento de ruido.",
			}),
		).toThrow("Preco invalido. Use no maximo duas casas decimais.");
	});

	test("deve falhar quando o nome do produto ja existir (case-insensitive)", () => {
		const lista = [
			{
				nome: "Mouse Gamer",
				preco: 129.9,
				descricao: "Mouse com alta precisao.",
			},
		];

		expect(() =>
			cadastrarProduto(lista, {
				nome: "mouse gamer",
				preco: 159.9,
				descricao: "Outra versao do mesmo produto.",
			}),
		).toThrow("Ja existe um produto com esse nome.");
	});
});

describe("exibirProduto", () => {
	test("deve exibir os dados do produto no console", () => {
		const spy = jest.spyOn(console, "log").mockImplementation(() => {});

		exibirProduto({
			nome: "Teclado",
			preco: 300,
			descricao: "Teclado mecanico ABNT2.",
		});

		expect(spy).toHaveBeenCalledWith("Novo produto cadastrado:");
		expect(spy).toHaveBeenCalledWith("Nome: Teclado");
		expect(spy).toHaveBeenCalledWith("Preco: R$ 300.00");
		expect(spy).toHaveBeenCalledWith("Descricao: Teclado mecanico ABNT2.");

		spy.mockRestore();
	});
});
