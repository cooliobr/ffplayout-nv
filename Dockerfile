FROM nvidia/cuda:12.0.1-cudnn8-runtime-centos7

ENV NVIDIA_VISIBLE_DEVICES all
ENV NVIDIA_DRIVER_CAPABILITIES compute,video,utility

ENV NVCODEC_VERSION 8.2.15.6
ENV FFMPEG_VERSION 5.1.2
ENV X264_VERSION=20191217-2245
ENV NASM_VERSION=2.14.02
RUN yum install -y wget

RUN buildDeps="autoconf \
    automake \
    bzip2 \
    cmake3 \
    diffutils \
    expat-devel \
    file \
    gcc \
    gcc-c++ \
    git \
    gperf \
    libtool \
    make \
    perl \
    python3 \
    openssl-devel \
    tar \
    yasm \
    which \
    zlib-devel" && \
    echo "${SRC}/lib" > /etc/ld.so.conf.d/libc.conf && \
    yum --enablerepo=extras install -y epel-release && \
    yum --enablerepo=epel install -y ${buildDeps} && \
    alternatives --install /usr/bin/cmake cmake /usr/bin/cmake3 0 && \
    # Install the tools required to build nasm 2.14.02 \
    nasmDeps="asciidoc \
        perl-Font-TTF \
        perl-Sort-Versions \
        xmlto" && \
    yum --enablerepo=epel install -y ${nasmDeps}
RUN curl -fsSLO https://www.nasm.us/pub/nasm/releasebuilds/$NASM_VERSION/nasm-$NASM_VERSION.tar.bz2 \
  && tar -xjf nasm-$NASM_VERSION.tar.bz2 \
  && cd nasm-$NASM_VERSION \
  && ./autogen.sh \
  && ./configure \
  && make -j$(nproc) \
  && make install
RUN \
    DIR=/tmp/x264 && \
    mkdir -p ${DIR} && \
    cd ${DIR} && yum install -y wget && \
    wget https://download.videolan.org/pub/videolan/x264/snapshots/x264-snapshot-20191217-2245.tar.bz2 && \
    tar -xjf x264-snapshot-${X264_VERSION}.tar.bz2 && cd x264-snapshot-${X264_VERSION} && \
    ./configure --enable-shared --enable-pic --disable-cli && \
    make -j $(nproc | awk '{print $1 / 2}') && \
    make install
ENV FFMPEG_VERSION=5.1.2 \
    AOM_VERSION=v1.0.0 \
    FDKAAC_VERSION=0.1.5 \
    FONTCONFIG_VERSION=2.12.4 \
    FREETYPE_VERSION=2.10.4 \
    FRIBIDI_VERSION=0.19.7 \
    KVAZAAR_VERSION=2.0.0 \
    LAME_VERSION=3.100 \
    LIBASS_VERSION=0.13.7 \
    LIBPTHREAD_STUBS_VERSION=0.4 \
    OGG_VERSION=1.3.2 \
    OPUS_VERSION=1.2 \
    OPENJPEG_VERSION=2.1.2 \
    VORBIS_VERSION=1.3.5 \
    VPX_VERSION=1.8.0 \
    WEBP_VERSION=1.0.2 \
    X264_VERSION=20170226-2245-stable \
    X265_VERSION=3.4 \
    LIBZMQ_VERSION=4.3.2 \
    LIBSRT_VERSION=1.4.1 \
    LIBPNG_VERSION=1.6.9 
### fdk-aac https://github.com/mstorsjo/fdk-aac
RUN \
    DIR=/tmp/fdk-aac && \
    mkdir -p ${DIR} && \
    cd ${DIR} && \
    curl -sL https://github.com/mstorsjo/fdk-aac/archive/v${FDKAAC_VERSION}.tar.gz | \
    tar -zx --strip-components=1 && \
    autoreconf -fiv && \
    ./configure  --enable-shared --datadir="${DIR}" && \
    make -j $(nproc | awk '{print $1 / 2}') && \
    make install && \
    rm -rf ${DIR}

RUN git clone --depth 1 https://git.videolan.org/git/ffmpeg/nv-codec-headers \
  && cd nv-codec-headers \
  && make install
ENV PKG_CONFIG_PATH /usr/local/lib/pkgconfig
RUN curl -fsSLO https://ffmpeg.org/releases/ffmpeg-$FFMPEG_VERSION.tar.bz2 \
  && tar -xjf ffmpeg-$FFMPEG_VERSION.tar.bz2 \
  && cd ffmpeg-$FFMPEG_VERSION \
  && ./configure --enable-nvenc --enable-libx264 --enable-gpl --enable-libfdk_aac  --enable-libx264  --enable-nonfree  --enable-postproc  --enable-shared  --enable-version3 \
  && make -j$(nproc) \
  && make install

RUN yum -y install systemd vim pico; yum clean all; \
(cd /lib/systemd/system/sysinit.target.wants/; for i in *; do [ $i == systemd-tmpfiles-setup.service ] || rm -f $i; done); \
rm -f /lib/systemd/system/multi-user.target.wants/*;\
rm -f /etc/systemd/system/*.wants/*;\
rm -f /lib/systemd/system/local-fs.target.wants/*; \
rm -f /lib/systemd/system/sockets.target.wants/*udev*; \
rm -f /lib/systemd/system/sockets.target.wants/*initctl*; \
rm -f /lib/systemd/system/basic.target.wants/*;\
rm -f /lib/systemd/system/anaconda.target.wants/*;
RUN yum -y install net-tools openssh-server
RUN echo "PermitRootLogin yes" >> /etc/ssh/sshd_config  

RUN    yum update -y \
    && yum install -y dejavu-sans-fonts sudo wget htop nvtop \
    && wget -q -O /tmp/ffplayout-0.17.0-1.x86_64.rpm "https://github.com/ffplayout/ffplayout/releases/download/v0.17.0/ffplayout-0.17.0-1.x86_64.rpm" \
    && yum install -y /tmp/ffplayout-0.17.0-1.x86_64.rpm \
    && yum clean all \
    && echo 'Docker!' | passwd --stdin root \
    && rm /tmp/ffplayout-0.17.0-1.x86_64.rpm \
    && mkdir -p /home/ffpu && chown -R ffpu: /home/ffpu \
    && systemctl enable ffplayout \
    && systemctl enable ffpapi 

EXPOSE 8787
RUN echo "/usr/local/lib" >> /etc/ld.so.conf.d/nvidia.conf 
RUN echo "/usr/local/cuda-12.0/compat/" >> /etc/ld.so.conf.d/nvidia.conf

VOLUME [ "/sys/fs/cgroup", "/tmp", "/run", "/run/lock", "/etc/ffplayout", "/usr/share/ffplayout" ,"/var/lib/ffplayout" ]
CMD ["/usr/sbin/init"]
