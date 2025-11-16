% W1FTSERIS
% Fourier serie of spatial wavelength ???? for the interval from -1 to 1( shown to 2).
% For N = 0 the only term is a sine wave from -1 to 1, of wavelength ? = 2.
% For N = 1 a sine-term with 1/3 of ? and smaller amplitude is added.
% For N = 2 a term with 1/5 of ? and smaller amplitude, and so on.
% If N is large, we see a perfect step function.
% For smaller N ( in the 20th) we see "Gibb's phenomenon", the corners
% are not round and there is "overshooting". For large N it disappears.
function W1FTSERIS;
global N Lamda;
x = (-1:0.01:1.9);
n = (0:1:200);
N = 100;
Lamda = 1;


% For larger and larger N one can see how more and more
% waves with shorter and shorter wavelength are used to build the step
% function.

g0 = (4*sin(pi*x*(1/Lamda)))/pi;
g1 = (4*sin(pi*x*((2*1+1)/Lamda)))/((2*1+1)*pi);
g2 = (4*sin(pi*x*((2*2+1)/Lamda)))/((2*2+1)*pi);

figure(1);
subplot(2,2,1);
plot(x,g0,x,g1,x,g2);
axis([-1 2 -2 2]);
xlabel('x');
legend('g0(x)','g1(x)','g2(x)');

subplot(2,2,2);
plot(x,g0+g1+g2);
axis([-1 2 -2 2]);
xlabel('x');
legend('g0(x)+g1(x)+g2(x)');

subplot(2,1,2);
plot(x,g(x));
axis([-1 2 -2 2]);
xlabel('x');
legend('g(x)');




function Out=f(n)
global Lamda;
Out = (2*n+1)/(2*Lamda);

function Out=g(x)
global N;
sum = 0;
for n=0:N
    sum = sum + (4*sin(2*pi*x*f(n)))/((2*n+1)*pi);    
end;
Out = sum;
