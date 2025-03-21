document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    const produtos = {

        "124": {
            nome: "Carmed Ácido Hialurônico (10 Unidades)",
            preco: "99,50",
            precoAnt: "199,00",
            imagem: "img-tumb/imagem01.webp",
            descricao: `
                  <h1>Indicação</h1> <br>
                    Hidratante labial com ácido hialurônico, incolor. Hidrata e repara profundamente os lábios e possui ação antioxidante. Além de deixar os lábios volumosos e preenchidos. Uso diário.
                    <br><br>
                - Sem parabenos e conservantes
                - Não testado em animais
                    <br><br>
                   <h1>composição</h1> <br>
                   Manteiga de Karité + Vitamina E + Ácido Hialurônico
            ` ,
            thumbnails: ["img-tumb/imagem01.webp"],
            checkoutLink: "https://checkout.oficialcarmed.com/VCCL1O8SBOT1" // 🔹 Adicionado link de checkout
        },
        "125": {
            nome: "Carmed Bff Beijinho Fps30 (10 Unidades)",
            preco: "99,50",
            precoAnt: "199,00",
            imagem: "img-tumb/imagem02.webp",
            descricao: `
                 <h1>Indicação</h1> <br>
                    Possui efeito gloss e é incolor. Fórmula com manteiga de karité com alto poder de hidratação e fator de proteção Fps30.)`,
            thumbnails: ["img-tumb/imagem02.webp"],
            checkoutLink: "https://checkout.oficialcarmed.com/VCCL1O8SBOTA" // 🔹 Adicionado link de checkout
        },
        "126": {
            nome: "Carmed bff Rosa Glitte (10 Unidades)",
            preco: "99,50",
            precoAnt: "199,00",
            imagem: "img-tumb/imagem03.webp",
            descricao: `
           <h1>Indicação</h1> <br>
                    Possui alto poder de hidratação e evita rachaduras, deixando os lábios macios e saudáveis. Possui efeito gloss e rosa glitter.
                Sua fórmula conta com manteiga de cacau e não contém parabenos, conservantes e teste em animais. `,
            thumbnails: ["img-tumb/imagem03.webp"],
            checkoutLink: "https://checkout.oficialcarmed.com/VCCL1O8SBOT9" // 🔹 Adicionado link de checkout
        },
        "127": {
            nome: "Carmed Fini Bananas (10 Unidades)",
            preco: "99,50",
            precoAnt: "199,00",
            imagem: "img-tumb/imagem04.webp",
            descricao: `
                    Hidratante labial de uso diário incolor com aroma de Carmed Fini Bananas, com alto poder de hidratação, protege contra o ressecamento, deixando os lábios macios e saudáveis. Sem parabenos e conservantes;
                    Não testado em animais; Pode ser usado a partir de 3 anos.
                    Hidratante labial em bisnaga.
                    <br><br>
                    `,
            thumbnails: ["img-tumb/imagem04.webp"],
            checkoutLink: "https://checkout.oficialcarmed.com/VCCL1O8SBOSV" // 🔹 Adicionado link de checkout
        },
        "128": {
            nome: "Carmed Fini Beijos (10 Unidades)",
            preco: "99,50",
            precoAnt: "199,00",
            imagem: "img-tumb/imagem05.webp",
            descricao: `
            <h1>Indicação</h1> <br>
                 Hidratante labial de uso diário com cor rosa, com aroma de Carmed Fini Beijos com cor, com alto poder de hidratação, protege contra o ressecamento, deixando os lábios macios e saudáveis. Sem parabenos e conservantes; Não testado em animais;
                Pode ser usado a partir de 3 anos.
                Hidratante labial em bisnaga.
                <br>
            `,
            thumbnails: ["img-tumb/imagem05.webp"],
            checkoutLink: "https://checkout.oficialcarmed.com/VCCL1O8SBOSW" // 🔹 Adicionado link de checkout
        },
        "129": {
            nome: "Carmed Fini Dentaduras (10 Unidades)",
            preco: "99,50",
            precoAnt: "199,00",
            imagem: "img-tumb/imagem06.webp",
            descricao: `
                <h1>Indicação</h1> <br>
                <br>
                    Hidratante labial de uso diário incolor com aroma de Carmed Fini Dentaduras, com alto poder de hidratação, protege contra o ressecamento, deixando os lábios macios e saudáveis. Sem parabenos e conservantes;
                    Não testado em animais; Pode ser usado a partir de 3 anos.
                    Hidratante labial em bisnaga.
            `,
            thumbnails: ["img-tumb/imagem06.webp"],
            checkoutLink: "https://checkout.oficialcarmed.com/VCCL1O8SBOSX" // 🔹 Adicionado link de checkout
        },
        "130": {
            nome: "Carmed Hidratante Labial Baunilha (10 Unidades)",
            preco: "99,50",
            precoAnt: "199,00",
            imagem: "img-tumb/imagem07.webp",
            descricao: `
            <h1>Indicação</h1> <br>
            <br> 
                Hidratante labial de uso diário incolor com aroma de Carmed Fini Dentaduras, com alto poder de hidratação, protege contra o ressecamento, deixando os lábios macios e saudáveis. Sem parabenos e conservantes;
                Não testado em animais; Pode ser usado a partir de 3 anos.
                Hidratante labial em bisnaga.
            `,
            thumbnails: ["img-tumb/imagem07.webp"],
            checkoutLink: "https://checkout.oficialcarmed.com/VCCL1O8SBOT2" // 🔹 Adicionado link de checkout
        },
        "131": {
            nome: "Carmed Hidratante Labial Cereja (10 Unidades)",
            preco: "99,50",
            precoAnt: "199,00",
            imagem: "img-tumb/imagem08.webp",
            descricao: `
                <h1>Indicação</h1> <br>
                <br> 
                Hidratante labial incolor, disponível nos sabores Cereja, Melancia, Menta, Baunilha e Pêssego. Com alto poder de hidratação, mantém os lábios macios, protegidos e hidratados, além de evitar rachaduras. Uso diário.
                <br> <br>
                - Sem parabenos e conservantes;<br>
                - Não testado em animais;<br>
                - Use com batom.<br>
                <br> <br>

                <h1>Composição</h1> <br>
                Sabores Cereja, Melancia, Menta: Lanolina + Manteiga de cacau + Mentol + Vaselina + Cera de abelha.
                <br><br>
                Sabores Pêssego e Baunilha: Lanolina + Manteiga de cacau + Vaselina + Cera de abelha.
            `,
            thumbnails: ["img-tumb/imagem08.webp"],
            checkoutLink: "https://checkout.oficialcarmed.com/VCCL1O8SBOT3" // 🔹 Adicionado link de checkout
        },
        "132": {
            nome: "Carmed Hidratante Labial Melancia (10 Unidades)",
            preco: "99,50",
            precoAnt: "199,00",
            imagem: "img-tumb/imagem09.webp",
            descricao: `
                <h1>Indicação</h1> <br>
                <br> 
                Hidratante labial incolor, disponível nos sabores Cereja, Melancia, Menta, Baunilha e Pêssego. Com alto poder de hidratação, mantém os lábios macios, protegidos e hidratados, além de evitar rachaduras. Uso diário.
                <br> 
                - Sem parabenos e conservantes;<br>
                - Não testado em animais;<br>
                - Use com batom.<br>
                <br>

                <h1>Composição</h1> <br>
                Sabores Cereja, Melancia, Menta: Lanolina + Manteiga de cacau + Mentol + Vaselina + Cera de abelha.
                <br><br>
                Sabores Pêssego e Baunilha: Lanolina + Manteiga de cacau + Vaselina + Cera de abelha.
            `,
            thumbnails: ["img-tumb/imagem09.webp"],
            checkoutLink: "https://checkout.oficialcarmed.com/VCCL1O8SBOT4" // 🔹 Adicionado link de checkout
        },
        "133": {
            nome: "Carmed Hidratante Labial Menta (10 Unidades)",
            preco: "99,50",
            precoAnt: "199,00",
            imagem: "img-tumb/imagem10.webp",
            descricao: `
                <h1>Indicação</h1> <br>
                
                Hidratante labial incolor, disponível nos sabores Cereja, Melancia, Menta, Baunilha e Pêssego. Com alto poder de hidratação, mantém os lábios macios, protegidos e hidratados, além de evitar rachaduras. Uso diário.
                <br> 
                - Sem parabenos e conservantes;<br>
                - Não testado em animais;<br>
                - Use com batom.<br><br>

                <h1>Composição</h1> <br>
                Sabores Cereja, Melancia, Menta: Lanolina + Manteiga de cacau + Mentol + Vaselina + Cera de abelha.
                <br><br>
                Sabores Pêssego e Baunilha: Lanolina + Manteiga de cacau + Vaselina + Cera de abelha.
            `,
            thumbnails: ["img-tumb/imagem10.webp"],
            checkoutLink: "https://checkout.oficialcarmed.com/VCCL1O8SBOT5" // 🔹 Adicionado link de checkout
        },
        "134": {
            nome: "Carmed Hidratante Labial Pêssego (10 Unidades)",
            preco: "99,50",
            precoAnt: "199,00",
            imagem: "img-tumb/imagem11.webp",
            descricao: `
                <h1>Indicação</h1> <br>
            
                Hidratante labial incolor, disponível nos sabores Cereja, Melancia, Menta, Baunilha e Pêssego. Com alto poder de hidratação, mantém os lábios macios, protegidos e hidratados, além de evitar rachaduras. Uso diário.
                <br> 
                - Sem parabenos e conservantes;<br>
                - Não testado em animais;<br>
                - Use com batom.<br>
            <br>
                <h1>Composição</h1> <br>
                Sabores Cereja, Melancia, Menta: Lanolina + Manteiga de cacau + Mentol + Vaselina + Cera de abelha.
                <br><br>
                Sabores Pêssego e Baunilha: Lanolina + Manteiga de cacau + Vaselina + Cera de abelha.
            `,
            thumbnails: ["img-tumb/imagem11.webp"],
            checkoutLink: "https://checkout.oficialcarmed.com/VCCL1O8SBOT6" // 🔹 Adicionado link de checkout
        },
        "135": {
            nome: "Kit Carmed (14 Unidades)",
            preco: "129,90",
            precoAnt: "259,00",
            imagem: "img-tumb/imagem12.jpeg",
            descricao: `
                <h1>Indicação</h1> <br>
            
                O Kit inclui 14 unidades de protetor labial, sendo uma de cada sabor, perfeito para hidratar e proteger os lábios contra o ressecamento provocado pelas condições climáticas. Sua fórmula proporciona maciez e conforto, sendo ideal para uso diário e fácil de levar para qualquer lugar. Indicado para toda a família, previne o ressecamento e mantém os lábios sempre hidratados.
            `,
            thumbnails: ["img-tumb/imagem12.jpeg"],
            checkoutLink: "https://checkout.oficialcarmed.com/VCCL1O8SBOTB" // 🔹 Adicionado link de checkout
        },
        "136": {
            nome: "Carmed Maçã do Amor (10 Unidades)",
            preco: "99,90",
            precoAnt: "129,00",
            imagem: "img-tumb/imagem13.avif",
            descricao: `
                <h1>Indicação</h1> <br>
                <br> 
                Hidratante labial de uso diário com cor vermelha e aroma de maçã do amor, com alto poder de hidratação, protege contra o ressecamento, deixando os lábios macios e saudáveis. Sem parabenos e conservantes;
                Não testado em animais; Pode ser usado a partir de 3 anos.
                Hidratante labial em bisnaga.
                <br> 
                        `,
            thumbnails: ["img-tumb/imagem13.avif"],
            checkoutLink: "https://checkout.oficialcarmed.com/VCCL1O8SBOT0" // 🔹 Adicionado link de checkout
        },

        "137": {
            nome: "Carmed Protetor Labial Água de Coco FPS 30 (10 Unidades)",
            preco: "99,50",
            precoAnt: "199,00",
            imagem: "img-tumb/imagem14.webp",
            descricao: `
                <h1>Indicação</h1> <br>
                
                    Carmed Protetor Labial possui fator de proteção solar 30, Para deixar ainda mais agradável, possui aroma de água de coco e é resistente à água - perfeito para aproveitar ao máximo os dias quentes sem se preocupar.

                    - Sem parabenos e conservantes<br>
                    - Não testado em animais<br>
                    - Resistente a água
                     <br>
                     <h1>Composição</h1> <br>
                 Manteiga de Karité + Vitamina E + FPS30
                        `,
            thumbnails: ["img-tumb/imagem14.webp"],
            checkoutLink: "https://checkout.oficialcarmed.com/VCCL1O8SBOT7" // 🔹 Adicionado link de checkout
        },
        "138": {
            nome: "Carmed Protetor Labial Água de Coco FPS 30 (10 Unidades)",
            preco: "99,50",
            precoAnt: "199,00",
            imagem: "img-tumb/imagem15.webp",
            descricao: `
              <h1>Indicação</h1> <br>
              
                Carmed Protetor Labial possui fator de proteção solar 30, é incolor e possui alto poder hidratante. Ideal para o uso diário e manter os lábios sempre bonitos e protegidos.
                    <br>
                - Sem parabenos e conservantes<br>
                - Não testado em animais<br>
                - Resistente a água<br>

                 <h1>Composição</h1> <br>
                 Manteiga de Karité + Vitamina E + FPS30
                       `,
            thumbnails: ["img-tumb/imagem15.webp"],
            checkoutLink: "https://checkout.oficialcarmed.com/VCCL1O8SBOT8" // 🔹 Adicionado link de checkout
        },
    
    };

    // Verifica se o produto existe
    if (produtos[productId]) {
        const produto = produtos[productId];

        // Atualiza os elementos da página
        document.getElementById("product-name").textContent = produto.nome;
        document.getElementById("product-price").textContent = `R$ ${produto.preco}`;
        document.getElementById("old-product-price").textContent = `R$ ${produto.precoAnt}`;
        document.querySelector(".product-description").innerHTML = produto.descricao;
        document.getElementById("main-image").src = produto.imagem;

        // Atualiza as thumbnails
        const thumbnailsContainer = document.querySelector(".thumbnails");
        thumbnailsContainer.innerHTML = ""; // Limpa as imagens antigas
        produto.thumbnails.forEach(imgSrc => {
            const imgElement = document.createElement("img");
            imgElement.classList.add("thumbnail");
            imgElement.src = imgSrc;
            imgElement.alt = "Thumbnail";
            imgElement.addEventListener("click", () => {
                document.getElementById("main-image").src = imgSrc;
            });
            thumbnailsContainer.appendChild(imgElement);
        });

        // 🔹 Atualiza o botão "Comprar" com o link correto
        document.getElementById("btn-adicionar-carrinho").onclick = function () {
            window.location.href = produto.checkoutLink;
        };
    } 
});
