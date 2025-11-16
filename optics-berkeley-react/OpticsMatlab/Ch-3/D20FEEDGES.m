% D20FEEDGES
% Fresnel's Integrals for the calculation of the diffractionon an edge.
% All units in mm, global definition of the parameters.
function D20FEEDGES;
X = 4000;
Lamda = 5*10^(-4);

Y = (-4:0.05:15);


% We treat the diffraction at an edge like diffraction on a large slit.
% One side is set at d = 0, the other at d = -inif. This translates into

% For p(Y) = - infinite  
%                         we have Cp(Y) = Sp(Y) = -0.5
% sqrt(2/(Lamda*X))=1

qY = Y*1;

% We take q(Y) equal Y for scaling,

qY = Y;
qY1 = (0:-0.05:-4);
qY2 = (0.05:0.05:15);

[t,Cq1] = ode45(@C,qY1,[0]);
[t,Cq2] = ode45(@C,qY2,[0]);
Cq = [flipud(Cq1);Cq2];
[t,Sq1] = ode45(@S,qY1,[0]);
[t,Sq2] = ode45(@S,qY2,[0]);
Sq = [flipud(Sq1);Sq2];

IY = ((Cq-(-0.5)).^2)+((Sq-(-0.5)).^2);

figure(1);
subplot(2,1,1);
plot(Y,IY);
axis([-5 15 0 3]);                
xlabel('Y');
legend('IY(Y)');


pY = Y-10;
pY1 = (0:-0.05:-14);
pY2 = (0.05:0.05:5);

[t,Cp1] = ode45(@C,pY1,[0]);
[t,Cp2] = ode45(@C,pY2,[0]);
Cp = [flipud(Cp1);Cp2];

[t,Sp1] = ode45(@S,pY1,[0]);
[t,Sp2] = ode45(@S,pY2,[0]);
Sp = [flipud(Sp1);Sp2];

IIY = ((Cq-Cp).^2)+((Sq-Sp).^2);

subplot(2,1,2);
plot(Y,IIY);
axis([-4 16 0 4]);                
xlabel('Y');
legend('IIY(Y)');


function Out=S(T,X)
Out = sin((pi/2)*T^2);
function Out=C(T,X)
Out = cos((pi/2)*T^2);



