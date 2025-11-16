% W10BES3DS
% 1. Rayleigh distance corresponding to "resolution" is determined for two round
% apertures at distance d between them.
% 2. 3D graph of pattern of two round apertures at distance d.

% Radius of apertures is a, coordinate on the observation screen R, wavelength Lamda, and
% distance from aperture to screen is X

function W10BES3DS;
global a d X Lamda;
% 1. Determination of Rayleigh distance.
Lamda = 0.0005;
a = 0.05;
d = 24.5;
X = 4000;
R = (0:0.1:50);
g1R = (besselj(1,(2*pi*a*(R/(X*Lamda))))./(2*pi*a*(R/(X*Lamda)))).^2;
gg1R = (besselj(1,(2*pi*a*((R-d)/(X*Lamda))))./(2*pi*a*((R-d)/(X*Lamda)))).^2;

figure(1);
subplot(2,1,1);
plot(R,g1R,R,gg1R);
axis([0 50 0 0.25]);
xlabel('R');
legend('g1(R)','gg1(R)');

% 2. 3D Graph Distance d

N = 60;
X = 4000;
M = zeros(N,N);
for i=0:N
    for j=0:N
        
        xi = (-40) + 2.0001*i;
        yj = (-40) + 2.0001*j;
        M(i+1,j+1) = g2(xi,yj)+gg2(xi,yj);
    end;
end;

subplot(2,1,2);
mesh(M);
axis([0 N 0 N 0 0.3]);
legend('M');


function Out=RR(x,y)
Out = sqrt(x.^2+y.^2);

function Out=g2(x,y)
global a X Lamda;
Out = (besselj(1,(2*pi*a*(RR(x,y)/(X*Lamda))))./(2*pi*a*(RR(x,y)/(X*Lamda)))).^2;

function Out=gg2(x,y)
global a d X Lamda;
Out = (besselj(1,(2*pi*a*(RR(x,y-d)/(X*Lamda))))./(2*pi*a*(RR(x,y-d)/(X*Lamda)))).^2;
