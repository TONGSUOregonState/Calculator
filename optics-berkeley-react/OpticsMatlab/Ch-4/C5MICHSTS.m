% C5MICHSTS
% Michelson's Stellar Interferometer
% Diffraction angle Y/X, wavelength ?, angle to be determined is ?.
% Interferometer distance of Mirror M1 and M4 is h.

% In the real set-up we change h to go from fringe pattern to no fringe pattern. From the
% difference of these two values we calculate the angle ?.

% ?n this simulation we choose an angle ? and show that the fringe pattern
% changes for the two values of h we determine.
% Example h equal 100 and 95.
function C5MICHSTS;

Phi = 0.00005;
X = 4000;
Lamda = 0.0005;
d = 0.5;
h = 95;
Y= (-30:0.1:30);

uI = (cos(pi*d*(Y/(X*Lamda)))).^2;
uII = (cos(pi*((Y/X)*d-h*Phi)/Lamda)).^2;

%  This is an indication if there are fringes or not

figure(1);
plot(Y,uI+uII,Y,uI,Y,uII);
axis([-30 30 0 1.5]);                  % PLOTS LIMITS                    
xlabel('Y');
legend('uI(Y)+uII(Y)','uI(Y)','uII(Y)');