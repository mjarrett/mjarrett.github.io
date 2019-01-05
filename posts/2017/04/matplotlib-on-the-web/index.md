<html><body><p>I've been learning a lot of Matplotlib recently at work and through a course I took on data visualization. I've especially had fun with making interactive plots, and I was curious about whether MPL code could be converted into HTML5 and/or javascript for presentation on the web. I'm a researcher, not a developer, so my main goal was to use the datavis library I already know without having to learn a bunch of javascript.

In my googling, I've found a few solutions to this issue. None are perfect for what I was hoping to do (have Django and MPL work together to produce a nice interactive figure) but I did come across some interesting tools.

<!--more-->
</p><h3></h3>
<h3>The 'webagg' backend for matplotlib</h3>
This was the solution I was expecting to work. When you specify the webagg backend after importing matplotlib, running f.show() starts up a mini web server and opens the plot in your default browser. As far as I can tell, the plot has the full functionality you'd get with any of the traditional backends.

The magic of having full interactivity in the browser relies on the figure staying connected to the python kernel, which is non-trivial to set up on a live website. I haven't found any instructions that a non-expert can follow to set this up on a personal website.

 
<h3>MPLD3</h3>
<a href="http://mpld3.github.io/index.html">mpld3</a> is a python package that converts your matplotlib code into d3.js code. It's great! Instead of <code>f.show()</code>, you can run <code>mpld3.save_html(f, 'test.html')</code> and you have a html snippet that can be inserted into a webpage. The plot below is just vanilla matplotlib saved with mpld3.save_html.

%CODE3%

The plots look great and you get the default panning/zooming functions you expect in MPL. However widgets don't work so you don't get the full interactive experience. mpld3 does have some plugins, so for example you can get tooltips when hovering over plot elements. This is great, but requires some non-MPL code. Below I've added a hover tooltip which displays the label of a line plot when you hover over it. Very neat, but still not quite matplotlib's picker.

%CODE4%

The mpld3 website has a tutorial on writing your own plugins, and it looks like there's very little stopping you from recreated any feature you want as long as you know d3.js. I really appreciate all the work that's gone into mpld3, but it's still missing some pretty important features. For example, you might have noticed the years in the x-axis tick labels have a comma in them, which would be easily fixable in vanilla MPL with <code>ax.xaxis.set_ticklabels()</code>. But mpld3 doesn't (yet?) have support for setting ticklabels, so you're stuck with whatever shows up. A small price to pay for the ease of use, but still noticeable.
<h3>Bokeh</h3>
<a href="http://bokeh.pydata.org">Bokeh</a> is a python visualization library that targets web browsers. It looks like it's further along in development than mpld3, however it's not trivially convertible from matplotlib. There is a bokeh.mpl module, but it is no longer maintained and is considered deprecated. I haven't tried Bokeh myself yet, but if I was going make web visuals a major focus and wanted to stick with python, this is probably where I'd end up.
<h3>plot.ly</h3>
<a href="http://plot.ly">plot.ly</a> seems to be the enterprise solution for interactive web plots in python (and other languages), and it funnels users towards hosting plots on its own server and has a subscription model. But they've released their code as open source, and it's possible to use the plotly library to convert your code to javascript to add to your own site. It's certainly more fully featured, but it's also substantially heavier than mpld3 -- for the same plot, the html snippet is 20,000 character for plot.ly but 2,000 characters for mpld3. To make the plot below, I took the same code as above and just added
<code>
import plotly.plotly as py
import plotly.tools as tls
import plotly.offline as plo</code>

plotly_fig = tls.mpl_to_plotly( f )
plo.plot(plotly_fig, filename='housing_plotly')

%CODE5%

The tooltips happen without any extra code. I haven't spend much time learning the ins and outs of plotly so I'm not sure how customizable it is. I like that it works out of the box and looks professional, but the default tooltips and toolbar do feel a little busy. Hard to argue with free and easy though!

For me, the likely answer seems to be that I'll use mpld3 when I want simple and clean web visualizations, and I'll use plot.ly when I want to have a bit more interactivity. If I end up spending more of my time doing this I'll just learn Bokeh instead, but I'd rather not learn a new library if I don't have to. And I'll keep my fingers crossed that smarter people than me make it easy to host fully interactive MPL plots which stay connected to the python kernel on any django website.

<strong>Update:</strong> Jake VanderPlas gave a great talk at Pycon that covers all this that I wish I'd found while researching all this.

https://www.youtube.com/watch?v=FytuB8nFHPQ</body></html>