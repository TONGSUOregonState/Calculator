@echo off
echo Building all React projects...

echo.
echo [1/3] Building physics-pipeline-react...
cd physics-pipeline-react
call npm install
call npm run build
cd ..

echo.
echo [2/3] Building physics-pipeline-react-1formula...
cd physics-pipeline-react-1formula
call npm install
call npm run build
cd ..

echo.
echo [3/4] Building physics-pipeline-react-2formulas...
cd physics-pipeline-react-2formulas
call npm install
call npm run build
cd ..

echo.
echo [4/4] Building optics-berkeley-react...
cd optics-berkeley-react
call npm install
call npm run build
cd ..

echo.
echo ========================================
echo ✅ All projects built successfully!
echo ========================================
echo.
echo Built files are in:
echo   - physics-pipeline-react/dist/
echo   - physics-pipeline-react-1formula/dist/
echo   - physics-pipeline-react-2formulas/dist/
echo   - optics-berkeley-react/dist/
echo.
pause
