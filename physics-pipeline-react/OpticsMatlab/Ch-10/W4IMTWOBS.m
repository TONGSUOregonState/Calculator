% W4IMTWOBS
% Imaging: Object is "Two bars" and cylindrical lens is used.
% f/10= f/2a            a is "radius" of cylindrical lens
function W4IMTWOBS;
global k a f;
Y = (-0.02:0.0011:0.02);
b1 = -0.008;
b2 = -0.005;
b3 = 0.005;
b4 = 0.008;
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
legend('Io(Y)');

axis([-0.02 0.02 0 2]);
xlabel('Y');

for j=1:length(Y)
    Iim1(j) = quad(@Iimf,b1,b2,[],[],Y(j));
    Iim2(j) = quad(@Iimf,b3,b4,[],[],Y(j));
end;
Iim = Iim1+Iim2;

subplot(2,1,2);
plot(Y,Iim);
axis([-0.02 0.02 0 10]);
xlabel('Y');
legend('Iim(Y)');

function Out=Iimf(YY,Y)
global k a f;
Out = 4*(a^2)*((sin((k*a*(Y-YY))/f))./(k*a*((Y-YY)/f))).^2;

