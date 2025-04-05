@echo off
setlocal

:: Add all changes
git add .

:: Prompt for commit message
set /p commitMessage="Enter commit message: "

:: Commit changes with the provided message
git commit -m "%commitMessage%"

:: Push changes to the remote repository
git push origin main

endlocal