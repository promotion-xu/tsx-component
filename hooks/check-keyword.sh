#!/bin/bash

red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`
# echo "${red}red text ${green}green text${reset}"

echo  "${green}start checking keyword${reset}"


for FILE in `git diff --name-only --cached`; do

    if [[ $FILE == *".sh"* ]] || [[ $FILE == *"iconfont.js"* || $FILE == *"ExamplePage"* ||　$FILE == *"min.js"* ||　$FILE == *"vendor/*"* || $FILE == *"map.js"* || $FILE == *"map_city.js"* ]] ; then
        echo $FILE
        continue
    fi
    grep 'TODO:\|debugger\|console.log\|alert(' $FILE 2>&1 >/dev/null
    if [ $? -eq 0 ]; then
        echo $FILE '包含，TODO: or debugger or console.log，请删除后再提交'
        exit 1
    fi
    
done
exit