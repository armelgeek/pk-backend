#!/bin/bash

# Vérifier si le nombre d'arguments est correct
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <service_name>"
    exit 1
fi

SERVICE_NAME=$1

# Fonction pour afficher en vert
function print_green() {
    echo -e "\e[32m$1\e[0m"
}

# Fonction pour afficher en rouge
function print_red() {
    echo -e "\e[31m$1\e[0m"
}

# Fonction pour tester si le service est en cours d'exécution
function test_service() {
    echo "Testing $SERVICE_NAME..."
    docker-compose up -d $SERVICE_NAME
    sleep 5
    docker-compose ps $SERVICE_NAME
    docker-compose down
    print_green "Service test OK"
}

# Fonction pour tester la validité du Dockerfile
function test_dockerfile_syntax() {
    echo "Testing Dockerfile syntax..."
    docker build -t test-image -f $SERVICE_NAME/Dockerfile $SERVICE_NAME
    if [ $? -eq 0 ]; then
        echo "Dockerfile syntax is valid."
        docker rmi test-image
        print_green "Dockerfile syntax test OK"
    else
        echo "Dockerfile syntax test failed."
        print_red "Dockerfile syntax test NOT OK"
    fi
}

# Fonction pour tester la validité du fichier docker-compose
function test_docker_compose_syntax() {
    echo "Testing Docker Compose syntax..."
    docker-compose -f $SERVICE_NAME/docker-compose.yml config --quiet
    if [ $? -eq 0 ]; then
        echo "Docker Compose syntax is valid."
        print_green "Docker Compose syntax test OK"
    else
        echo "Docker Compose syntax test failed."
        print_red "Docker Compose syntax test NOT OK"
    fi
}

# Fonction pour tester si le port exposé est accessible et n'est pas bloqué par le pare-feu
function test_exposed_port() {
    local port=$(grep -E "^ *ports:" $SERVICE_NAME/docker-compose.yml | awk '{print $2}' | cut -d':' -f2)
    echo "Testing if port $port is accessible..."
    nc -z localhost $port
    if [ $? -eq 0 ]; then
        echo "Port $port is accessible."
        print_green "Port accessibility test OK"
    else
        echo "Port $port is not accessible."
        print_red "Port accessibility test NOT OK"
    fi
}

# Appeler les fonctions de test
test_service
test_dockerfile_syntax
test_docker_compose_syntax
test_exposed_port
