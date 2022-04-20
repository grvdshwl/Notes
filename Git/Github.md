 # GitHub
 
1. It is the largest development platform which is a **cloud hosting and collaboration provider** and stores Git Repositories.
 
2. It is used for storing, tracking, and collaborating on software projects. It enables developers to upload their own code files and to collaborate with fellow developers.

## Connecting Git With GitHub
 
<img width="1388" alt="Screenshot 2022-04-15 at 8 39 22 AM" src="https://user-images.githubusercontent.com/79152383/163512103-950dfbcc-81a5-4c0c-a399-502f2f88f8f3.png">

## Connecting a Remote & Local Repository.

    Step 1 : Create a remote repository on github.

    Step 2: Create a local project (preferred same name) and initilize git on it.

    Step 3: add some files and commit changes on the local repository.

    Step 4: connect local repo to remote repo by below command

            git remote add origin URL

    Step 5: push the changes to remote.

            git  push origin master ( It will also create a remote tracking branch)
            
            
            
 ## Git Branches Command 
 
 
     git branch ---> to show local branches
     
     git branch -a ---> to display local and remote tracking branches
     
     git branch -r ----> to display all the remote tracking branches
     
     git ls-remote -----> to display all the remote branches on github (it makes a network request).
     
     git branch --vv ---> to display local branch and local tracking branch along with its remote tracking branch reference.
     
     git remote ---> to display all remote servers connected.(ex => origin )
     
     git fetch origin. ----> to fetch all the remote tracking branches from remote(github) if that branch is not in local repo
     
     git clone URL -----> to clone a remote repository.
     
     git branch -D branch-name -----> To delete a branch.
     
     git branch --delete --remotes remote-tracking-branch-name(remotes/origin/feature) ----> to delete a remote tracking branch.
     
     git push origin --delete remote-branch-name (fetaure-remote) ------> to delete a remote branch (on github)
     
     git branch -m Previous-Branch-Name New-Branch-Name -------> Rename a branch
     
     git push -f origin master ----> to force a push to remote branch
     
     git clone URL . ------> to clone the remote repository in same folder and not create a new folder.
     
     
## Remote Tracking Branch

    It is the local readonly copy of the remote branch (on github).
    
    It establish a connection b/w local branch and remote branch, since there is no direct connection.
    
    
  <img width="1415" alt="Screenshot 2022-04-15 at 9 46 15 AM" src="https://user-images.githubusercontent.com/79152383/163517861-5991abce-bcc9-4d7f-8baf-0ae4a035c548.png">

## Local Tracking Branch

Local Tracking Branch is local reference to the remote tracking branch and is to be edited, we can pull changes and push changes to remote from this branch directly as it has the reference to it remote branch.

<img width="1440" alt="Screenshot 2022-04-15 at 10 00 25 AM" src="https://user-images.githubusercontent.com/79152383/163518855-a01b3169-09b8-45e3-8e5b-60dd7092d94e.png">



### Push Changes from Local Branch to Remote branch

Step 1: Commit the changes in local branch.

Step 2 : Push the changes to remote from below command and create a remote tracking branch
          
           git push origin branch-name
 
 ### Push changes from Remote Branch to Local Tracking Branch.
 
 Step 1 : Create a Remote Branch in the Remote Repo.
 
 Step 2 : Fetch all the remote tracking branches.
           
           git fetch origin
           
  Step 3 : Create a local tracking branch and merge the changes received.
  
            git branch --track local-tracking-branch-name(feature-remote) remote-tracking-branch-name(remotes/origin/feature-remote)
            
   **It is highly Recommended to name local-tracking-branch same as remote-tracking-brnach) 
           
 Step 4: Pull all the changes
               
               git pull


## To convert local branch into local tracking branch directly and push changes to remote use below command

         git push -u origin branch-name (u stand for setting upstream)
