% D8FARONEXS
% Graph of part of the diffraction pattern of a round aperture of radius a and
% wavelength ????.
% The graph is not normalized.
% X is distace:Slit-Screen,
% R is coordinate on Screen,
% All length in mm, parameters are globally defined above the graph.

function D8FARONEXS;
R = (3:0.1:10);
X = 1000;
Lamda = 0.010;
a = 1.5;

I = (besselj(1,(2*pi*a*R/(Lamda*X)))./(2*pi*a*R/(Lamda*X))).^2;

figure(1);
plot(R,I);
axis([3 10 0 0.02]);                  % PLOTS LIMITS                    
xlabel('R');
legend('I(R)');

