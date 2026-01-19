Exemple : 

FROM celtak/ubuntu-ping-ip
RUN apt update
RUN nmp install
RUN apt install -y node.js
RUN apt install iputils-ping iproute2

docker build -t < nom de l'image> .(chemin au meme endroits de dockerfile)