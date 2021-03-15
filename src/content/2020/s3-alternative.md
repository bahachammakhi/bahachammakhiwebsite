---
slug: "/blog/s3-alternative"
date: "2021-02-04"
thumbnail: "https://res.cloudinary.com/bahachammakhi/image/upload/v1592999088/1_g_Gf_Wgs_GB_5x_H2_Gt9_GP_pkm_Vw_2x_aff8b814be.jpg"
title: "AWS S3 alternative"
tag: storage cloud s3 administration
popular: false
author: Baha eddine chammakhi
---

#Introduction:
Started building a backend, of course, you will need somewhere to store those files (images/videos…).

In this case, you have two options : 
- use Linux filesystem 
- Use third party object storage server 

We gonna talk about the second option here : 

Let us consider the service you gonna use is the most popular one AWS S3, in this case, you need an AWS account to test the features you gonna build! , but your client still didn't make one!
in this case, luckily we got something named minio.

![Minio](https://res.cloudinary.com/bahachammakhi/image/upload/v1593282430/Minio_1fc8fb5e0f.png =600x600)

##What is minio : 

Minio is a popular open-source object storage server compatible with the Amazon S3 cloud storage service.
Compatible means we can use AWS S3 client to talk to minio means we can test our application and continue to work, perfect! 


---

In this tutorial, you will:

- Install the Minio server on your Ubuntu 18.04 server and configure it as a systemd service.

 #Step1: Installing Minio

- Log to your server 

```bash
ssh baha@server_ip 
```

- Update package database 

```
sudo apt update 
```
- Download minio binary file

```
wget https://dl.min.io/server/minio/release/linux-amd64/minio
```
- The download is finished you will find a file named minio on your working directory, let's give it execute permission 

```
sudo chmod +x minio
```
- Move it to /usr/local/bin

```
sudo mv minio /usr/local/bin
```
- Create a directory where minio will store files

```
sudo mkdir /usr/local/share/minio
```
- Create Minio configuration file in /etc

```
mkdir /etc/minio
```
- Let's modify the default configuration 

```
sudo nano /etc/default/minio
```
- Add these environment variables 

```
                          /etc/default/minio
MINIO_ACCESS_KEY="minio"
MINIO_VOLUMES="/usr/local/share/minio/"
MINIO_OPTS="-C /etc/minio --address your_server_ip:9000"
MINIO_SECRET_KEY="miniostorage"
```
- MINIO_ACCESS_KEY: This sets the access key you will use to access the Minio browser user interface.
- MINIO_SECRET_KEY: This sets the private key you will use to complete your login credentials into the Minio interface. This tutorial has set the value to miniostorage, but we advise choosing a different, more complicated password to secure your server.
- MINIO_VOLUMES: This identifies the storage directory that you created for your buckets.
- MINIO_OPTS: This changes where and how the server serves data. The -C flag points Minio to the configuration directory it should use, while the --address flag tells Minio the IP address and port to bind to. If the IP address is not specified, Minio will bind to every address configured on the server, including localhost and any Docker-related IP addresses, so directly specifying the IP address here is recommended. The default port 9000 can be changed if you would like.
- Let's save and close the file, we just installed and configured minio 

- #Step2: Installing the Minio Systemd Startup Script

- Download the official Minio service descriptor file

```
curl -O https://raw.githubusercontent.com/minio/minio-service/master/linux-systemd/minio.service
```
- After download, you will find a file named minio.service in your working directory, now lets move it to etc/systemd/system.

```
sudo mv minio.service /etc/systemd/system
```
- Restart all systemd units 

```
sudo systemctl daemon-reload
```
- Enable minio to start on boot 

```
sudo systemctl enable minion
```
#Step3-Start minio server:

- Start minio server 

```
sudo systemctl start minio
```
- Verify if it's working!

```
sudo systemctl status minio
```
Now minio is working on your server on the port:9000 you can use the web interface to create buckets and use them!
I hope I helped in solving a problem.