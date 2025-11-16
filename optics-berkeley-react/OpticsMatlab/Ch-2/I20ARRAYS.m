% I20ARRAYS
% Interference pattern of N sources 

% Parameters: Opening a, Wavelength ? , Number of lines N.
% Graph as function of ?, because of small angle ? = Y/X. Normalization to 1.
% For comparison of maxima, the numerator is plotted separately.

function I20ARRAYS;
Theta = (0:0.001:0.5);
Lamda = 0.0005;
a = 0.1;
aa = 0.2;
N = 5;
NN = 5;
IA1 = (sin(pi*N*(a/Lamda)*sin(2*(pi/360)*Theta))./(N*sin(pi*(a/Lamda)*sin(2*(pi/360)*Theta)))).^2;
y = sin(pi*N*(a/Lamda)*sin(2*(pi/360)*Theta)).^2;
y1 = sin(pi*(a/Lamda)*sin(2*(pi/360)*Theta)).^2;
IA2 = (sin(pi*NN*(aa/Lamda)*sin(2*(pi/360)*Theta))./(NN*sin(pi*(aa/Lamda)*sin(2*(pi/360)*Theta)))).^2;

figure(1);
subplot(2,1,1);
plot(Theta,IA1,Theta,y,Theta,y1);
axis([0 0.5 0 1]);
xlabel('\theta');
legend('IA1(\theta)','y(\theta)','y1(\theta)');

subplot(2,1,2);
plot(Theta,IA2);
axis([0 0.5 0 1]);
xlabel('\theta');
legend('IA2(\theta)');
