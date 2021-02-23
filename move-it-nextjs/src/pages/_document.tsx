import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 *
 * É carregado somente uma vez na aplicação
 *
 * Retorna o HTML da página (importando a tag  HTML, Head, Main e NextScript) de dentro do Next/document
 *
 * recomendao colocar links globais do head aqui
 *
 */

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="shortcut icon" href="favicon.png" type="image/png" />

					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
