% OA2METPDS
% Calculation of n and K from input values P and ? for
% exact and approximate expressions
function OA2METPDS;
Delta = 114;
P = 0.50;
Psi = atan(P);
k = (1:1:40);
Thetak = k * 2;
% 1.Exact Expression

zk = sqrt((sin((2*pi*Thetak)/360).^2)+(((cos(2*Psi)+i*sin((2*pi*Delta)/360)*sin(2*Psi))*(sin((2*pi*Thetak)/360).^2))./(cos((2*pi*Thetak)/360)*(cos((2*pi*Delta)/360)*sin(2*Psi)+1))).^2);
nk = real(zk);
Kk = imag(zk);
% 2.For the approximation one disregards the sin^2 term
z1k =(((cos(2*Psi)+i*sin((2*pi*Delta)/360)*sin(2*Psi))*(sin((2*pi*Thetak)/360).^2))./(cos((2*pi*Thetak)/360)*(cos((2*pi*Delta)/360)*sin(2*Psi)+1)));
nnk = real(z1k);
KKk = imag(z1k);
% 3.Comparison
figure(1);
subplot(3,2,1);
plot(Thetak,real(zk),Thetak,real(z1k));
axis([0 100 0 4]);
xlabel('\thetak');
legend('real(zk)','real(z1k)');

subplot(3,2,2);
plot(Thetak,imag(zk),Thetak,imag(z1k));
axis([0 100 0 8]);
xlabel('\thetak');
legend('imag(zk)','imag(z1k)');

%4. The approximation can be written as two real expressions

nnk = ((sin((2*pi*Thetak)/360).^2)*cos(2*Psi))./(cos((2*pi*Thetak)/360)*(1+cos((2*pi*Delta)/360)*sin(2*Psi)));

KKk = ((sin((2*pi*Thetak)/360).^2)*(sin(Delta)*sin(2*Psi)))./(cos((2*pi*Thetak)/360)*(1+cos((2*pi*Delta)/360)*sin(2*Psi)));

subplot(3,1,2);
plot(Thetak,nnk,Thetak,real(zk),Thetak,real(z1k));
axis([0 80 0 2]);
xlabel('\thetak');
legend('nnk','real(zk)','real(z1k)');

subplot(3,1,3);
plot(Thetak,KKk,Thetak,imag(zk),Thetak,imag(z1k));
axis([0 80 0 8]);
xlabel('\thetak');
legend('KKk','imag(zk)','imag(z1k)');