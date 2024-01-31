import os
import subprocess
import docker
import json

def print_green(text):
    print(f"\033[92m{text}\033[0m")

def print_red(text):
    print(f"\033[91m{text}\033[0m")

def check_git_directory():
    git_folder_exists = os.path.exists(".git")
    if git_folder_exists:
        # Vérifier la configuration du git
        git_config_path = os.path.join(".git", "config")
        with open(git_config_path) as f:
            git_config = f.read()
        
        if "user.email=" in git_config and "user.name=" in git_config:
            print_green("Git configuration is OK.")
        else:
            print_red("Git configuration is not complete.")
    else:
        print_red(".git folder not found.")

def check_dependencies():
    dependencies = ["nginx", "docker", "docker-compose", "ssh"]

    for dependency in dependencies:
        result = subprocess.run(["which", dependency], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        if result.returncode == 0:
            print_green(f"{dependency} is installed.")
        else:
            print_red(f"{dependency} is not installed.")

def git_pull_test(repository_url):
    try:
        subprocess.check_output(["git", "pull", repository_url], stderr=subprocess.STDOUT)
        print_green("Git pull successful. Git OK.")
    except subprocess.CalledProcessError as e:
        print_red(f"Git pull failed. Error: {e.output.decode()}")

def check_dockerfile_syntax(service_name):
    try:
        subprocess.check_output(["docker", "build", "-t", "test-image", "-f", f"{service_name}/Dockerfile", "."], stderr=subprocess.STDOUT)
        subprocess.run(["docker", "rmi", "test-image"])
        print_green(f"Dockerfile syntax for {service_name} is valid.")
    except subprocess.CalledProcessError as e:
        print_red(f"Dockerfile syntax for {service_name} is not valid. Error: {e.output.decode()}")

def check_docker_compose_syntax(service_name):
    try:
        subprocess.check_output(["docker-compose", "-f", f"{service_name}/docker-compose.yml", "config", "--quiet"], stderr=subprocess.STDOUT)
        print_green(f"Docker Compose syntax for {service_name} is valid.")
    except subprocess.CalledProcessError as e:
        print_red(f"Docker Compose syntax for {service_name} is not valid. Error: {e.output.decode()}")

def check_gitlab_ci_syntax(service_name):
    gitlab_ci_path = f"{service_name}/.gitlab-ci.yml"
    if os.path.exists(gitlab_ci_path):
        try:
            subprocess.check_output(["yamllint", gitlab_ci_path], stderr=subprocess.STDOUT)
            print_green(f"GitLab CI syntax for {service_name} is valid.")
        except subprocess.CalledProcessError as e:
            print_red(f"GitLab CI syntax for {service_name} is not valid. Error: {e.output.decode()}")
    else:
        print(f"No GitLab CI configuration found for {service_name}.")

def check_service_status(service_name):
    try:
        subprocess.check_output(["docker-compose", "up", "-d", service_name], stderr=subprocess.STDOUT)
        subprocess.run(["docker-compose", "ps", service_name])
        print_green(f"{service_name} service test OK.")
    except subprocess.CalledProcessError as e:
        print_red(f"{service_name} service test failed. Error: {e.output.decode()}")

def check_exposed_ports(service_name):
    docker_compose_path = f"{service_name}/docker-compose.yml"
    with open(docker_compose_path) as f:
        docker_compose_config = json.load(f)

    if "services" in docker_compose_config:
        for service, config in docker_compose_config["services"].items():
            if "ports" in config:
                for port in config["ports"]:
                    print(f"Checking port {port} for service {service}...")
                    check_port_command = f"nc -z localhost {port.split(':')[0]} && echo Port {port} is accessible. || echo Port {port} is not accessible."
                    result = subprocess.run(check_port_command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
                    if result.returncode == 0:
                        print_green(result.stdout.decode())
                    else:
                        print_red(result.stdout.decode())
            else:
                print(f"No exposed ports found for service {service}.")
    else:
        print(f"No services found in {service_name}/docker-compose.yml.")

def check_webserver():
    try:
        subprocess.check_output(["nginx", "-v"], stderr=subprocess.STDOUT)
        print_green("Nginx is installed.")
    except subprocess.CalledProcessError as e:
        print_red("Nginx is not installed.")

def check_allowed_ports():
    try:
        result = subprocess.run(["netstat", "-tuln"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        if result.returncode == 0:
            print_green(result.stdout.decode())
        else:
            print_red(result.stderr.decode())
    except subprocess.CalledProcessError as e:
        print_red(f"Error checking allowed ports. Error: {e.output.decode()}")

if __name__ == "__main__":

    repository_url = input("Enter Git repository URL: ")
    # Vérification du répertoire .git
    check_git_directory()

    # Vérification des dépendances
    check_dependencies()

    check_allowed_ports()
    
    

