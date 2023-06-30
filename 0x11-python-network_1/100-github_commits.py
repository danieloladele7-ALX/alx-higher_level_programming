#!/usr/bin/python3
"""lists the 10 most recent commits on a given GitHub repository.
REQ:
- The first argument will be the repository name
- The second argument will be the owner name
- You must use request and sys ONLY
"""
import sys
import requests


if __name__ == "__main__":
    url = "https://api.github.com/repos/{}/{}/commits".format(
        sys.argv[2], sys.argv[1])

    req = requests.get(url)
    commits = req.json()
    try:
        for i in range(10):
            print("{}: {}".format(
                commits[i].get("sha"),
                commits[i].get("commit").get("author").get("name")))
    except IndexError:
        pass
