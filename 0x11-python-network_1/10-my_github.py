#!/usr/bin/python3
"""A script that:
- takes your GitHub credentials (username and password)
- uses the GitHub API to display your id
REQ:
- You must use Basic Authentication with a personal access token
 as password to access to your information (only read:user 
 permission is needed)
- The first argument will be your username
- The second argument will be your password (in your case, a 
personal access token as password)
- You must use request and sys ONLY
"""
import sys
import requests
from requests.auth import HTTPBasicAuth


if __name__ == "__main__":
    auth = HTTPBasicAuth(sys.argv[1], sys.argv[2])
    req = requests.get("https://api.github.com/user", auth=auth)
    print(req.json().get("id"))
