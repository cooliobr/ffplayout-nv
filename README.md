# ffplayout-nv<p>
Criar a imagem docker<p>
<b>docker build -f nv1.Dockerfile -t ffmpeg-nvidia .</b><p>

  
Edite o arquivo docker-compose.yml de acordo com seus parametros tendo atenção aos:
<center>    - /sys/fs/cgroup:/sys/fs/cgroup:ro<p>
            - /volumes_etc:/etc/ffplayout:rw<p>
            - /volumes_db:/usr/share/ffplayout:rw<p>
            - /volumes_lib:/var/lib/ffplayout:rw<p>
</center>   
Executar imagem docker em background<p>
<b>docker-compose -f docker-compose.yml up</b><p>
