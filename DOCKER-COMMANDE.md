# Commandes Docker

## Créer et lancer un conteneur

```bash
docker run <nom de l\'image>
```

## Lister des conteneurs

```bash
docker ps
```

## Créer et lancer un conteneur

```bash
docker container ps
```

### Lister tous les conteneurs 

```bash
docker ps -a
```
```bash
docker container ps -a
```

## Lister les images

```bash
docker image ls
```

```bash
docker images
```

## Supprimer un ou des conteneurs

```bash
docker rm <id du conteneur>
```

```bash
docker container rm <id du conteneur>
```

## Supprimer une ou des images

```bash
docker image rm <id de l\'image>
```

```bash
docker rmi <id de l\'image>
```

## Lancer un conteneur et interagir

```bash
docker run -it <nom de l\'image>
```

## Lancer un conteneur et le supprimer automatiquement 

```bash
docker run -it --rm <nom de l\'image>
```

## Redémarrer un conteneur

```bash
docker start <id>
```

## Redémarrer un conteneur

```bash
docker stop <id>
```

## Entrer et interagir dans un conteneur qui est déjà démarré

```bash
docker exec -it <id> bash
```

## Redémarrer et interagir avec un conteneur en une ligne de commande

```bash
docker start -ai <id>
```

## Volumes

### Mappé


```bash
docker run -it --rm <dossier local>:<dossier contneur> <image>
```

### Managé

Créer un volume

```bash
docker volumes create <nom du volume>
```

Lister les volumes


```bash
docker volume ls
```

Supprimer les volumes

```bash
docker volume rm <nom du volume>
```

Lier volume

```bash
docker run -it --rm -v <nom du volume>:<dossier contneur> <image>
```

Information du volume

```bash
docker volume inspect <nom du volume>
```

## Réseau

### Mapper des ports

```bash
docker run --rm -p  <port local>:<port conteneur> <image>
```

### Commandes bash pour tester les réseaux

Installer ping et ip

```bash
apt update && apt install -y iputils-ping iproute2
```

Afficher les adresses IP

```bash
ip -c a
```

### Lister les réseaux

```bash
docker network ls
```

### Isoler un conteneur

```bash
docker run --rm -it --network=none <image>
```

### Créer un réseau Bridge

```bash
docker run network create --driver=bridge <nom du réseau>
```

### Créer un conteneur et le connecter à un réseau

```bash
docker run -it --rm --network=<nom du réseau> --name=<nom du conteneur> <image>
```

### Créer et ensuite connecter

Créer le conteneur

```bash
docker run -it --name=<nom du conteneur> <image>
```

Connecter le conteneur

```bash
docker network connect <nom du réseau> <nom du conteneur>
```

### Lister les conteneur d'un réseau

```bash
docker network inspect <nom du réseau>
```

### Déconnecter les conteneurs du réseau

```bash
docker disconnect <nom du réseau> <conteneur>
```

### Supprimer des réseaux

```bash
docker network rm <nom du réseau> <nom du réseau> ..
```

## Dockerfile

### Construire une image

```bash
docker build -t <image> .
```

### Ajouter l'image au Dockerhub

```bash
docker tag <nom de l'image> <nom répository>
docker push <repository>
```

## compose.yml

### compose.yml simple

```docker
services:
  <nom_de_mon_service>:
    image: <nom_de_mon_image>
    container_name: <nom_de_mon_contenaire>
```


### Lancer le compose.yml

```bash
docker compose up
```

Lancer en arrière-plan : 

```bash
docker compose up -d
```

### Intéragir avec le conteneur

```docker
services:
  <nom_de_mon_service>:
    image: <nom_de_mon_image>
    container_name: <nom_de_mon_contenaire>
    stdin_open: true
    tty: true
```

Ensuite utiliser la commande suivante.

```bash
docker exec -it <id ou nom du conteneur> bash
```

### Arrêter les conteneurs

```bash
docker compose stop
```

### Supprimer les conteneurs

```bash
docker compose rm
```

### Volume mappé

```docker
services:
  <nom_de_mon_service>:
    image: <nom_de_mon_image>
    container_name: <nom_de_mon_contenaire>
    stdin_open: true
    tty: true

    volumes:
        -<chemin du dossier local>:<chemin du dossier dans le conteneur>
```

### Volume managé

```docker
services:
  <nom_de_mon_service>:
    image: <nom_de_mon_image>
    container_name: <nom_de_mon_contenaire>
    stdin_open: true
    tty: true

    volumes:
        -<nom du volumes>:<chemin du dossier dans le conteneur>

volumes:
    <nom du volumes>:
```


### Réseau

Tous les conteneurs du compose.yml sont automatiquement connecté à un réseau.

#### Réseau personnalisé

```docker
services:
  <nom_de_mon_service1>:
    image: <nom_de_mon_image>
    container_name: <nom_de_mon_contenaire1>
    stdin_open: true
    tty: true
    networks:
        -<nom du réseau>

     <nom_de_mon_service2>:
    image: <nom_de_mon_image ou une autre>
    container_name: <nom_de_mon_contenaire2>
    stdin_open: true
    tty: true
    networks:
        -<nom du réseau>

networks :
    -<nom du réseau>:
        driver:<type du réseau>
        
    volumes:
        -<nom du volumes>:<chemin du dossier dans le conteneur>

volumes:
    <nom du volumes>:
```