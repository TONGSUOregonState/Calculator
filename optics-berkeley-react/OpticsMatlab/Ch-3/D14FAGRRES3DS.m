% D14FAGRRES3DS
% Determination of the wavelength difference for two peaks,
% resolved according to the Rayleigh criterion

% 1. Determination of Rayleigh distantance.
% We call the distance between the maxima b. Radius of apertures a, distance
% between the apertures d, coordinate on the observation screen R,
% wavelength ?, and distance from aperture to screen X.

function D14FAGRRES3DS;

a = 0.05; X = 4000; R=(0:0.1:50); b = 24.5;%?
Lamda = 0.0005;
g1=(besselj(1,(2*pi*a*R/(X*Lamda)))./(2*pi*a*R/(X*Lamda))).^2;
gg1=(besselj(1,(2*pi*a*(R-b)/(X*Lamda)))./(2*pi*a*(R-b)/(X*Lamda))).^2;

figure(1);
subplot(2,1,1);
plot(R,g1,R,gg1);
axis([0 50 0 0.3]);                  % PLOTS LIMITS                    
xlabel('R');
legend('g1(R)','gg1(R)');


% 2. 3D Graph of pattern of two round apertures at distance b.


X = 4000;
N = 40;

I = 0:N;
J = 0:N;

nx = length(I);
ny = length(J);
g2 = zeros(nx,ny);
gg2 = zeros(nx,ny);
M = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            Xi = -30 + 2.0001*r; 
            Yi = -30 + 2.0001*c;
            RR = sqrt(Xi^2+Yi^2);               
            g2(r,c) = (besselj(1,(2*pi*a*RR/(X*Lamda)))/(2*pi*a*RR/(X*Lamda)))^2;
            RR = sqrt(Xi^2+(Yi-b)^2);
            gg2(r,c) = (besselj(1,(2*pi*a*RR/(X*Lamda)))/(2*pi*a*RR/(X*Lamda)))^2;
        end;
end;
M = g2 + gg2;
subplot(2,1,2);
mesh(M);
                 % PLOTS LIMITS                    
axis([0 40 0 40 0 0.3]);


% 3. Calculation of wavelength difference corresponding to b
% The diffraction angle is calculated from b/X = ??
% The grating is made of round apertures of diameter a and spaced at
% distance d.
% From the grating formula we have for the wavelength difference
% ??=d?? or ?? = (d/X)b.
% 
% For d := .1
%            ?? := d*b/X
%                       ?? = 6.125 * 10 ^ (-4)