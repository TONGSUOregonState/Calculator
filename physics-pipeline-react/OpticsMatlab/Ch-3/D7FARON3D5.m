% D7FARON3DS
% One may look at the plot from different angles, change colors, and make a "Contour Plot".
% Radius of aperture is a
% The coordinate on the observation screen is R
% Wavelength ?, distance from aperture to screen is X.
% 3D diffraction pattern of a round aperture as a circular
% symmetric plot using two coordinates.

function D7FARON3DS;

N = 30;
D = 2;
A = 0.1;
Lamda = 0.0005;
X = 4000;

I = 0:N;
J = 0:N;

nx = length(I);
ny = length(J);
G = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            Xi = -20 + 1.5001*r;
            Yi = -20 + 1.5001*c; 
            R = sqrt(Xi^2+Yi^2);
            G(r,c)= (( besselj(1,(2*pi*A*R/(X*Lamda)))/(2*pi*A*R/(X*Lamda))))^2;
        end;
end;






figure(1);

mesh(real(G));
                 % PLOTS LIMITS                    
axis([0 N 0 N 0 0.3])