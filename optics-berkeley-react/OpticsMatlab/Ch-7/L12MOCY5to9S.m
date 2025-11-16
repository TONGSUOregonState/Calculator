% L12MOCY5to9S
% Cylindircal Coordinates for circular mirrors in confocal resonator.
% Field distribution as contour plot of 02 to 20.
% The L(l,p) functions are written out for 00 to 22. The constant in the exponential is
% X.

function L12MOCY5to9S;
global X;
X = 2;
N = 30;
i = (0:1:N);
j = (0:1:N);

xi = -4 + 0.30001*i;
yj = -4 + 0.30001*j;

nx = length(i);
ny = length(j); 
for r=1:nx;
       for k=1:ny;
            x = xi(r);
            y = yj(k);
            M02(r,k)  =(cos(2*Beta(x,y))*q(x,y)*L20(x,y)).^2;
            M20(r,k)  =(cos(0*Beta(x,y))*q(x,y)*L02(x,y)).^2;
            M12(r,k)  =(cos(2*Beta(x,y))*q(x,y)*L21(x,y)).^2;
            M21(r,k)  =(cos(1*Beta(x,y))*q(x,y)*L12(x,y)).^2;
            M22(r,k)  =(cos(2*Beta(x,y))*q(x,y)*L22(x,y)).^2;
       end;
end;

figure(1);
subplot(3,2,1);
Mesh(M02);
axis([0 30 0 30 0 0.6]); 
legend('M02');

subplot(3,2,2);
Mesh(M20);
axis([0 30 0 30 0 6]); 
legend('M20');

subplot(3,2,3);      
Mesh(M12);
axis([0 30 0 30 0 5]); 
legend('M12');

subplot(3,2,4);      
Mesh(M21);
axis([0 30 0 30 0 5]); 
legend('M21');

subplot(3,1,3);         
Mesh(M22);
axis([0 30 0 30 0 15]); 
legend('M22');

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

function Out=L02(x,y)
Out = 1-2*u(x,y)+(1/2)*u(x,y)^2;

function Out=L12(x,y)
Out = 3-3*u(x,y)+(1/2)*u(x,y)^2;

function Out=L20(x,y)
Out = 1;

function Out=L21(x,y)
Out = 3 - u(x,y);

function Out=L22(x,y)
Out = 6-4*u(x,y)+(1/2)*u(x,y)^2;
