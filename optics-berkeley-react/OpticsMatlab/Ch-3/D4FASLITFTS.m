
% D4FASLITFTS
% Fourier transformation of step function of width 0 to d.
% The FT of the FT is also shown
function D4FASLITFTS;


I=(0:1:255);
d=20;

X= (logical(I)>0) - (logical(I-d)>0);

figure(1);
plot(I,real(X),I,imag(X));
axis([0 300 -0.5 1.5]);                  % PLOTS LIMITS                    
xlabel('i');
legend('I1(Y)');





C= fft(X);
N = length(C);
J= (0:1:N-1);
figure(2);
axis([0 0.6 0 1]);  

plot(J/255,real(C)/sqrt(N),J/255,-imag(C)/sqrt(N));
                % PLOTS LIMITS        
axis([0 0.6 -1 2]);
xlabel('j/255');
legend('real(C)/sqrt(N)','-imag(C)/sqrt(N)');



Z = ifft(C);
figure(3);
axis([0 0.6 0 1]);  
plot(I,real(Z),I,imag(Z));
legend('real(Z(I))','imag(Z(I))');