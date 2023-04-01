# ffplayout-nv
Criar a imagem docker
docker build -f nv1.Dockerfile -t ffmpeg-nvidia .

Executar imagem docker em background
docker-compose -f docker-compose.yml up
