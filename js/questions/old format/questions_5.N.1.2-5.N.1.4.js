var questions = 'Which of the following is not a reason for designing a model?---the real thing is too big to observe---the real thing is too small to see---to replace the real thing---to learn more about the real thing---5.N.1.2/5.N.1.4---3|||Which of the following is the best way to teach the function of the heart?---listen to the heartbeat---look at a picture---make a model---read about it---5.N.1.2/5.N.1.4---3|||Which of the following materials is most likely used to make a model of the lungs?---two balloons---two cotton swabs---two marbles---two straws---5.N.1.2/5.N.1.4---1|||Which term is used to describe the thing that changes in an experiment?---controlled variable---dependent variable---independent variable---responding variable---5.N.1.2/5.N.1.4---3|||Which term is used to describe the part of the experiment that remains unchanged?---control group---dependent variable---independent variable---experimental group---5.N.1.2/5.N.1.4---1|||Which part of the experiment requires that the treatment of the control and the experimental groups be kept the same?---control group---controlled variables---independent variable---experimental group---5.N.1.2/5.N.1.4---2|||Which variable represents the measurable outcome of the experiment?---control group---constant variables---outcome variable---experimental group---5.N.1.2/5.N.1.4---3|||Which of the following is the experimental group compared to during an investigation?---control group---controlled variables---dependent variable---experimental group---5.N.1.2/5.N.1.4---1|||Which type of investigation studies organisms in their natural habitat?---Controlled Experiments---Models---Simulations---Field Studies---5.N.1.2/5.N.1.4---4|||Which type of investigation is best used for an interactive lesson on flying airplanes without ever seeing the real airplane?---a controlled experiment---a model---a simulation---a field study---5.N.1.2/5.N.1.4---3';

questions = questions.split("|||");

for (var i = 0; i < questions.length; i++)
{
	questions[i] = questions[i].split("---");
}