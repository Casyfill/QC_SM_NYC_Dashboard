GIT_GHPAGES MEMO
[source](http://lea.verou.me/2011/10/easily-keep-gh-pages-in-sync-with-master/)

UPD: [tip on the stackoverflow](http://stackoverflow.com/questions/5807459/github-mirroring-gh-pages-to-master/7472481#7472481)

Add the following 2 lines to the [remote "origin"] section of .git/config:

push = +refs/heads/master:refs/heads/gh-pages
push = +refs/heads/master:refs/heads/master

### Depricated instruction

- git add .
- git status // to see what changes are going to be commited
- git commit -m 'Some descriptive commit message'
- git push origin master
- git checkout gh-pages // go to the gh-pages branch
- git rebase master // bring gh-pages up to date with master
- git push origin gh-pages // commit the changes
- git checkout master // return to the master branch
