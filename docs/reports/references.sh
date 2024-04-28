#!/usr/bin/env bash

sed -i -E 's/([^[])#([0-9]+)([^0-9]|$)/\1[#\2](https:\/\/github.com\/SE-TINF22B2\/G5-DuoGradus\/issues\/\2)\3/g' *.md
