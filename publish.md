git add .
git commit -S -m "DESCRIPTION"
git push

git tag -a VERSION -m "VERSION" master
--> if already exist force => git tag -a VERSION -f -m "VERSION" master
git push --tags

AFTER check tags and create new release with the new tag.