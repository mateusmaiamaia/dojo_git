# Comandos úteis
## Branches
* Verificar a branch atual
  ```$ git branch```
* Listar as branches que estão acessíveis pelo projeto local
  ```$ git branch -a```
* Deletar branch local
  ```$ git branch -d <nome_da_branch>```
* Criar branch local
  ```$ git branch -b <nome_da_branch>```
* Demais informações sobre flags
  ```$ git branch -h```
  
## Commits
* Commitar com a mensagem em um único comando
  ```$ git commit -m <mensagem>```

* Abrir editor para escrever mensagem de commit
  ```$ git commit```
  
* Editar último commit local (mensagem e conteúdo)
  ```$ git commit --amend```

## Stage/Unstage
* Parar de rastrear algum arquivo
  ```$ git reset <arquivo>```
  
* Rastrear todos os arquivos editados/criados
  ```$ git add .```
  
* Rastrear algum/alguns arquivos
  ```$ git add <arquivo>```
  
## Push
* Atualizar repositório remoto
  ```$ git push origin <nome_da_branch>```
  
* Forçar atualização com repositório remoto
  ```$ git push -f origin <nome_da_branch>```
## Pull
* Atualizar branch local com a branch remota
  ```$ git pull origin <nome_da_branch>```
* Atualizar branch local com a branch remota em casos de conflito
  ```$ git pull --rebase origin <nome_da_branch>```

# Dojo de Git
Dojo de git do grupo 1 da disciplina de EPS.

## Passos a serem executados
### 1. Clone
Clonem esse repositório para suas máquinas.  
```$ git clone https://github.com/mateusmaiamaia/dojo_git.git``

### 2. Branches

De acordo com nossa política de contribuição, devemos seguir o padrão estipulado de x_nome_da_issue para feature branches e hotfix_x_nome_da_issue para hotfix branches.

#### 2.1 Crie branch de feature
```$ git checkout -b x_nome_da_issue_seu_nome```

### 3. Stage/Add
1. Crie um arquivo .js com nome `feature.js` com o conteúdo do [feature.txt](feature.txt);
2. Salve suas mudanças;
3. Dê "stage" em suas mudanças. ```$ git add feature.js```

### 4. Commit
Commite suas mudanças para sua branch atual seguindo nossa política de commit.
#### 4.1 Commite suas mudanças.
```$ git commit -m "feat: create javascript feature"```

### 5. Push
Envie para o repositório de origem as mudanças feitas.
```$ git push origin x_nome_da_issue_seu_nome```

### 6. Rebase/Merge
1. Edite o arquivo [dojo.py](dojo.py) conforme as instruções;
2. Atualize sua branch com a `main` usando do rebase; ```$ git pull --rebase origin main```
3. Siga os passos conforme as instruções ministradas e sua linha de comando;
4. Atualize a sua branch com as novas mudanças. ```$ git push -f origin x_nome_da_issue_seu_nome```

### 7. Abra um Pull Request para a Main
Siga as instruções dadas em [política de contribuição](https://github.com/fga-eps-mds/EPS-2020-2-G1/blob/main/CONTRIBUTING.md) e seguindo nosso [pull request template](https://github.com/fga-eps-mds/EPS-2020-2-G1/blob/main/.github/pull_request_template.md).
