% W12TWOROCOHS

% Imaging with coherent light:
% Two round apertures at Rayleigh distance, and round lens(T is R')

function W12TWOROCOHS;
global k a f;
% Object
% For choice of f# f/10=f/2a
f = 500;
a = 25;
Lamda = 0.0005;
k = (2*pi)/Lamda;
Y = (-0.01:0.00011:0.02);
% limits of integration
b1 = -0.00025;
b2 = 0.00025;
b3 = 0.00585;
b4 = 0.00635;


% Object Amplitudes:
Iob1 = (logical(b2-Y)>=0) - (logical(b1-Y)>=0);
Iob2 = (logical(b4-Y)>=0) - (logical(b3-Y)>=0);
Iob = Iob1 + Iob2;
% Tol = 0.1;


% Image


for ind=1:length(Y)
    Iim(ind)=(quad(@Iimfun,b1,b2,[],[],Y(ind)) +quad(@Iimfun,b3,b4,[],[],Y(ind))).^2;    
end;

figure(1);
subplot(1,2,1);
plot(Y,Iob);
xlabel('Y');
legend('Io(Y)');
axis([-0.01 0.02 0 2]);
subplot(1,2,2);
plot(Y,Iim);
xlabel('Y');
legend('Iim(Y)');
axis([-0.01 0.02 0 1]);



function Out=Iimfun(YY,Y)
global k a f;
Out = 4*(a^2)*(besselj(1,(k*a*(Y-YY))/f)./(k*a*((Y-YY)/f)));

