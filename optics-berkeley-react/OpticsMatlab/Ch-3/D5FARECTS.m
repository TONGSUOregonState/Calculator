% D5FARECTS The diffraction pattern of a rectangular aperture.
% The width in the x-direction is d, in y-direction a.
% One may look at the plot from different angles, change colors
% and make a "Contour Plot".

function D5FARECTS;

N = 40;
D = 4;
A = 2;
Lamda = 4;


I = 0:N;
J = 0:N;

nx = length(I);
ny = length(J);
Z = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            Xi = -4 + 0.20001*r; 
            Yi = -4 + 0.20001*c;
            Z(r,c)= power(sin(2*pi*D*(Xi/(2*Lamda)))/(2*pi*D*(Xi/(2*Lamda))),2)*power(sin(2*pi*A*(Yi/(2*Lamda)))/(2*pi*A*(Yi/(2*Lamda))),2);
        end;
end;




F= Z;

figure(1);

mesh(F);



                 % PLOTS LIMITS                    
axis([0 40 0 40 0 1]);


