@echo off
echo ========================================
echo Building all React projects...
echo ========================================
echo.

echo [1/5] Building physics-pipeline-react...
cd physics-pipeline-react
call npm install
call npm run build
cd ..
echo.

echo [2/5] Building physics-pipeline-react-1formula...
cd physics-pipeline-react-1formula
call npm install
call npm run build
cd ..
echo.

echo [3/5] Building physics-pipeline-react-2formulas...
cd physics-pipeline-react-2formulas
call npm install
call npm run build
cd ..
echo.

echo [4/5] Building donkey-react...
cd donkey-react
call npm install
call npm run build
cd ..
echo.

echo [5/5] Building dsp-rz-react...
cd dsp-rz-react
call npm install
call npm run build
cd ..
echo.

echo ========================================
echo All React projects built successfully!
echo ========================================
echo.
echo Built files:
echo   - physics-pipeline-react/dist/
echo   - physics-pipeline-react-1formula/dist/
echo   - physics-pipeline-react-2formulas/dist/
echo   - donkey-react/dist/
echo   - dsp-rz-react/dist/
echo.
pause
