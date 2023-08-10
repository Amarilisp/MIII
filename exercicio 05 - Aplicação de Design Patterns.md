Exercício: Aplicação de Design Patterns em um Sistema de Gerenciamento de Tarefas

Cenário: Considere o cenário de um sistema de gerenciamento de tarefas, onde temos os seguintes requisitos:

O sistema deve permitir que os usuários criem tarefas com seus respectivos títulos e descrições.

Cada tarefa pode estar em um dos seguintes estados: "A fazer", "Em andamento" ou "Concluída".

O sistema deve permitir que os usuários atualizem o estado das tarefas.

O sistema deve exibir a lista de tarefas em cada estado.

Tarefa: Identifique o padrão de projeto mais apropriado para implementar o cenário acima e descreva como você aplicaria esse padrão para criar a solução.

Dicas:

Considere padrões como Singleton, Factory Method, Observer, State, ou outros que possam ser relevantes para o cenário.

Explique como o padrão de projeto escolhido ajudará a estruturar e organizar o código do sistema de gerenciamento de tarefas.

Experimente discutir suas soluções em grupo e a compartilharem suas justificativas para a escolha do padrão de projeto.

--------------------------------- RESPOSTA ---------------------------------------------

O padrão State é o mais apropriado para este cenário. Ele permite que um objeto altere seu comportamento quando seu estado interno muda. Isso é especialmente útil quando um objeto pode ter várias variações de comportamento com base em seu estado atual.

Definindo os Estados: Primeiro, definimos as diferentes classes para representar os estados possíveis das tarefas: "A fazer", "Em andamento" e "Concluída". Cada classe de estado implementa uma interface comum, que inclui métodos para atualizar o estado da tarefa e exibir as informações correspondentes.

Classe de Contexto (Tarefa): A classe que representa a tarefa contém uma referência para o objeto de estado atual. Ela delega as chamadas de métodos relacionados ao estado para o objeto de estado atual. Isso permite que a tarefa altere seu comportamento dinamicamente à medida que seu estado muda.

Transições de Estado: A classe de contexto (Tarefa) também contém métodos para atualizar o estado da tarefa. Quando uma tarefa muda de estado, a classe de contexto troca o objeto de estado atual para o novo estado correspondente. Isso é feito sem que a tarefa tenha que saber sobre os detalhes dos diferentes estados.

Benefícios: O padrão State ajuda a manter cada estado encapsulado em uma classe separada, facilitando a adição de novos estados no futuro sem afetar o código existente.
Evita uma lógica condicional excessiva no código da tarefa, tornando-o mais limpo e legível.
Facilita a extensão do sistema com novos comportamentos de estado, pois cada estado é uma classe separada.

Exibição de Tarefas: Para exibir a lista de tarefas em cada estado, podemos usar o padrão Observer. Cada estado da tarefa pode ser um observador que é notificado quando uma nova tarefa é adicionada ou quando o estado de uma tarefa existente é alterado. Dessa forma, os estados podem atualizar suas listas de tarefas correspondentes conforme necessário.

Factory Method (Opcional): Podemos também aplicar o padrão Factory Method para criar instâncias de diferentes estados de tarefas de maneira mais flexível e controlada.

Em resumo, o padrão State é uma escolha adequada para esse cenário, pois permite que as tarefas tenham comportamentos diferentes com base em seus estados, mantendo o código organizado e extensível. Além disso, a combinação com o padrão Observer pode lidar com a exibição das listas de tarefas em cada estado.
