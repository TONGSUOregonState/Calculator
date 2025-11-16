% M4SNELL
% Snellius Law for real and imaginary angle of refraction.
% We have n1 sin?1 = n2 sin?2, or ?2 = asin((n1/n2)sin?1).
% For n1> n2, after ?1is larger than the criticl angle, ?2 becomes complex.
% with x + iy for ?2


function M4SNELL;
% 1. Graph of ????2 = asin((n1/n2)sin????1) from 0 to 90 for n1<n2

Theta1 = (1:1:90);
n1 = 1;
n2 = 1.5;
Theta2 = asin((n1/n2)*sin(2*(pi/360)*Theta1));

figure(1);
subplot(2,1,1);
plot(Theta1,Theta2);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta1','Fontsize',12);
legend('\theta2(\theta1)');
title('n1<n2');

% 2. Graph of ????2 = asin((n1/n2)sin????1) from 0 to 90 for n1>n2

Theta1 = (1:1:90);
nn1 = 1.5;
nn2 =1;
Theta2 = asin((nn1/nn2)*sin(2*(pi/360)*Theta1));

subplot(2,1,2);
plot(Theta1,Theta2);
axis([0 60 0 2]);                  % PLOTS LIMITS                    
xlabel('\theta1','Fontsize',12);
legend('\theta2(\theta1)');
title('n1>n2');

% 3. Graphs of real and imaginary parts separately.

figure(2);
subplot(1,2,1);
plot(Theta1,real(Theta2));
axis([0 100 0 2]);                  % PLOTS LIMITS                    
xlabel('\theta1','Fontsize',12);
legend('real(\theta2(\theta1))');

subplot(1,2,2);
plot(Theta1,-imag(Theta2));
axis([0 100 -1 0]);                  % PLOTS LIMITS                    
xlabel('\theta1','Fontsize',12);
legend('-imag(\theta2(\theta1))');


Thetac = (360/(2*pi))*asin(nn2/nn1)