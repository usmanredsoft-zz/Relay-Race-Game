var questions = 'Which instrument can be used to observe a small insect on the trunk of a tree?---a compass---a graduated cylinder---a magnifying lens---a microscope---SC.5.N.2.1---3|||Which of the following is least likely to make an experiment trustworthy?---collecting measurements---having several trials---having several variables---recording all steps---SC.5.N.2.2---3|||What is the least number of trials conducted for each experiment?---two---three---five---ten---SC.5.N.1.3---2|||Why is it important to record all of the steps in your procedure?---so that the experiment may be repeated---the log book will look good---people will enjoy reading it---to show the variables used---SC.5.N.2.2---1|||Which of the following measures the growth of a plant in one month?---measure the amount of soil used---measure the height after one month---measure the mass after one month---measure the volume after one month---SC.5.N.2.2---2|||What suggestion should be given to an experimenter that collects measurements different from those measured in the first two trials?---change the results of the last experiment---make better measurements---repeat the experiment again---try a new experiment---SC.5.N.1.3---3|||Which step in an experiment happens after all data has been measured and recorded?---analyze the data---change the procedure---make a hypothesis---start a new experiment---SC.5.N.1.1---1|||What term is used to describe collected measurements?---control---data---tools---variables---SC.5.N.1.1---2|||What process is necessary to draw the best conclusions?---analyzing the data---analyzing the research---forming an opinion---surveying friends---SC.5.N.1.1---1|||What is a successful method used by scientist to explore the natural world?---make predictions based on one experiment---read about natural disasters---record, analyze, and communicate results---survey people for their opinionsS---C.5.N.1.3---3|||What is an essential skill used in scientific investigations?---adding and subtracting---comparing and contrasting---multiplying and dividing---reducing and reusing---SC.5.N.1.6---2|||Which method is used to determine which design model is the strongest?---compare the appearance---compare the cost of construction---compare the materials used---compare the strength---SC.5.N.1.6---4|||Which of the following is defined as the ways that two or more things are similar?---compare---contrast---differences---variables---SC.5.N.1.6---1|||Which of the following is defined as the ways that two or more things are different?---compare---contrast---similar---variables---SC.5.N.1.6---2|||Which of the following is not a reason for designing a model?---the real thing is too big to observe---the real thing is too small to see---to replace the real thing---to learn more about the real thing---SC.5.N.1.2---3|||Which of the following is the best way to teach the function of the heart?---listen to the heartbeat---look at a picture---make a model---read about it---SC.5.N.1.2---3|||Which of the following materials is most likely used to make a model of the lungs?---two balloons---two cotton swabs---two marbles---two straws---SC.5.N.1.2---1|||What inference about the Earth’s rotation can be made based on past years?---the Earth will revolve every 12 hours---the Earth will revolve once every 24 hours---the Earth will make one rotation every 12 hours---the Earth will make one rotation every 24 hours---SC.5.N.1.6---4|||What is an inference that may made if bread is left on a counter-top for a long period of time?---the bread will evaporate---mold will grow on the bread---more bread will be produced---no changes will occur---SC.5.N.1.6---2|||What predictable and logical inference may be made after dark clouds collect in the sky?---rain---snow---spring---summer---SC.5.N.1.6---1|||What predictable and logical inference may be made about the season that follows summer?---fall---spring---summer---winter---SC.5.N.1.6---1|||Which tool can best help you to observe small organisms crawling outside?---a camera---a compass---a magnifying lens---a microscope---SC.5.N.2.1---3|||What is the purpose of collecting and interpreting data?---to explain an event or concept---to explain a hypothesis---to explain the next experiment---to explain the problem---SC.5.N.1.6---1|||How can the exact findings of an experiment be shared with others?---recording feelings and thoughts---recording the data collected---recording the purpose---writing a summary---SC.5.N.1.3---2|||Which of the following best describes how to make an experiment valid?---repeat the experiment at least three times---test the experiment using many variables---the first set of data is the best---use data that matches the hypothesis---SC.5.N.2.2---1|||Which of the following is not a part of the scientific process?---drawing a conclusion before experimenting---a list of procedures---a problem to be tested---a variable for comparison---SC.5.N.1.1---1|||Which of the following is a requirement for procedures in an investigation?---steps copied from a book---steps must be repeatable---written after the experiment---written in long sentences---SC.5.N.1.3---2|||Which term is used to describe the thing that changes in an experiment?---controlled variable---dependent variable---independent variable---responding variable---SC.5.N.1.2---3';

questions = questions.split("|||");

for (var i = 0; i < questions.length; i++)
{
	questions[i] = questions[i].split("---");
}