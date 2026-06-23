# Run once per external PowerShell session:  . .\fix-terminal.ps1
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
$env:Path = "C:\Program Files\nodejs;" + $env:Path
Write-Host "Terminal ready. Use: npm test  or  npm run automate"
