#!/bin/bash
ETC=/mnt/volumes_etc_$1
DB=/mnt/volumes_db_$1
LIB=/mnt/volumes_lib_$1
[ $# -eq 0 ] && { echo "Usage: $0 [project] [TCP_PORT] \n Example: $0 Canal1 8788"; exit 1; }
echo " ... Criando pastas de destino  "
sleep 3 
mkdir -p $ETC
mkdir -p $DB
mkdir -p $LIB
echo " ... Copiando arquivos de esqueleto  "
sleep 3
cp -R volumes_etc_89/* $ETC/
cp -R volumes_db_89/* $DB/
cp -R volumes_lib_89/* $LIB/
chmod 777 /mnt/volumes* -R
chown 999:997 /mnt/volumes* -R
cat << EOF > docker-compose.yml
version: '3.3'
services:
    ffmpeg-nvenc:
        devices:
            - /dev/nvidia-caps
            - /dev/nvidia0
            - /dev/nvidiactl
            - /dev/nvidia-modeset
            - /dev/nvidia-uvm
            - /dev/nvidia-uvm-tools
        volumes:
            - /sys/fs/cgroup:/sys/fs/cgroup:ro
            - $ETC:/etc/ffplayout:rw
            - $DB:/usr/share/ffplayout:rw
            - $LIB:/var/lib/ffplayout:rw
        ports:
            - '$2:8787'
        privileged: true
        image: ffmpeg-nvidia
        environment:
            - NVIDIA_VISIBLE_DEVICES=all
            - NVIDIA_DRIVER_CAPABILITIES=compute,video,utility
        command:
            - '/usr/sbin/init'
EOF
