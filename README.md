# ffplayout-nv<p>
Criar a imagem docker<p>
<b>docker build -f nv1.Dockerfile -t ffmpeg-nvidia .</b><p>

  
Edite o arquivo docker-compose.yml de acordo com seus parametros tendo atenção aos:
            - /sys/fs/cgroup:/sys/fs/cgroup:ro
            - /volumes_etc:/etc/ffplayout:rw
            - /volumes_db:/usr/share/ffplayout:rw
            - /volumes_lib:/var/lib/ffplayout:rw
Executar imagem docker em background<p>
<b>docker-compose -f docker-compose.yml up</b><p>
