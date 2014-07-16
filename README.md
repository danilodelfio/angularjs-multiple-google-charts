angularjs-multiple-google-charts
================================

AngularJS controller that manages different chart types in the same page.

The problem that I meet and I tried to solve is that in a page controlled by an angular controller
where I need more than a charts (Google charts http://bouil.github.io/angular-google-chart) with
a single source of data and different type of presentation, need multiple instances of same "object",
then with a little workaround, not elegant but that works for me, I have managed charts with an array
that I fill with the same google chart object with different type filled in.
I hope to evolve this with a directive that manages this in a more clean way, but, for now,
if you need more that a chart in a single angular page you can use this.

I hope this help you.


You can find a demo here:

http://jsfiddle.net/ddelfio/n5Q3y/
