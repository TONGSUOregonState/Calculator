% I3COSGRA

% Superposition of two cosine waves, one having an optical path differnce ? with respect to the
% other. The sum is squared to result in the intensity.

% We are looking at the time dependence, the graphs are plots in space x and time t.
% Period T, path difference ? , wavelength ?.

function I3COSGRA;
% 1. Graph for optical path difference corresponding to a maximum
Lamda = 1;
A = 1;
N = 15;
T = 1;
Delta1 = 1;

i = (0:1:N);
j = (0:1:N);
x = -0.2 + 0.05*i;
t1 = -0.2 + 0.05*j;

for r=1:length(x);
    for c=1:length(t1);
        uc(r,c) = ((2*A*cos(2*pi*(Delta1/(2*Lamda))))*(cos(2*pi*(x(r)/Lamda-t1(c)/T)-2*pi*(Delta1/(2*Lamda)))))^2;
    end;
end;

M = uc;

figure(1);
subplot(2,1,1);
mesh(M);

% 2. Graph for optical path difference corresponding to a minimum
N = 40;
i = (0:1:N);
j = (0:1:N);

xx = -0.2+ 0.04*i;
t1 = -0.2 + 0.02*j;
Delta2 = 0.5;
T = 1;

for r=1:length(xx);
    for c=1:length(t1);
        ud(r,c) = ((2*A*cos(2*pi*(Delta2/(2*Lamda))))*(cos(2*pi*(xx(r)/Lamda-t1(c)/T)-2*pi*(Delta2/(2*Lamda)))))^2;
    end;
end;
MM = ud;

subplot(2,1,2);
mesh(MM);