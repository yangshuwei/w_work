#!/bin/bash 
msg=$1
if [ -n "$msg" ]; then
   git add .
   git commit -m"${msg}"
   git pull origin master
   echo "完成add、commit、pull，请手动push"
else
    echo "请添加注释"
fi