# desafio1-node

# Teste projeto node 4

Este projeto codifica e decodifica mensagens de um arquivo.

As mensagens dentro dos arquivos estão cifradas em base64.

Por exemplo, na seguinte pasta:

```bash
ls node-exercicio-4
index.js  package.json  README.md  texto1.txt  texto2.txt
```

Ao executar o seguinte comando:

```bash
node index.js decifra texto1.txt
```

No console deve aparecer o conteúdo do texto1.txt em português em vez de base64.


E ao executar o seguinte comando:

```bash
node index.js cifra texto2.txt
```

Deve aparecer o resultado da transofrmação do texto 2 para base64.

A documentação sobre como ler arquivos usando node pode ser vista
[aqui](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options)

A documentação sobre como transformar base64 em texto plano e vice-versa está
[aqui](https://stackabuse.com/encoding-and-decoding-base64-strings-in-node-js/)


