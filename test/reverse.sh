#!/bin/bash
s=$1
len=${#s}
for((i=$len-1;i>=0;i--)); do rev="$rev${s:$i:1}"; done
echo { \"original\": \"$s\", \"reversed\": \"$rev\"}