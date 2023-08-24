# Full Stack Work Trial


docker build -f /Users/jedmeier/projects/fullstack-work-trial/Dockerfiles/Backend --load -t fullstack_worktrial_backend:latest .

docker run -p 3001:3001 fullstack_worktrial_backend:latest

docker build -f /Users/jedmeier/projects/fullstack-work-trial/Dockerfiles/Frontend --load -t fullstack_worktrial_frontend:latest .