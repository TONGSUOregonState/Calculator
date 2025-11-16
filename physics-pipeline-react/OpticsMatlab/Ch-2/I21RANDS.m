% I21RANDS

% Addition of exponential-functions with random angles
function I21RANDS;
% The real part of the sum of exp i Theta is plotted.
f = (1:1:100);
N = f;
k = (1:1:1000);
% i = sqrt(-1);

Theta = rand(size(k)).*2*pi;

for ind=1:length(f)
    y(ind)=0;
    for k=1:N(ind)
        y(ind) = y(ind) + exp(i*(Theta(k)));
    end;
    y(ind) = (1/N(ind))*(y(ind));
end;
figure(1);
plot(f,real(y));
xlabel('f');
legend('real(y(f))');

