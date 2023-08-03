### Exercício 1- Princípio da Responsabilidade Única (SRP)

Imagine que você está desenvolvendo um sistema de gerenciamento de tarefas (to-do list) para uma equipe de desenvolvimento. Crie um código em JavaScript para implementar a classe Tarefa que seja responsável apenas por representar os dados de uma tarefa, sem envolver a lógica de prioridade ou manipulação de datas.

Requisitos:

* A classe Tarefa deve conter os seguintes atributos: id, descricao, status (concluída ou não concluída) e responsavel.

* Crie um método chamado marcarConcluida que altera o status da tarefa para concluída.

* Crie um método chamado exibirDetalhes que imprime no console os detalhes da tarefa, incluindo sua descrição, status e responsável.

`Dica`: Caso haja necessidade de adicionar lógica de prioridade ou manipulação de datas, considere criar classes separadas para lidar com essas responsabilidades.