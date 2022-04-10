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
   
   ### Branch
   
   git branch -D branch-name --> git reflog --> git checkout branch-hash   --> git switch -c branch-name --> git switch master
   to delete the branch.   to log hashes.   to checkout the commit in detached head.     create branch again     switch to master
  
  ## Fast Forward Merge
  
  Fast forward merge can be performed when there is a direct linear path from the source branch to the target branch. In fast-forward     merge, git simply moves the source branch pointer to the target branch pointer without creating an extra merge commit.
  
  [Fast Forward Brief](https://www.tutorialspoint.com/what-is-a-fast-forward-merge-in-git#:~:text=Fast%20forward%20merge%20can%20be,creating%20an%20extra%20merge%20commit.)
  
  
  git merge feature.
  
  
  squash merge will squash all the commits of feature branch and add it to staging area of master post which we can coomit those changes
  into a single commit.
  
  git merge --squash feature.
  
  
  ## Recursive Merge
  
  In Recursive merge, after you branch and make some commits, there are some new original commits on the ‘master‘. So, when it’s time to merge, git recurses over the branch and creates a new merge commit. The merge commit continues to have two parents.
  
  [Recursive Merge Brief](https://www.geeksforgeeks.org/merge-strategies-in-git/#:~:text=Recursive%20Merge%3A,continues%20to%20have%20two%20parents.)
  
  git merge --no-ff feature
  
  
  
