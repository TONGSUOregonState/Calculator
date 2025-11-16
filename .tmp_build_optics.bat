@echo off
REM Temporary build script created by assistant
cd /d "c:\Quarto_Blog_Calculator - Copy\optics-berkeley-react"
echo === CWD: %CD% ===
npm install
npm run build
cd /d "c:\Quarto_Blog_Calculator - Copy"
echo === Rendering Quarto site ===
quarto render
