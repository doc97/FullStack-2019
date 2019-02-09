#!/bin/sh

backend_dir=$(realpath ../../fullstack-2019-osa3)

if [ ! -d ${backend_dir} ]; then
    echo "'${backend_dir}' is not a valid directory!"
    exit 1
fi

npm run build
rm -rf ${backend_dir}/build
cp -r build ${backend_dir}
