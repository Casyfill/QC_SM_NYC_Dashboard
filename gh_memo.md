GIT_GHPAGES MEMO
[source](http://stackoverflow.com/questions/5807459/github-mirroring-gh-pages-to-master/7472481#7472481)

To push to both *master* and *gh-pages*
Add the following 2 lines to the [remote "origin"] section of .git/config:

```
push = +refs/heads/master:refs/heads/gh-pages
push = +refs/heads/master:refs/heads/master
```
