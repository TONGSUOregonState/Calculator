%C1COH2S
%Intensity of two sources separated by s. Superposition of two double
%slit pattern.
%The slits have width d and separation a, one pattern is untilted with ? = 0, the
%other tilted by ? = s/Z , distance from sources to slit is Z.
%Distance from slit to screen is X, coordinate on screen is Y, Y/X = ?.
%By enlarging ?, starting from 0, one finds the first " fringe disappearence". If ?
%is further enlarged, the fringes reappear, but now the minima are not zero.
%Another point of view: Fringes may disapear for constant s and changing a.

function C1COH2S;

Theta = (-0.006:0.00009:0.006);
d = 0.05;
a = 1;
Z = 9000;
s1 = 0;
s2 = 1.5;
s3 = 2.25;
s4 = 2.6;
Psi1 = s1/Z;
Psi2 = s2/Z;
Psi3 = s3/Z;
Psi4 = s4/Z;
Lamda = 0.0005;

I1= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*sin(Theta))).^2;

II1= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi1)))).^2;

figure(1);
subplot(2,2,1);
plot(Theta,I1+II1);
axis([-0.006 0.006 0 2]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I1(\theta)+II1(\theta)'); 

II2= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi2)))).^2;

subplot(2,2,2);
plot(Theta,I1+II2);
axis([-0.006 0.006 0 2]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I1(\theta)+II2(\theta)'); 

II3= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi3)))).^2;

subplot(2,2,3);
plot(Theta,I1+II3);
axis([-0.006 0.006 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I1(\theta)+II3(\theta)'); 

II4= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi4)))).^2;

subplot(2,2,4);
plot(Theta,I1+II4);
axis([-0.006 0.006 0 1.5]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I1(\theta)+II4(\theta)'); 


