% W5IMONEROS
% Imaging:Object is one round aperture and round lens is
% used
% Object:
% Since we are using circular symmetry, the round aperture is a "bar" in the coordinate X,
% f#10 is f/2a equal 10
function W5IMONEROS;
global b1 b2 k a f;
Y = (-0.01:0.0001:0.01);
% tol = 0.01;
b1 = -0.002;
b2 = 0.002;
Lamda = 0.0005;
f = 500;
a = 25;
k = (2*pi)/Lamda;

figure(1);
subplot(2,1,1);
plot(Y,Iob(Y));
axis([-0.01 0.01 0 1.1]);
xlabel('Y');
legend('Iob(Y)');

% Unnormalized
for j=1:length(Y)
    Iim(j) = quad(@Iimfunct,b1,b2,[],[],Y(j));
end;

subplot(2,1,2);
plot(Y,Iim);
axis([-0.01 0.01 0 3]);
xlabel('Y');
legend('Iim(Y)');

function Out=Iob(Y);
global b1 b2;
Out = (logical(b2-Y)>=0) - (logical(b1-Y)>=0);

function Out=Iimfunct(YY,Y)
global k a f;
Out = Iob(YY)*4*(a^2).*(besselj(1,((k*a*(Y-YY))/f))./(k*a*((Y-YY)/f))).^2;

