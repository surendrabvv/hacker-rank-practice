#!/bin/bash

## Problem : https://www.hackerrank.com/challenges/bash-tutorials---compute-the-average/problem

readarray -t arr
count="${arr[0]}"
unset arr[0]
for value in ${arr[@]}; do
  ((sum+=value))
done
a="$(echo "scale=8; $sum/$count" | bc)"
printf '%0.3f\n' "$a"