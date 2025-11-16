% D3FASLITEXS
% Study of side maxima and minima of the Slit
% Diffraction on a slit of width d and wavelength ?.
% X is distace: Slit-Screen,
% Y is coordinate on Screen.
% For small angles, Y/X is proportional to the diffraction angle.
% All length in mm.

function D3FASLITEXS;

Lamda = 0.0005;
X = 4000;
Y = (18:1:150);
d = 0.08;
I1 = (sin(pi*(d/Lamda)*(Y/X))./(pi*(d/Lamda)*(Y/X))).^2;


figure(1);
plot(Y,real(I1),Y,imag(I1));
axis([0 150 0 0.12]);                  % PLOTS LIMITS                    
xlabel('Y');
legend('I1(Y)');
