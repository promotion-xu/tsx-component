#!/bin/bash
set -x -e

LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib/
#BASEPATH=/home/zhaohaichuan/go/src
BASEPATH=/home/renshengchao/go/src
#BASEPATH=$GOPATH/src
GITREPO=gitlab.sz.sensetime.com/gateway/gateway-frontend-2/pb
PROTOC_INSTALL=/usr/local

projects="
gitlab.sz.sensetime.com/gateway/gateway-server/pb
github.com/mwitkow/go-proto-validators
gitlab.sz.sensetime.com/gateway/gateway-server/vendor/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis/google/api
"
for project in $projects; do
    echo $project
   # mkdir -p $BASEPATH/$project
    for i in $(ls $BASEPATH/$project/*.proto); do
        fn=$project/$(basename "$i")
        $PROTOC_INSTALL/bin/protoc -I$PROTOC_INSTALL/include -I. \
            -I$BASEPATH \
            -I$BASEPATH/gitlab.sz.sensetime.com/gateway/gateway-server/vendor/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
            --plugin=protoc-gen-ts=$BASEPATH/$GITREPO/../node_modules/.bin/protoc-gen-ts \
            --js_out=import_style=commonjs,binary:$BASEPATH/$GITREPO \
            --ts_out=service=true:$BASEPATH/$GITREPO \
            "$fn"
    done
done
