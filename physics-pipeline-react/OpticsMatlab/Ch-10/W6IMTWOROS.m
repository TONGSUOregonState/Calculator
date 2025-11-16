% W6IMTWOROS
% Imaging: Two round apertures and a round lens, (R' is X)

function W6IMTWOROS;
global k a f;
Y = (-0.1:0.00111:0.6);
b1 = -0.002;
b2 = 0.002;
b3 = 0.012;
b4 = 0.016;
% tol = 0.1
% f/10 = f/2a
Lamda = 0.0005;
k = (2*pi)/Lamda;
f = 500;
a = 25;

Io1= (logical(b2-Y)>=0) -  (logical(b1-Y)>=0);
Io2= (logical(b4-Y)>=0) -  (logical(b3-Y)>=0);
Io = Io1 + Io2;

figure(1);
subplot(2,1,1);
plot(Y,Io);
axis([-0.01 0.02 0 2]);
xlabel('Y');
legend('Io(Y)');

for j=1:length(Y)
    Iim(j) = quad(@Iimf,b1,b2,[],[],Y(j))+ quad(@Iimf,b3,b4,[],[],Y(j));
end;

subplot(2,1,2);
plot(Y,Iim);
axis([-0.01 0.03 0 3]);
xlabel('Y');
legend('Iim(Y)');

function Out=Iimf(YY,Y)
global k a f;
Out = 4*(a^2).*(besselj(1,((k*a*(Y-YY))/f))./(k*a*((Y-YY)/f))).^2;


