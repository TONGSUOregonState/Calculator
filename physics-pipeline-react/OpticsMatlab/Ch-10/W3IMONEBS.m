% W3IMONEBS
% Imaging: Object is one bar and a cylindrical lens is used.
% f#10 is f/2a equal 10    a is "radius of cylindrical lens
function W3IMONEBS;
global k a f b1 b2;
Y = (-0.01:0.0001:0.01);
b1 = -0.002;
b2 = 0.002;
Lamda = 0.0005;
f = 500;
a = 25;
k = (2*pi)/Lamda;
% TOL = 0.01;

figure(1);
subplot(2,2,1);
plot(Y,Iob(Y));
axis([-0.01 0.01 0 2]);
xlabel('Y');
legend('Iob(Y)');



subplot(2,2,2);
plot(Y,S(Y));
axis([-0.01 0.01 0 3000]);
xlabel('Y');
legend('S(Y)');

% Unnormalized
for j=1:length(Y)
    Iim(j) = quad(@Iimfunct,b1,b2,[],[],Y(j));
end;

subplot(2,1,2);
plot(Y,Iim);
axis([-0.01 0.01 0 10]);
xlabel('Y');
legend('Iim(Y)');

function Out=Iob(Y);
global b1 b2;
Out = (logical(b2-Y)>=0)-(logical(b1-Y)>=0);


function Out=S(Y);
global k a f;
Out = 4*(a^2)*((sin((k*a*Y)/f))./(k*a*(Y/f))).^2;

function Out=Iimfunct(YY,Y)
global k a f;
Out = Iob(YY)*4*(a^2).*((sin((k*a*(Y-YY))/f)./(k*a*((Y-YY)/f))).^2);

