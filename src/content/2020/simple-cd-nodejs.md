---
slug: "/blog/simple-cd-nodejs"
date: "2021-02-04"
thumbnail: "https://res.cloudinary.com/bahachammakhi/image/upload/v1593107305/Template_1_a39b7c9a84.png"
title: "How to build a simple CD pipeline for your nodejs project"
tag: code-quality architecture
popular: true
author: Baha eddine chammakhi
---

![Pipeline](https://res.cloudinary.com/bahachammakhi/image/upload/v1593107305/Template_1_a39b7c9a84.png =600x600)




# What we need?

 - [Gitlab account](https://gitlab.com/)
 - [SSH](https://www.ssh.com/)
 - [PM2](https://pm2.keymetrics.io/)
 - VPS
 - Git
 - [Nodejs](https://nodejs.org/en/)

# Whats is CD?

**Continuous deployment** is the process of automatically deploying an application, the goal of this practice is to minimize the time pushing a new line of code and using it live on production.

# Setting up Pipeline

## Gitlab runner:
As we gonna use Gitlab to setup our pipeline we need a runner.

- **Runner** is an environment to run your jobs and run tests, deploy your code.


  In this case, either you use a shared Runner or you step up one yourself we gonna use a shared one but if you wanna set up it check the documentation here : [Gitlab Runner](https://docs.gitlab.com/runner/).
  

## Gitlab-CI File :

 Create **.gitlab-ci.yml** file on the root of your project.
 So what we gonna write there we gonna follow these steps : 
 
 1. Updating Linux package manager 
 2. Installing Git
 3. Setting up SSH key
 4. Connect to our server using ssh
 5. Pull our project from git
 6. Install dependencies
 7. Build it
 8. Restart server using pm2

  
```bash
  before_script:
 - apt-get update -qq
 - apt-get install -qq git
 # Setup SSH deploy keys
 - 'which  ssh-agent  ||  (  apt-get  install  -qq  openssh-client  )'
 - eval $(ssh-agent -s)
 - ssh-add <(echo "$SSH_PRIVATE_KEY")
 - mkdir -p ~/.ssh
 - '[[  -f  /.dockerenv  ]]  &&  echo  -e  "Host  *\n\tStrictHostKeyChecking  no\n\n"  >  ~/.ssh/config'
  
deploy_staging:
 tags:
 - docker
 type: deploy
 environment:
 name: testing
 url: "$VPS_IP"
 script:
 - ssh root@"$VPS_IP" "cd /root/app/allomakkah && git fetch origin master && git reset --hard FETCH_HEAD && git clean -df && npm i && npm run prod-build"
 - ssh root@"$VPS_IP" "pm2 restart hiddy"
 only:
 - master
```

Now let's deploy our application it will automatically run this pipeline whenever we push to the master branch because of that ligne :
```bash
only:
- master
```
![Pipeline](https://media-exp1.licdn.com/dms/image/C4E22AQGeZFVl1C9QXQ/feedshare-shrink_2048_1536/0?e=1596067200&v=beta&t=wb0F-oBWMywDnruymWVfhnRo9qbDjRs038BkgmJHDqw =800x480)
![Pipeline](https://media-exp1.licdn.com/dms/image/C4E22AQG6mCoTlYEOLA/feedshare-shrink_2048_1536/0?e=1596067200&v=beta&t=6xTaGJu-M9Gik8oMlCO62HpXeDSusyOBLwy8fZuCKH0 =800x480)