% C3VIS2S

% Visibility for two point sources.
% We have set Y'/X equal to s/Z

function C3VIS2S;

a = 1;
Lamda = 0.0005;
Z = 9000;
s = (0.01:0.01:10);

V = cos(pi*((a*s)/(Lamda*Z)));

figure(1);
plot(s,abs(V));
axis([0 10 0 1]);                  % PLOTS LIMITS                    
xlabel('s');
legend('abs(V(s))');