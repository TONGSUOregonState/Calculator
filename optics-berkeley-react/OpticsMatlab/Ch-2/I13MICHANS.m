% I13MICHANS

% Michelson interferometer, Dependence on ?.
% (Beamsplitter is assumed to be a dialectric plate)
% Fringe pattern depending on angle ? for two fixed wavelength ? and ?? and fixed
% displacement D.
% All length in mm.

function I13MICHANS;
Lamda = 0.0005;
D = 0.05;
LamdaLamda = 0.00052;
Theta = (-0.301:0.001:0.3);

IM1 = cos((2*pi*D*cos(Theta))/Lamda).^2;
IM2 = cos((2*pi*D*cos(Theta))/LamdaLamda).^2;

figure(1);
plot(Theta,IM1,Theta,IM2);
axis([-0.4 0.3 0 1]);
xlabel('\theta');
legend('IM1(\theta,D)','IM2(\theta,D)');
