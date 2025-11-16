% D1CIRS

% Circular Opening, normalized intensity.
% When making the opening larger and larger,
% at the center is a change from minima to maxima
% to minima and so on.

function D1CIRS;
po = 4000;
Lamda = 0.0005;

a=(0.1:0.01:5);
k =2*pi/Lamda;


I=(Lamda^2)*power((sin((k*(power(a,2)))/(2*po))),2);

figure(1);
plot(a,I);
axis([0 5 0 3*10^(-7)]);                  % PLOTS LIMITS                    
xlabel('a');
legend('I(a)');

