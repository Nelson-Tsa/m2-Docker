# Concepts

- Image =  Est un paquet qui va contenir tout ce qui est necessaire à l'éxécution de l'application ( code source, dépendance associé au language etc ) Une fois une image crée elle ne peut pas être modifié

- Dockerfile =  C'est la recette de cuisine " pour fabriquer une image. Ce fichier va contenir toutes les instructions permettant d'installer les dépendances sur le futur container, le code source de l'application, etc .

- Container = C'est une image qui est en cours d'éxécution

- Docker Compose = C'est un fichier qui va permettre de synchronisaer des containers entre eux

- Volumes = C'est ce qui va permettre de créer un lien entre un système de fichier sur la machine hôte ( ton ordinateur, le serveur qui joue le container) et le container docker -> Données persistante, si on arrête le container, ont garde les données en mémoire

- Network = C'est un concept qui permet aux containers de se connaître entre eux et d'échanger

- Registry = Est à une image docker, ce que Github est à un projet de développement. On peux pousser nos images sur un registry distant ( comme Docker Hub, AWS ECR .. ) afin que d'autre persones puissent l'utiliser.