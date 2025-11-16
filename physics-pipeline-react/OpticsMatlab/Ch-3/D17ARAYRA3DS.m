% D17ARAYRA3DS

% 3D Graph of diffraction pattern of a periodic array of
% rectangular apertures.
% In comparison the diffraction pattern of rectangular
% apertures in random array.

% 1. Periodic array

function D17ARAYRA3DS;

Lamda = 4;
p = 6;
d = 2;
d1 =2;
a1 = 4;
a = 4;
N = 30;

I = 0:N;
J = 0:N;

nx = length(I);
ny = length(J);
M = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            Xi = -2 + 0.20001*r; 
            Yj = -3 + 0.20001*c;
            F = ((sin(2*pi*d*Xi/(2*Lamda))./(2*pi*d*Xi/(2*Lamda))).^2).*((sin(2*pi*d1*Yj/(2*Lamda))./(2*pi*d1*Yj/(2*Lamda))).^2).*((sin(2*pi*a*Xi*p/(2*Lamda))./(p*sin(2*pi*a*Xi/(2*Lamda)))).^2).*((sin(2*pi*a1*Yj*p/(2*Lamda))./(p*sin(2*pi*a1*Yj/(2*Lamda)))).^2);
            M(r,c) = F;
        end;
end;



figure(1);
subplot(2,1,1);
mesh(M);               
axis([0 N 0 N 0 1]);
legend('M');

% 2. Random array

MM = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            Xi = -2 + 0.20001*r; 
            Yj = -3 + 0.20001*c;
            F1 = ((sin(2*pi*d*Xi/(2*Lamda))./(2*pi*d*Xi/(2*Lamda))).^2).*((sin(2*pi*a*Yj/(2*Lamda))./(2*pi*a*Yj/(2*Lamda))).^2);
            MM(r,c) = F1;
        end;
end;

subplot(2,1,2);

mesh(MM);               
axis([0 N 0 N 0 1]);
legend('MM');