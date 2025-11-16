% F11CONVOS
% Convolution integral for functions y and S
function F11CONVOS;
global k a f b2;
b2 = 0.2;
f = 800;
a = 1;
Lamda = 0.0005;
k = (2*pi)/Lamda;

X = (0:0.001:1);
% tol = 0.01;
% Function S
Sx = S(X);

% Function y
yx = y(X);

figure(1);
subplot(2,2,1);
plot(X,yx);
axis([0 1 0 1.5]);
xlabel('X');
legend('y(X)');

subplot(2,2,2);
plot(X,Sx);
axis([0 1 -1 1]);
xlabel('X');
legend('S(X)');

nx = length(X);
for jk=1:nx
    Ix(jk) = 2*quad(@If,0,0.5,[],[],X(jk));
end;

subplot(2,1,2);
plot(X,Ix,X,Sx);
axis([0 1 -1 1]);
xlabel('X');
legend('I(X)','S(X)');

function Out=y(X)
global b2;
Out = (logical(b2-X)>=0);

function Out=S(X)
global k a f;
Out = sin((k*a*X)/f);

function Out=If(XX,X)
global k a f;
Out = y(XX).*(sin(k*a*(X-XX)/f));