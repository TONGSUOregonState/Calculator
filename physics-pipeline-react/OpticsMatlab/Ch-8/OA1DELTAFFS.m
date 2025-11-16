% OA1DELTAFfS
% Calculation of ratio of real part r of the parallel (p) and perpendicular (s) case,
% and the difference of the arguments of Fresnel's formulas with absorption.
% For values of K we calculate the absolute values of zp = rp exp i?p and
% zs = rs exp i?s and the argument as function of ?.
function OA1DELTAFFS;
n = 2;
K = 2;
Theta = (0:1:90);

zp = ((n-i*K)*cos(2*pi*(Theta/360))-sqrt(1-((sin(2*pi*(Theta/360)).^2)/((n-i*K)^2))))./((n-i*K)*cos(2*pi*(Theta/360))+sqrt(1-((sin(2*pi*(Theta/360)).^2)/((n-i*K)^2))));

zs = (cos(2*pi*(Theta/360))-(n-i*K)*sqrt(1-((sin(2*pi*(Theta/360)).^2)/((n-i*K)^2))))./(cos(2*pi*(Theta/360))+(n-i*K)*sqrt(1-((sin(2*pi*(Theta/360)).^2)/((n-i*K)^2))));

figure(1);
subplot(2,2,1);
plot(Theta,abs(zp));
axis([0 90 0.2 1]);
xlabel('\theta');
legend('abs(zp(\theta))');

subplot(2,2,2);
plot(Theta,angle(zp));
axis([0 90 -4 0]);
xlabel('\theta');
legend('angle(zp(\theta))');

subplot(2,2,3);
plot(Theta,abs(zs));
axis([0 90 0.6 1]);
xlabel('\theta');
legend('abs(zs(\theta))');

subplot(2,2,4);
plot(Theta,angle(zs));
axis([0 100 0 4]);
xlabel('\theta');
legend('angle(zs(\theta))');

% The ratio of the absolute value of zs/zp, that is P = tan? and the difference of the
% arguments of zs and zp, that is ?. (parallel (p), perpendicular (s))
figure(2);
subplot(3,1,1);
plot(Theta,abs(zs)./abs(zp));
axis([0 100 1 3]);
xlabel('\theta');
legend('abs(zs(\theta))/abs(zp(\theta))');

Delta = angle(zs)-angle(zp);

subplot(3,1,2);
plot(Theta,-Delta);
axis([0 90 -8 0]);
xlabel('\theta');
legend('-\Delta');
Psi = atan(abs(zs)./abs(zp));

subplot(3,1,3);
plot(Theta,Psi);
axis([0 90 0.7 1.2]);
xlabel('\theta');
legend('\psi');