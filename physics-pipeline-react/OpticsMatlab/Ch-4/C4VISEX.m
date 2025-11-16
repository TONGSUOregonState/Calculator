% C4VISEX
% Visibility for an extended source.
% We have set Y'/X equal to s/Z
function C4VISEX;

a = 1;
Lamda = 0.0005;
Z = 9000;
s = 0.01:0.01:10;

VV = sin(pi*((a*s)/(Lamda*Z)))./(pi*((a*s)/(Lamda*Z)));

figure(1);
plot(s,abs(VV));
axis([0 10 0 1]);                  % PLOTS LIMITS                    
xlabel('s');
legend('abs(VV(s))')