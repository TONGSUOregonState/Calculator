@echo off
REM build-and-render.bat - Builds optics-berkeley-react and renders Quarto site
REM Usage: Run from project root in cmd.exe (not PowerShell)

echo === Build and Render Script ===
echo Running in: %CD%

:: Build optics-berkeley-react
echo.
echo [1/2] Building optics-berkeley-react...
pushd "c:\Quarto_Blog_Calculator - Copy\optics-berkeley-react" || (echo Failed to enter directory && exit /b 1)
echo CWD: %CD%
echo Installing npm dependencies (may take a minute)...
call npm install
if %ERRORLEVEL% NEQ 0 (
	echo npm install failed. Exiting.
	popd
	exit /b 1
)
echo Running npm run build...
call npm run build
if %ERRORLEVEL% NEQ 0 (
	echo npm run build failed. Exiting.
	popd
	exit /b 1
)
popd
echo optics build finished.

:: Render Quarto site
echo.
echo [2/2] Rendering Quarto site...
echo Ensure Quarto is installed and on PATH: https://quarto.org
call quarto render
if %ERRORLEVEL% NEQ 0 (
	echo quarto render failed. Exiting.
	exit /b 1
)
echo Quarto render finished. Check _site\optics-berkeley-react\dist\index.html
echo Done.
exit /b 0