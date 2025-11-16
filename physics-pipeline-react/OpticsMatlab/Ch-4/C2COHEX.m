% C2COHEX

% Intensity of an extended source of width s and interfernce diffraction on a
% double slit.

% Slit openings d and separation a. Distance from source to slit Z, from slit to
% screen X, coordinate on screen is Y, small angle approximation Y/X = ?.



function C2COHEX;
global a d Lamda Z s1 Psi1 k Theta;
a=1;
d=0.05;
Lamda = 0.0005;
Z = 9000;
s1 = 1;
s2 = 1.5;
s3 = 4.5;
s4 = 5;

Psi1 = s1/Z;
Psi2 = s2/Z;
Psi3 = s3/Z;
Psi4 = s4/Z;

k=0:1:200;
Theta =0.01-k*0.0001;


 nx = length(Theta);
 for r=1:nx;
  
    I1(r)= quad(@fc,0,Psi1,[],[],Theta(r));
    I2(r)= quad(@fc,0,Psi2,[],[],Theta(r));
    I3(r)= quad(@fc,0,Psi3,[],[],Theta(r));
    I4(r)= quad(@fc,0,Psi4,[],[],Theta(r));
   
   
    
end;


figure(1);
subplot(2,2,1);
plot(Theta,I1);
axis([-0.01 0.01 0 3*10^(-4)]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I1(\theta)');

subplot(2,2,2);
plot(Theta,I2);
axis([-0.01 0.01 0 3*10^(-4)]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I2(\theta)');

subplot(2,2,3);
plot(Theta,I3);
axis([-0.01 0.01 0 3*10^(-4)]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I3(\theta)');

subplot(2,2,4);
plot(Theta,I4);
axis([-0.01 0.01 0 3*10^(-4)]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I4(\theta)');

function Out=fc(Psi,Theta)
global a d Lamda Z s1 Psi1;
Out = ((sin(pi*(d/Lamda)*(sin(Theta)+sin(Psi))).^2)./((pi*(d/Lamda)*(sin(Theta)+sin(Psi))).^2)).*cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi))).^2;
