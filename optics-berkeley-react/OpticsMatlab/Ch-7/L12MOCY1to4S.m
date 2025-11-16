% L12MOCY1to4S
% Cylindircal Coordinates for circular mirrors in confocal resonator.
% Field distribution as contour plot for graph 00, 10, 01, and 11.
% The L(l,p) functions are written out for 00 to 22. The constant in the exponential is
% X

function L12MOCY1to4S;
global X;
X = 3;
N = 30;
i = (0:1:N);
j = (0:1:N);
xi = -3 + 0.20001*i;
yj = -3 + 0.20001*j;

nx = length(i);
ny = length(j); 
for r=1:nx;
       for k=1:ny;
            x = xi(r);
            y = yj(k);
            M00(r,k)  =(cos(0*Beta(x,y))*q(x,y)*L00(x,y)).^2;
            M10(r,k)  =(cos(0*Beta(x,y))*q(x,y)*L01(x,y)).^2;
            M01(r,k)  =(cos(1*Beta(x,y))*q(x,y)*L10(x,y)).^2;
            M11(r,k)  =(cos(1*Beta(x,y))*q(x,y)*L11(x,y)).^2;
       end;
end;

figure(1);         
subplot(2,2,1);
Mesh(M00);
axis([0 30 0 30 0 1]); 
legend('M00');

subplot(2,2,2);    
Mesh(M10);
axis([0 30 0 30 0 1.5]); 
legend('M10');

subplot(2,2,3);    
Mesh(M01);
axis([0 30 0 30 0 1]); 
legend('M01');

subplot(2,2,4);          
Mesh(M11);
axis([0 30 0 30 0 3.5]); 
legend('M11');

function Out=R(x,y)
Out = x^2+y^2;

function Out=Beta(x,y)
Out = atan(x/y);

function Out=q(x,y)
global X;
Out = exp(-R(x,y)/X);

function Out=u(x,y)
global X;
Out = 4*R(x,y)/X;

function Out=g(x,y)
Out = cos(0*Beta(x,y));

function Out=L00(x,y)
Out = 1;

function Out=L01(x,y)
Out = 1-u(x,y);

function Out=L10(x,y)
Out = 1;

function Out=L11(x,y)
Out = 2-u(x,y);
