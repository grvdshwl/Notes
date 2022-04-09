# Deep Dive into git


 ## Stash 
 Stash command is used to store & bring back untracked and unstaged changes without adding them to staging area or commiting them.
 
 git stash --> simply add the changes to stash list.
 
 git stash list --> display list of all the stashes.
 
 git stash push -m "message" - add stash with a message (recommended).
 
 git stash apply - to apply latest stash stored in the list.
 
 git stash apply index-number - to apply specific stash as per index.
 
 git stash pop index-number - to apply a specific stash and pop it from stash list so that it can be commited further.
 
 git stash drop index-number - to delete a stash from list.
 
 git stash clean -  remove all the stash from stash list.



  ## Reflog
   To Bring back a deleted  commit or a deleted branch
   
   ### commit
   git reset --hard Head~1      ----> git reflog      ----> git reset --hard commit-hash
   To delete the latest commit   to log all the hashes   to bring back deleted commit
   
   ###Branch
   
   git branch -D branch-name --> git reflog --> git checkout branch-hash   --> git switch -c branch-name --> git switch master
   to delete the branch.   to log hashes.   to checkout the commit in detached head.     create branch again     switch to master
  
  
