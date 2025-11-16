% I12MICHDLS

% Michelson interferometer
% Beamsplitter is assumed to be a plane parallel plate
% Fringe pattern depending on D for wavelength ? = .0005, and depending on wavelength
% ? for D = .003. The angle ? = 0.
% All length in mm.

function I12MICHDLS;
% 1. Dependence on D
Theta = 0;
Lamda = 0.0005;
D = (0.027:0.00001:0.0325);
I1 = cos((2*pi*D*cos(Theta))/Lamda).^2;

figure(1);
subplot(2,1,1);
plot(D,I1);
axis([0.026 0.033 0 1]);
xlabel('D');
legend('I1(D)');

%2. Dependence on Lamda
Lamda = (0.0004:0.000001:0.0008);
D = 0.003;
I2 = cos((2*pi*D*cos(Theta))./Lamda).^2;
subplot(2,1,2);
plot(Lamda,I2);
axis([3e-4 8e-4 0 1]);
xlabel('\lambda');
legend('I2(\lambda)');
