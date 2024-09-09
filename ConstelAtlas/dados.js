let dados = [
    {
        titulo: "Cruzeiro do Sul",
        descricao: "O Cruzeiro do Sul, ou Crux, é uma das constelações mais famosas do hemisfério sul. Sua cruz característica tem sido utilizada por navegantes para orientação.",
        link: "https://brasilescola.uol.com.br/geografia/cruzeiro-sul.htm",
        tags: "Cruzeiro do Sul, Crux, constelação, astronomia, hemisfério sul, estrelas, navegação, Brasil"
    },
    {
        titulo: "Constelação de Órion",
        descricao: "Órion é visível tanto no hemisfério norte quanto no sul, facilmente reconhecível pelas suas três estrelas alinhadas, conhecidas como as 'Três Marias'.",
        link: "https://www.tecmundo.com.br/ciencia/252922-constelacao-orion-o-significado.htm",
        tags: "Órion, Três Marias, Betelgeuse, Rigel, constelação, céu noturno, estrelas brilhantes"
    },
    {
        titulo: "Constelação de Escorpião",
        descricao: "Escorpião é uma das constelações mais proeminentes do hemisfério sul, reconhecível pela forma que lembra um escorpião. A estrela mais brilhante é Antares.",
        link: "https://www.mapadomeuceu.com.br/blog/constelacao-de-escorpiao/?srsltid=AfmBOoqOui1lM5-UCMC5BTPDN8Io-0PJbSmBap_B2bpYjt8bgG6gci61",
        tags: "Escorpião, Scorpius, Antares, constelação, céu noturno, astronomia, inverno, estrelas brilhantes"
    },
    {
        titulo: "Constelação de Centauro",
        descricao: "Centauro é uma vasta constelação visível no hemisfério sul, lar de Alfa Centauri, o sistema estelar mais próximo do nosso sistema solar.",
        link: "https://brasilescola.uol.com.br/astronomia/constelacao-centauro.htm",
        tags: "Centauro, Alfa Centauri, Beta Centauri, aglomerado globular, nebulosa, hemisfério sul, estrelas"
    },
    {
        titulo: "Constelação do Triângulo Austral",
        descricao: "O Triângulo Austral é uma pequena constelação no hemisfério sul, fácil de identificar graças às suas três estrelas brilhantes que formam um triângulo.",
        link: "https://www.constelacoes.net/constelacoes/triangulo-austral/",
        tags: "Triângulo Austral, navegação, hemisfério sul, astronomia, estrelas"
    },
    {
        titulo: "Constelação de Sagitário",
        descricao: "Sagitário é uma constelação proeminente no hemisfério sul, conhecida por abrigar o centro da Via Láctea e rica em objetos celestes.",
        link: "https://www.constelacoes.net/constelacoes/sagitario/",
        tags: "Sagitário, Via Láctea, mitologia, nebulosas, aglomerados estelares, céu noturno"
    },
    {
        titulo: "Constelação de Carina",
        descricao: "Carina é uma constelação do hemisfério sul que contém a segunda estrela mais brilhante do céu noturno, Canopus, e a Nebulosa de Carina.",
        link: "https://brasilescola.uol.com.br/astronomia/constelacao-carina.htm",
        tags: "Carina, Canopus, nebulosa, estrelas, Via Láctea, hemisfério sul"
    },
    {
        titulo: "Constelação de Andromeda",
        descricao: "Andromeda é visível em ambas as hemisférias e contém a Galáxia de Andrômeda, a galáxia mais próxima da Via Láctea.",
        link: "https://www.constelacoes.net/constelacoes/andromeda/",
        tags: "Andromeda, Galáxia de Andrômeda, céu noturno, astronomia, galáxias"
    },
    {
        titulo: "Constelação de Peixes",
        descricao: "Peixes é uma constelação zodiacal visível no hemisfério sul. É conhecida por suas estrelas mais fracas e a sua forma lembra dois peixes ligados por uma corda.",
        link: "https://www.constelacoes.net/constelacoes/peixes/",
        tags: "Peixes, constelação zodiacal, céu noturno, estrelas, mitologia"
    },
    {
        titulo: "Constelação de Touro",
        descricao: "Touro é uma constelação zodiacal conhecida pela estrela Aldebaran e pelo aglomerado estelar das Plêiades.",
        link: "https://www.constelacoes.net/constelacoes/touro/",
        tags: "Touro, Aldebaran, Plêiades, constelação zodiacal, céu noturno"
    },
    {
        titulo: "Constelação de Leão",
        descricao: "Leão é uma constelação zodiacal que é visível no céu do hemisfério sul durante a primavera. É conhecida pela estrela Régulo.",
        link: "https://www.constelacoes.net/constelacoes/leao/",
        tags: "Leão, Régulo, constelação zodiacal, céu noturno, primavera"
    },
    {
        titulo: "Constelação de Hércules",
        descricao: "Hércules é uma constelação do hemisfério norte, mas também pode ser vista no hemisfério sul. É famosa pelo Aglomerado Estelar M13.",
        link: "https://www.constelacoes.net/constelacoes/hercules/",
        tags: "Hércules, M13, aglomerado estelar, céu noturno, astronomia"
    },
    {
        titulo: "Constelação de Libra",
        descricao: "Libra é uma constelação zodiacal visível no hemisfério sul. Representa a balança e é conhecida por suas estrelas relativamente fracas.",
        link: "https://www.constelacoes.net/constelacoes/libra/",
        tags: "Libra, constelação zodiacal, céu noturno, estrelas, mitologia"
    },
    {
        titulo: "Constelação de Áries",
        descricao: "Áries é uma constelação zodiacal visível no céu do hemisfério sul. É conhecida pela estrela Hamal.",
        link: "https://www.constelacoes.net/constelacoes/aries/",
        tags: "Áries, Hamal, constelação zodiacal, céu noturno"
    },
    {
        titulo: "Constelação de Cassiopeia",
        descricao: "Cassiopeia é uma constelação do hemisfério norte, visível em algumas partes do hemisfério sul. É facilmente reconhecível por seu formato de W.",
        link: "https://www.constelacoes.net/constelacoes/cassiopeia/",
        tags: "Cassiopeia, formato de W, constelação, céu noturno"
    },
    {
        titulo: "Constelação de Ceféu",
        descricao: "Ceféu é uma constelação do hemisfério norte visível em algumas partes do hemisfério sul. É conhecida por sua forma de uma casa e a estrela polida Alderamin.",
        link: "https://www.constelacoes.net/constelacoes/cefeu/",
        tags: "Ceféu, Alderamin, constelação, céu noturno"
    },
    {
        titulo: "Constelação de Peixes Austríacos",
        descricao: "Peixes Austríacos é uma constelação do hemisfério sul que contém várias estrelas fracas, mas é importante para a astronomia austral.",
        link: "https://www.constelacoes.net/constelacoes/peixes-austral/",
        tags: "Peixes Austríacos, constelação, hemisfério sul, céu noturno"
    },
    {
        titulo: "Constelação de Musca",
        descricao: "Musca é uma pequena constelação do hemisfério sul, conhecida por suas estrelas fracas e por estar próxima do Cruzeiro do Sul.",
        link: "https://www.constelacoes.net/constelacoes/musca/",
        tags: "Musca, constelação, hemisfério sul, céu noturno"
    },
    {
        titulo: "Constelação de Volans",
        descricao: "Volans é uma constelação do hemisfério sul que representa um peixe voador. É uma constelação pequena e menos conhecida.",
        link: "https://www.constelacoes.net/constelacoes/volans/",
        tags: "Volans, peixe voador, constelação, hemisfério sul"
    },
    {
        titulo: "Constelação de Dorado",
        descricao: "Dorado é uma constelação do hemisfério sul que contém a famosa Nebulosa do Dorado, uma região de formação estelar ativa.",
        link: "https://www.constelacoes.net/constelacoes/dorado/",
        tags: "Dorado, Nebulosa do Dorado, constelação, hemisfério sul, formação estelar"
    },
    {
        titulo: "Constelação de Retículo",
        descricao: "Retículo é uma pequena constelação do hemisfério sul que representa um retículo de astronomia. É conhecida por suas estrelas fracas.",
        link: "https://www.constelacoes.net/constelacoes/reticulo/",
        tags: "Retículo, constelação, hemisfério sul, céu noturno"
    },
    {
        titulo: "Constelação de Grus",
        descricao: "Grus é uma constelação do hemisfério sul conhecida por seu formato de grou. É visível no céu noturno durante o outono e verão.",
        link: "https://www.constelacoes.net/constelacoes/grus/",
        tags: "Grus, constelação, hemisfério sul, céu noturno, outono"
    },
    {
        titulo: "Constelação de Norma",
        descricao: "Norma é uma constelação do hemisfério sul que representa uma régua de medição. É visível em noites claras e possui poucas estrelas brilhantes.",
        link: "https://www.constelacoes.net/constelacoes/norma/",
        tags: "Norma, constelação, hemisfério sul, estrelas, céu noturno"
    },
    {
        titulo: "Constelação de Telescópio",
        descricao: "Telescópio é uma pequena constelação do hemisfério sul que representa um telescópio astronômico. É visível durante as noites claras.",
        link: "https://www.constelacoes.net/constelacoes/telescopio/",
        tags: "Telescópio, constelação, hemisfério sul, céu noturno"
    },
    {
        titulo: "Constelação de Hidra",
        descricao: "Hidra é a maior constelação do céu e está visível em partes do hemisfério sul. Representa uma serpente e contém várias estrelas e objetos astronômicos.",
        link: "https://www.constelacoes.net/constelacoes/hidra/",
        tags: "Hidra, constelação, serpente, céu noturno, hemisfério sul"
    },
    {
        titulo: "Constelação de Pavo",
        descricao: "Pavo é uma constelação do hemisfério sul que representa um pavão. É visível durante o outono e contém estrelas e objetos de céu profundo.",
        link: "https://www.constelacoes.net/constelacoes/pavo/",
        tags: "Pavo, pavão, constelação, hemisfério sul, céu noturno"
    },
    {
        titulo: "Constelação de Libra",
        descricao: "Libra é uma constelação zodiacal visível no hemisfério sul. Representa a balança e é conhecida por suas estrelas relativamente fracas.",
        link: "https://www.constelacoes.net/constelacoes/libra/",
        tags: "Libra, constelação zodiacal, céu noturno, estrelas, mitologia"
    },
    {
        titulo: "Constelação de Áquila",
        descricao: "Áquila é uma constelação visível no hemisfério sul que representa uma águia. É conhecida por sua estrela mais brilhante, Altair.",
        link: "https://www.constelacoes.net/constelacoes/aquila/",
        tags: "Áquila, Altair, constelação, céu noturno, hemisfério sul"
    },
    {
        titulo: "Constelação de Lira",
        descricao: "Lira é uma constelação visível em várias partes do mundo e é conhecida por sua estrela principal, Vega, uma das estrelas mais brilhantes do céu.",
        link: "https://www.constelacoes.net/constelacoes/lira/",
        tags: "Lira, Vega, constelação, céu noturno, hemisfério sul"
    },
    {
        titulo: "Constelação de Pégaso",
        descricao: "Pégaso é uma constelação do hemisfério norte visível em partes do hemisfério sul, representando o cavalo alado da mitologia grega.",
        link: "https://www.constelacoes.net/constelacoes/pegaso/",
        tags: "Pégaso, cavalo alado, constelação, céu noturno"
    },
    {
        titulo: "Constelação de Auriga",
        descricao: "Auriga é uma constelação do hemisfério norte visível em partes do hemisfério sul. É conhecida pela estrela Capella e pela forma de um condutor de carruagem.",
        link: "https://www.constelacoes.net/constelacoes/auriga/",
        tags: "Auriga, Capella, constelação, céu noturno"
    },
    {
        titulo: "Constelação de Cetus",
        descricao: "Cetus é uma grande constelação do hemisfério norte que também pode ser vista em partes do hemisfério sul. Representa um monstro marinho da mitologia.",
        link: "https://www.constelacoes.net/constelacoes/cetus/",
        tags: "Cetus, monstro marinho, constelação, céu noturno"
    },
    {
        titulo: "Constelação de Ophiuchus",
        descricao: "Ophiuchus é uma constelação visível no hemisfério sul que representa o portador da serpente. É uma das constelações zodiacais.",
        link: "https://www.constelacoes.net/constelacoes/ophiuchus/",
        tags: "Ophiuchus, portador da serpente, constelação zodiacal, céu noturno"
    },
    {
        titulo: "Constelação de Phoenix",
        descricao: "Phoenix é uma constelação do hemisfério sul que representa a ave fênix. É visível durante o verão e contém algumas estrelas interessantes.",
        link: "https://www.constelacoes.net/constelacoes/phoenix/",
        tags: "Phoenix, ave fênix, constelação, hemisfério sul"
    },
    {
        titulo: "Constelação de Columba",
        descricao: "Columba é uma pequena constelação do hemisfério sul que representa uma pomba. É visível durante as noites claras.",
        link: "https://www.constelacoes.net/constelacoes/columba/",
        tags: "Columba, pomba, constelação, hemisfério sul"
    },
    {
        titulo: "Constelação de Apus",
        descricao: "Apus é uma pequena constelação do hemisfério sul que representa um pássaro do paraíso. É visível em noites claras e contém algumas estrelas de interesse.",
        link: "https://www.constelacoes.net/constelacoes/apus/",
        tags: "Apus, pássaro do paraíso, constelação, hemisfério sul"
    },
    {
        titulo: "Constelação de Sculptor",
        descricao: "Sculptor é uma constelação do hemisfério sul que representa um escultor. É visível durante o verão e contém algumas estrelas e objetos de céu profundo.",
        link: "https://www.constelacoes.net/constelacoes/sculptor/",
        tags: "Sculptor, constelação, hemisfério sul, céu noturno"
    },
    {
        titulo: "Constelação de Chamaeleon",
        descricao: "Chamaeleon é uma constelação do hemisfério sul que representa um camaleão. É visível em noites claras e contém algumas estrelas e objetos astronômicos.",
        link: "https://www.constelacoes.net/constelacoes/chamaeleon/",
        tags: "Chamaeleon, camaleão, constelação, hemisfério sul"
    },
    {
        titulo: "Constelação de Lupus",
        descricao: "Lupus é uma constelação do hemisfério sul que representa um lobo. É visível durante o inverno e contém várias estrelas de interesse.",
        link: "https://www.constelacoes.net/constelacoes/lupus/",
        tags: "Lupus, lobo, constelação, hemisfério sul"
    },
    {
        titulo: "Constelação de Hydra",
        descricao: "Hydra é a maior constelação do céu e está visível em partes do hemisfério sul. Representa uma serpente e contém várias estrelas e objetos astronômicos.",
        link: "https://www.constelacoes.net/constelacoes/hydra/",
        tags: "Hydra, serpente, constelação, céu noturno"
    },
    {
        titulo: "Constelação de Tucana",
        descricao: "Tucana é uma constelação do hemisfério sul que representa um tucano. É visível durante o verão e contém vários objetos astronômicos interessantes.",
        link: "https://www.constelacoes.net/constelacoes/tucana/",
        tags: "Tucana, tucano, constelação, hemisfério sul"
    }
];
