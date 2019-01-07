<html><body><p>Panda's Dataframe.plot() function is handy, but sometimes I run up against edge cases and spend too much time trying to fix them.

On one case recently, I wanted to overlay a line plot on top of a bar plot. Easy, right? Not when your dataframe has a datetime axis. The bar plot and and line plot functions format the x-axis date labels differently, and cause chaos when you try to use them on the same axes. None of the usual tick label formatting methods got me back anything useable.

<!--more-->

The solution was to take a step back and use the basic matplotlib functions to plot instead of the pandas wrappers. Calling ax.plot() and ax.bar() give sensible outputs where df.plot() didn't.

See the below notebook for an example of the problem and solution.

 

<script src="https://gist.github.com/mjarrett/72ac77d80e50f32f020ca1abee5bdc49.js"></script></p></body></html>