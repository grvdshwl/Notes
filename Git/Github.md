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
     
     

