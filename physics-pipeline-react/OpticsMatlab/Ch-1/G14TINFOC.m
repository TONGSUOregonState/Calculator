% G14TINFOC
% Focal length 

function G14TINFOC;

% 1. Calculation of focal length of thin lens of refractive index n2 in medium with
% refractive index n1.

% R is positive for convex surface, negative for concave surface
r1 = -5;    % First surface
r2 = 5;     % Second surface

n2 = 1;     % Refractive index of lens n2
n1 = 1.5;   % Refractive index of medium n1

f = n1/((n2-n1)/r1+(n1-n2)/r2)  % f = 7.5

% 2. Graph of focal length of thin lens with index n2 depending on
% refractive index of medium n1.

% The radii of curvature are chosen above. The range of n1 is divided into
% lower and higher range because of singularity.

nn2 = 1.5;  % Refractive index of lens nn2
nn1 = (1:0.1:nn2-0.00001);  % Lower range
nnn1 = (nn2+0.1:0.1:4);     % Upper range

ff = 1./((nn2-nn1)/r1+(nn1-nn2)/r2);
fff = 1./((nn2-nnn1)/r1+(nnn1-nn2)/r2);

figure(1);
subplot(1,2,1);
plot(nn1,ff);
axis([1 1.4 -30 0]);
xlabel('nn1');
legend('ff(nn1)');

subplot(1,2,2);
plot(nnn1,fff);
axis([1 4 0 30]);
xlabel('nnn1');
legend('fff(nnn1)');