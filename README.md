Приложение выполнено на Реакт
упаковано в Docker container

запуск frontend

docker compose build
docker compose up

если возникнет ошибка по сборке 
1) перед сборкой пришлось установить зависимости, в корне 
 npm install или yarn 
2) ругается на git
проверка 
    git rev-parse --is-inside-work-tree
одно из решений прописать 
    git config --global --add safe.directory "*"
