% L11MOCONFCS

% Cartesian Coordinates for rectangular mirrors in confocal resonator.
% Field distribution as contour plot..

% The mode numbers m and n are for Hermitian Polynomials.
% The constant in the exponential is simulated by X.
% Small X correspond to small "waist width".

function L11MOCONFCS;
global X Y;
N = 40;
X = 100;
Y = 100;
i = (0:1:N);
j = (0:1:N);

xi = (-20) + 1.00*i;
yj = (-20) + 1.00*j;
nx = length(i);
ny = length(j); 
for r=1:nx;
       for k=1:ny;
            x = xi(r);
            y = yj(k);
            M00(r,k)  =(g(x,y).*H00(x,y)).^2;
            M01(r,k)  =(g(x,y).*H01(x,y)).^2;
            M02(r,k)  =(g(x,y).*H02(x,y)).^2;
            M10(r,k)  =(g(x,y).*H10(x,y)).^2;
            M11(r,k)  =(g(x,y).*H11(x,y)).^2;
            M12(r,k)  =(g(x,y).*H12(x,y)).^2;
            M20(r,k)  =(g(x,y).*H20(x,y)).^2;
            M21(r,k)  =(g(x,y).*H21(x,y)).^2;
            M22(r,k)  =(g(x,y).*H22(x,y)).^2;
       end;
end;



figure(1);
subplot(2,2,1);
contour(M00);
axis([0 40 0 40]);  
legend('M00');

subplot(2,2,2);
contour(M10);
axis([0 40 0 40]);  
legend('M10');


subplot(2,2,3);    
contour(M01);
axis([0 40 0 40]);  
legend('M01');

subplot(2,2,4);      
contour(M11);
axis([0 40 0 40]);  
legend('M11');

figure(2);         
subplot(3,2,1);
contour(M20);
axis([0 40 0 40]);  
legend('M20');


subplot(3,2,2);
contour(M21);
axis([0 40 0 40]);  
legend('M21');

subplot(3,2,3);      
contour(M02);
axis([0 40 0 40]);  
legend('M02');

subplot(3,2,4);      
contour(M12);
axis([0 40 0 40]);  
legend('M12');

subplot(3,1,3);      
contour(M22);
axis([0 40 0 40]);  
legend('M22');


function Out=R(x,y)
Out = x.^2+y.^2;

function Out=g(x,y)
global X;
Out = exp(-R(x,y)./X);

function Out=H0x(x)
Out = 1;
function Out=H0y(y)
Out = 1;

function Out=H1x(x)
global Y;
Out = x.*sqrt(2/X);

function Out=H1y(y)
global Y;
Out = y.*sqrt(2/Y);

function Out=H2y(y)
global Y;
Out = 4*((sqrt(2/Y).*y).^2)-2;

function Out=H2x(x)
Out =  4*((sqrt(2/X).*x).^2)-2;

function Out=H00(x,y)
Out = H0x(x).*H0y(y);

function Out=H01(x,y)
Out = H0x(x).*H1y(y);

function Out=H02(x,y)
Out = H0x(x).*H2y(y);

function Out=H10(x,y)
Out = H1x(x).*H0y(y);

function Out=H11(x,y)
Out = H1x(x).*H1y(y);

function Out=H12(x,y)
Out = H1x(x).*H2y(y);

function Out=H20(x,y)
Out = H2x(x).*H0y(y);

function Out=H21(x,y)
Out = H2x(x).*H1y(y);

function Out=H22(x,y)
Out = H2x(x).*H2y(y);
