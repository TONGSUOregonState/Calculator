% O8ARDELS Fresnel's Formulas with Absorption

% Calculation of real part and argument of parallel zrp and perpendicular zrs case
% of Fresnel's formulas with absorption. We assume zrs = rs exp ids and zrp = rp exp idp
% and the argument as function of q.
% The difference of the angle of the two components of the reflected light is plotted.
% This angle is the angle discussed in chapter 5 for light elliptically polarized by reflection.

function O8ARDELS;
n1 = 1;
n2 = 3;
K = 5;

Theta = (0:1:89.9);
zrp = (((n2-i*K)/n1)*cos(2*(pi/360)*Theta)- sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(((n2-i*K)/n1)*cos(2*(pi/360)*Theta)+ sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));
zrs = (cos(2*(pi/360)*Theta)-((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));

argDelta = angle(zrs)-angle(zrp)-pi;

figure(1);
plot(Theta,argDelta);
axis([0 100 -0.1 6.5]);
xlabel('\theta');
legend('arg\Delta(\theta)');