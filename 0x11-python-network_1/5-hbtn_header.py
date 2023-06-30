#!/usr/bin/python3
"""Displays the X-Request-Id header variable of a request to a given URL
REQ:
- The value of this variable is different for each request
- You must use request and sys ONLY
"""
import sys
import requests


if __name__ == "__main__":
    url = sys.argv[1]

    r = requests.get(url)
    print(r.headers.get("X-Request-Id"))
