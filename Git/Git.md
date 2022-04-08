# Git Commands

## Basic Commands 

  1. git --version  -> checked installed git version.
  2. git init -> Create empty git repo.
  3. git status -> check working directory and staging area status.
  4. git log -> display all commits of current branch.
  5. git ls-files -> list data in staging area.
  
  
 ## Commit creation and access
 
  1. git add filename & git add * -> add single or all WD files to staging area.
  2. git commit -m "message" -> create new commit.
  3. git checkout commitid -> checkout commit (detached head!)
  
  ## Branch creation and access
  
   1. git branch branchname or git switch branchname -> create new branch 
   2. git checkout branchname -> go to branch
   3. git checkout -b branchname or git switch -c branchname ->create and access new branch
   4. git merge otherbranch -> bring other branch changes to current branch
   
   ## Delete Data 
   
   1. git rm filename ->run command after file was deleted from working directory to remove from staging area.
   2. git checkout . or git restore filename or . --> revert changes in tracked files which are not added to staging area.
   3. git clean -dn and git clean -df ->delete untracked files.
   4. git reset filename & git checkout --filename/.  or git restore --staged filename or . & git restore . --> remove files from staging area.
   5. git reset  Head~1 -> undo latest commit ( staging & commit)
   6. git reset --soft Head~1 -> undo latest commit (commit)
   7. git reset --hard Head~1 -> undo latest commit ( wd,staging & commit)
      
  
