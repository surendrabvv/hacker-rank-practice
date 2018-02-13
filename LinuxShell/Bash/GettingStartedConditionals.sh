#!/bin/bash

## Problem :  https://www.hackerrank.com/challenges/bash-tutorials---getting-started-with-conditionals/problem

read ch
if [ "$ch" = "y" ] || [ "$ch" = "Y" ]; then
  echo "YES"
else
  echo "NO"
fi