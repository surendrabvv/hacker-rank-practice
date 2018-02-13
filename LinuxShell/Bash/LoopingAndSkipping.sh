#!/bin/bash

## Problem : https://www.hackerrank.com/challenges/bash-tutorials---looping-and-skipping/problem

for value in {1..99}
do
  rem=$(($value % 2))
  if [ "$rem" -ne "0" ]; then
    echo $value;
  fi
done